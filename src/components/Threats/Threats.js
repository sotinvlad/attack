import React from 'react';
import './Threats.css'

const Threats = (props) => {

    debugger
    return (
        <div className = "Threats">
            <div className = "Threats__header">
                Терминал
            </div>
            {props.console.map((m,n) => <div className = "Threats__message" key = {n}> &gt; {m} </div>)}
        </div>
    )
}

export default Threats;
