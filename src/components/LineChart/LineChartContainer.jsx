import { connect } from "react-redux"
import { dataTick, updateData, updateSecondData } from "../redux/mainPageReducer"
import LineChart from "./LineChart"


const LineChartContainer = (props) => {
    return(
        <div>
            <LineChart {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.mainPage.currentData, 
    startIndex: state.mainPage.startIndex
})

export default connect(mapStateToProps, { updateData, updateSecondData, dataTick })(LineChartContainer);