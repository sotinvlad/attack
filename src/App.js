import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LineChartContainer from './components/LineChart/LineChartContainer';
import ManageButtonsContainer from './components/ManageButtons/ManageButtonsContainer';
import SecondChartContainer from './components/SecondChart/SecondChartContainer';
import SolutionsContainer from './components/Solutions/SolutionsContainer';
import ThreatsContainer from './components/Threats/ThreatsContainer';

const App = (props) => {
  useEffect(() => {
    props.appInit();
  })
  return(
    <>
    <div className = 'App'>
        
        <Header />
        <LineChartContainer />
        <SecondChartContainer />
        <ThreatsContainer />
        <SolutionsContainer />
        <Footer /> 
    </div>
    <Route path = "/attack/manage" render={() => <ManageButtonsContainer />} />
    </>
  )
}

export default App;
