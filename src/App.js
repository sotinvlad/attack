import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LineChartContainer from './components/LineChart/LineChartContainer';
import NetworkChart from './components/NetworkChart/NetworkChart';
import SecondChartContainer from './components/SecondChart/SecondChartContainer';
import Threats from './components/Threats/Threats';

const App = (props) => {
  return(

    <div className = 'App'>
        <Header />
        <LineChartContainer data = {props.data}/>
        <SecondChartContainer data = {props.data} />
        <Threats />
        <Footer />
    </div>
  )
}

export default App;
