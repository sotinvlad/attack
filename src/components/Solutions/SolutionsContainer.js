import React from 'react';
import { connect } from 'react-redux';
import { useSolution } from '../redux/mainPageReducer'
import Solutions from './Solutions';

const SolutionsContainer = (props) => {
    return (
        <Solutions {...props} />
    )
}

const mapStateToProps = (state) => ({
    addresses: state.mainPage.addresses
})

export default connect(mapStateToProps, { useSolution })(SolutionsContainer);
