import React from 'react';
import './Solutions.css';

const Solutions = (props) => {
    return (
        <div className = 'Solutions'>
            <div className = 'Solutions__header'>
                Меры по защите сети передачи данных
            </div>
            {props.addresses.map((m,n) => <div className = 'Solutions__break' key = {n}> Заблокировать ip-адрес {m} </div>)}
            <div className = 'Solutions__freeze' onClick = {() => {props.useSolution(1)}}>
                Включить межсетевой экран
            </div>
            <div className = 'Solutions__freeze' onClick = {() => {props.useSolution(2)}}>
                Сменить маршрут передачи данных
            </div>
            <div className = 'Solutions__freeze' onClick = {() => {props.useSolution(3)}}>
                Провести сканирование устройства
            </div>

            
        </div>
    )
}

export default Solutions
