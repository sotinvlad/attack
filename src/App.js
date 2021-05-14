import './App.css';
import LineChart from './components/LineChart/LineChart';
import NetworkChart from './components/NetworkChart/NetworkChart';

const App = (props) => {
  return(
    <div className = 'App'>
      <div className = 'LeftGrapg'>
        <LineChart />
      </div>
      <div className = 'RightGrapg'>
        <NetworkChart />
      </div>
      
    </div>
  )
}

export default App;
