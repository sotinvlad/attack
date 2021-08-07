import './ManageButtons.css';

const ManageButtons = (props) => {
    return(
        <div className="ManageButtons">
            <div className="ManageButtons__button" onClick={() => props.useAttack('Обнаружена DDOS атака')}>
                DDOS атака
            </div>
            <div className="ManageButtons__button" onClick={() => props.useAttack('Обнаружено сканирование сети')}>
                Сканирование сети
            </div>
        </div>
    )
}



export default ManageButtons;