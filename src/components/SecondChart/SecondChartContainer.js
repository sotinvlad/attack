import { connect } from "react-redux"
import { secondDataTick } from "../redux/mainPageReducer"
import SecondChart from "./SecondChart"


const SecondChartContainer = (props) => {
    return(
        <div>
            <SecondChart {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.mainPage.currentSecondData, 
    startIndex: state.mainPage.startSecondIndex
})

export default connect(mapStateToProps, { secondDataTick })(SecondChartContainer);