import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LineChartContainer from './components/LineChart/LineChartContainer';
import SecondChartContainer from './components/SecondChart/SecondChartContainer';
import Solutions from './components/Solutions/Solutions';
import Threats from './components/Threats/Threats';

const App = (props) => {
  useEffect(() => {
    props.appInit();
  })
  return(
    <div className = 'App'>
        <Header />
        <LineChartContainer />
        <SecondChartContainer />
        <Threats />
        <Solutions />
        <Footer />
    </div>
  )
}

export default App;
