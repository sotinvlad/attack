import React from 'react';
import './Solutions.css';

const Solutions = (props) => {
    return (
        <div className = 'Solutions'>
            <div className = 'Solutions__header'>
                Предполагаемые решения
            </div>
            {props.addresses.map((m,n) => <div className = 'Solutions__break' key = {n}> Заблокировать ip-адрес {m} </div>)}
            <div className = 'Solutions__freeze'>
                Включить межсетевой экран
            </div>
            <div className = 'Solutions__freeze'>
                Сменить маршрут передачи данных
            </div>
            <div className = 'Solutions__freeze'>
                Провести сканирование устройства
            </div>

            
        </div>
    )
}

export default Solutions
