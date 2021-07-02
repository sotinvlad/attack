import axios from "axios"
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css';

const LineChart = (props) => {

    useEffect(() => {
        setInterval(() => props.dataTick(), 50);
    })
    // useEffect(() => {
    //     debugger
    //     axios.get('http://127.0.0.1:5000/')
    //     .then((response) =>{
    //     debugger
    //       props.updateData(response.data.lengths);
    //       props.updateSecondData(response.data.hurst);
    //     })
    //   })
    const decimation = {
        enabled: false,
        algorithm: 'min-max',
      };
    return (
        <div className='LineChart'>
            <h2 className='LineChart__title'>
                Line Chart
            </h2>
            <div className='LineChart__chart'>
                <Line
                    data={{
                        datasets: [{
                            label: 'Frequency',
                            data: props.data,
                            fill: true,
                            borderWidth: 1,
                            radius: 0,
                            borderColor: 'black',
                        }],
                    }}
                    options={{
                        animation: false,
                        parsing: false,
                        interaction: {
                            intersect: false
                        },
                        plugins: {
                            legend: false,
                            decimation: decimation,
                        },
                        scales: {
                            x: {
                                type: 'linear',
                                suggestedMax: props.startIndex + 200,
                                source: 'auto',
                                // Disabled rotation for performance
                                maxRotation: 0,
                                autoSkip: true,
                            },
                            y: {
                                type: 'linear',
                                suggestedMax: 600,
                                suggestedMin: 0,
                                source: 'auto',
                                // Disabled rotation for performance
                                maxRotation: 0,
                                autoSkip: true,
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}



export default LineChart;