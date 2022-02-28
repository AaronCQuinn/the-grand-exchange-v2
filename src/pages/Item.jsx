import React, { useContext} from 'react'
import ItemBar from '../components/ItemBar';
import Navbar from '../components/Navbar';
import ItemContext from '../context/ItemContext'
import StatsBar from '../components/StatsBar';
import Stat from '../components/Stat';
import {GridLoader} from 'react-spinners'
import PriceChart from '../components/PriceChart';
import VolumeChart from '../components/VolumeChart';
import { useNavigate } from 'react-router-dom';

const Item = () => {
    const {latestWikiData, latestVolumeData, item, fetching} = useContext(ItemContext);
    let navigate = useNavigate();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (item === '') {
        return (
            <div>
                {navigate('/error')}
            </div>
        )
    } else {
        return fetching ? (
        <div className='flex flex-col h-screen'>
            <Navbar />     
            <ItemBar />     
            <div className="container mx-auto flex justify-center my-5">
            <div className="w-full shadow-lg stats grid-cols-3">
                    <div className="stat bg-neutral place-items-center place-content-center">
                        <div className="stat-value"><GridLoader color={'#37cdbe'}/></div> 
                    </div> 
                    <div className="stat bg-neutral place-items-center place-content-center">
                        <div className="stat-value"><GridLoader color={'#37cdbe'} /></div> 
                    </div> 
                    <div className="stat bg-neutral place-items-center place-content-center">
                        <div className={item.members ? "stat-value text-success" : "stat-value text-error"}><GridLoader color={'#37cdbe'} /></div> 
                    </div>
                </div>
                
            </div>
        </div> )
        
        :

        (
            <>
            <Navbar />
            <ItemBar />
            <StatsBar 
                StatOne={
                    <Stat 
                        title={'Latest High Price'} 
                        stat={numberWithCommas(latestWikiData[item.id].high) + ' GP'}
                        desc={latestWikiData[item.id].latestHigh}    
                    />} 
                StatTwo={
                    <Stat
                        title={'Latest Low Price'}
                        stat={numberWithCommas(latestWikiData[item.id].low) + ' GP'}
                        desc={latestWikiData[item.id].latestLow}
                    />
                }
                StatThree={
                    <Stat
                        title={'Members Item'}
                        stat={item.members.toString().toUpperCase()}
                        desc={''}
                    />
                }
            />
            <StatsBar
                StatOne={
                    <Stat
                        title={'Daily Trade Volume'}
                        stat={numberWithCommas(latestVolumeData[latestVolumeData.length - 1].tradeVolume)}
                        desc={latestVolumeData[latestVolumeData.length - 1].dateString}
                    />
                }
                StatTwo={
                    <Stat
                        title={'Previous Day Trade Volume'}
                        stat={numberWithCommas(latestVolumeData[latestVolumeData.length - 2].tradeVolume)}
                        desc={latestVolumeData[latestVolumeData.length - 2].dateString}
                    />
                }
                StatThree={
                    <Stat
                        title={'Four Hour Trade Margin'}
                        stat={numberWithCommas(item.limit * (latestWikiData[item.id].high - latestWikiData[item.id].low) + " GP")}
                        desc={'Maximum potential flip in a four hour buy limit'}
                    />
                }
            />
            <PriceChart />
            <VolumeChart />
            </>
        )
    }
}

export default Item