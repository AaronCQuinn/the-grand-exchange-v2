import {createContext, useState, useEffect} from "react";
import axios from 'axios'
const ItemContext = createContext();

export const ItemProvider = ({children}) => {
    const [item, setItem] = useState('');
    const [latestWikiData, setlatestWikiData] = useState('');
    const [latestVolumeData, setlatestVolumeData] = useState('')
    const [timeSeriesOption, setTimeSeriesOption] = useState('24h')
    const [timeSeriesData, setTimeSeriesData] = useState('')
    const [fetching, setFetching] = useState(true);
    
    useEffect(() => {
        // On change of item state, I want the following data to be fetched.
        if (item !== '') { // Effect still fires when state is created, check to make sure it isn't empty.
            const fetchData = (id) => {
                const wikiResponse = axios.get(`https://prices.runescape.wiki/api/v1/osrs/latest?id=${id}`)
                const volumeResponse = axios.get(`https://aaron-quinn-the-grand-exchange.herokuapp.com/api/item/${id}`)

                axios.all([wikiResponse, volumeResponse])
                .then(
                    axios.spread((...allData) => {
                        // Grab relevant data to display.
                        setlatestWikiData(allData[0].data['data']);
                        setlatestVolumeData(allData[1].data);

                        // Create the needed dates from epoch timestamp and include in the object.
                        const highDate = new Date(allData[0].data['data'][item.id].highTime * 1000).toLocaleString();
                        const lowDate = new Date(allData[0].data['data'][item.id].lowTime * 1000).toLocaleString();
                        allData[0].data['data'][item.id].latestHigh = highDate;
                        allData[0].data['data'][item.id].latestLow = lowDate;

                        // Toggle the render.
                        setFetching(false);
                    })
                )
            }
        fetchData(item.id);
        }
    }, [item]);
    
    useEffect(() => {
        if (item !== '') {
            const fetchTimeSeries = (id) => {
                axios.get(`https://prices.runescape.wiki/api/v1/osrs/timeseries?timestep=${timeSeriesOption}&id=${id}`)
                .then(timeSeriesResponse => {
                    switch(timeSeriesOption) {
                        default:
                            setTimeSeriesData(timeSeriesResponse.data['data']);
                            break;
                        case '24h':
                            setTimeSeriesData([...timeSeriesResponse.data['data'].slice(118, 300)]);
                            break;
                    }
                })   
            }
            fetchTimeSeries(item.id);
        }
    }, [item, timeSeriesOption])


    return <ItemContext.Provider
        value={{setItem, 
                item, 
                latestWikiData,
                latestVolumeData,
                timeSeriesData,
                fetching,
                setFetching,
                setTimeSeriesOption,
            }}
    >{children}</ItemContext.Provider>
}

export default ItemContext;