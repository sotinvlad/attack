import React from 'react';
import { connect } from 'react-redux';
import Threats from './Threats';

const ThreatsContainer = (props) => {
    debugger
    return (
        <Threats {...props} />
    )
}

const mapStateToProps = (state) => {
    return({
        console: state.mainPage.console
    })
}

export default connect(mapStateToProps, { })(ThreatsContainer);
