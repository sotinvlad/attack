import { connect } from "react-redux"
import { secondDataTick, updateSecondData } from "../redux/mainPageReducer"
import SecondChart from "./SecondChart"


const SecondChartContainer = (props) => {
    debugger
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

export default connect(mapStateToProps, { updateSecondData, secondDataTick })(SecondChartContainer);