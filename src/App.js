import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LineChartContainer from './components/LineChart/LineChartContainer';
import NetworkChart from './components/NetworkChart/NetworkChart';

const App = (props) => {
  return(
    <div className = 'App'>
        <Header />
        <LineChartContainer data = {props.data}/>
        <NetworkChart />
        <Footer />
    </div>
  )
}

export default App;
