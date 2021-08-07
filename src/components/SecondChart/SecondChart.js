import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './SecondChart.css';

const SecondChart = (props) => {
    useEffect(() => {
        setInterval(() => props.secondDataTick(), 100);
    })
    const decimation = {
        enabled: false,
        algorithm: 'min-max',
      };
    return (
        <div className='SecondChart'>
            <h2 className='SecondChart__title'>
                Показатель Хёрста
            </h2>
            <div className='SecondChart__chart'>
                <Line
                    data={{
                        datasets: [{
                            label: 'Frequency',
                            data: props.data,
                            fill: false,
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
                                suggestedMax: 1,
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



export default SecondChart;