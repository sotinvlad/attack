import { connect } from "react-redux"
import ManageButtons from "./ManageButtons";
import { onUpdateIp, updateIp, useAttack, setBackendIP } from '../redux/mainPageReducer'


const ManageButtonsContainer = (props) => {
    return(
        <div>
            <ManageButtons {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    ipInput: state.mainPage.ipInput
})

export default connect(mapStateToProps, { useAttack, onUpdateIp, setBackendIP })(ManageButtonsContainer);