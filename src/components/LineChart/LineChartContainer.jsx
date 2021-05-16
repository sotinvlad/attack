import { connect } from "react-redux"
import { updateData } from "../redux/mainPageReducer"
import LineChart from "./LineChart"


const LineChartContainer = (props) => {
    return(
        <div>
            <LineChart {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.mainPage.data
})

export default connect(mapStateToProps, { updateData })(LineChartContainer);