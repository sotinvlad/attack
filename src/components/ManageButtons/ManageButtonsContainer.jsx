import { connect } from "react-redux"
import ManageButtons from "./ManageButtons";
import { useAttack } from '../redux/mainPageReducer'


const ManageButtonsContainer = (props) => {
    return(
        <div>
            <ManageButtons {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, { useAttack })(ManageButtonsContainer);