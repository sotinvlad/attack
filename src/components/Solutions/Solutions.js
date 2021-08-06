import React from 'react';
import './Solutions.css';

const Solutions = (props) => {
    return (
        <div className = 'Solutions'>
            <div className = 'Solutions__header'>
                Предполагаемые решения
            </div>
            {props.addresses.map((m,n) => <div className = 'Solutions__break' key = {n}> Разорвать соединение {m} </div>)}
            <div className = 'Solutions__freeze'>
                Включить дополнительный защитный экран
            </div>
            
        </div>
    )
}

export default Solutions
