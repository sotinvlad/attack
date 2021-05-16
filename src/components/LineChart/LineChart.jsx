import { Line } from 'react-chartjs-2';
import './LineChart.css';

const LineChart = (props) => {
    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / props.data.length;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        }
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
                        animation,
                        interaction: {
                            intersect: false
                        },
                        plugins: {
                            legend: false
                        },
                        scales: {
                            x: {
                                type: 'linear'
                            }
                        }
                    }}
                />
            </div>
            <button onClick = {() => {
                let data = [];
                let prev = 100;
                for (let i = 0; i < 10000; i++) {
                  prev += 5 - Math.random() * 10;
                  if (prev < 0) prev = 0;
                  data.push({x: i, y: prev});
                }
                props.updateData(data);
                }}>Update Data</button>
        </div>
    )
}



export default LineChart;