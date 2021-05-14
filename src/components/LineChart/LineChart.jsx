import { Line } from 'react-chartjs-2';
import './LineChart.css';

const LineChart = () => {
    return(
        <div className = 'LineChart'>
            <Line 
            data = {{
                labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                datasets: [{
                    label: 'Attack Frequency',
                    data: [65, 59, 80, 81, 56, 55, 40,58,70,46,56,87,55,67,32,12],
                    fill: true,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.0,
                  }],
            }}
            />
        </div>
    )
}

export default LineChart;