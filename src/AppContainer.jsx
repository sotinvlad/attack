import { connect } from "react-redux"
import App from "./App"
import { appInit } from "./components/redux/mainPageReducer"


const AppContainer = (props) => {
    return(
        <div>
            <App {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps, { appInit })(AppContainer);