import {React, useContext} from 'react'
import ItemContext from '../context/ItemContext'
import ReactApexChart from 'react-apexcharts';

const PriceChart = () => {
    const {timeSeriesData, item, setTimeSeriesOption} = useContext(ItemContext);
    let lowPrices = [], highPrices = [], timeStamps = [];
    timeSeriesData.forEach(({avgHighPrice, avgLowPrice, timestamp}) => {
        lowPrices.push(avgLowPrice);
        highPrices.push(avgHighPrice);
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
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,      
        },
        xaxis: {
            categories: timeStamps,
            tickAmount: 30,
            labels: {
                hideOverlappingLabels: true
            }
        },
        fill: {
            type: 'solid'
        },
        tooltip: {
            theme: "dark",
        },
        title: {
            text: item.name,
            align: "middle",
            style: {
                fontFamily: 'Poppins'
            }
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 640,
            options: {
                xaxis: {
                    tickAmount: 10,
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
            name: 'High Price',
            data: highPrices
        },
        {
            name: 'Low Price',
            data: lowPrices
        }
    ];

    return (
        <div className='container mx-auto my-5 p-5 rounded-sm bg-neutral'>
            <div className='w-full flex justify-end mb-2'>
                <div className="form-control">
                    <select className="select w-full max-w-xs select-accent" onChange={(e) => setTimeSeriesOption(e.target.value)}>
                        <option value="24h">6 Month</option>
                        <option value="5m">Day</option>
                        <option value="1h">Week</option>
                        <option value="6h">Month</option>
                    </select>
                </div>
            </div>
            <ReactApexChart
                options={chartOptions} 
                series={chartSeries}
                type="line"
                height={350}
            />
        </div>
    )
}

export default PriceChart