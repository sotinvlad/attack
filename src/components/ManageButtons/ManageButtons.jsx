import React from 'react';
import './ManageButtons.css';

const ManageButtons = (props) => {
    
    const onUpdateIp = (e) => {
        let text = e.target.value;
        props.onUpdateIp(text);
    }

    let textAreaRef = React.createRef();

    const onSubmit = () => {
        let text = props.ipInput;

        textAreaRef.current.value = '';
    }

    return(
        <div className='ManageButtons'>
            <div className='ManageButtons__button' onClick={() => props.useAttack('Обнаружена DDOS атака')}>
                DDOS атака
            </div>
            <div className='ManageButtons__button' onClick={() => props.useAttack('Обнаружено сканирование сети')}>
                Сканирование сети
            </div>
            <div className='ManageButtons__input'>
                <div>
                    <input type='text' onChange = {onUpdateIp} value = {props.ipInput} ref = {textAreaRef}/>
                </div>
                <div className='ManageButtons__button' onClick={() => onSubmit()}>
                    Обновить ip-адрес
                </div>
            </div>
        </div>
    )
}



export default ManageButtons;