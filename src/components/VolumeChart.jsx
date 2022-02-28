import {React, useContext} from 'react'
import ItemContext from '../context/ItemContext'
import ReactApexChart from 'react-apexcharts';

const VolumeChart = () => {
    const {item, timeSeriesData} = useContext(ItemContext);
    let lowVolume = [], highVolume = [], timeStamps = [];
    timeSeriesData.forEach(({highPriceVolume, lowPriceVolume, timestamp}) => {
        lowVolume.push(lowPriceVolume);
        highVolume.push(highPriceVolume);
        timeStamps.push(new Date(timestamp * 1000).toLocaleDateString())
    })

    const chartOptions = {
        chart: {
            foreColor: '#fff',
            toolbar: {
                show: true,
                tools: {
                    download: false,
                    selection: true,
                    zoom: true,
                    pan: false,
                    reset: true,
                }
            }
        },
        animations: {
            enabled: false,
        },
        markers: {
            size: 0,
        },
        stroke: {
            show: true,
            width: 2,   
        },
        xaxis: {
            categories: timeStamps,
            position: 'bottom',
            tickAmount: 30,
            tickPlacement: 'on',
            labels: {
                hideOverlappingLabels: true
            }
        },
        tooltip: {
            theme: "dark",
        },
        dataLabels: {
            enabled: false,
        },
        title: {
            text: item.name,
            align: "middle",
            style: {
                fontFamily: 'Poppins'
            }
        },
        responsive: [{
            breakpoint: 640,
            options: {
                xaxis: {
                    tickAmount: 5,
                },
            }
        },
        {
            breakpoint: 1024,
            options: {
                xaxis: {
                    tickAmount: 20,
                },
            }
        }]
    }

    const chartSeries = [
        {
            name: 'High Volume',
            data: highVolume
        },
        {
            name: 'Low Volume',
            data: lowVolume
        }
    ];

    return (
        <div className='container mx-auto my-5 p-5 rounded-sm bg-neutral'>
            <ReactApexChart
                options={chartOptions} 
                series={chartSeries}
                type="bar"
                height={350}
            />
        </div>
    )
}

export default VolumeChart