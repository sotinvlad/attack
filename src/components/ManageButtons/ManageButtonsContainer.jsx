import { connect } from "react-redux"
import ManageButtons from "./ManageButtons";


const ManageButtonsContainer = (props) => {
    return(
        <div>
            <ManageButtons {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, {  })(ManageButtonsContainer);