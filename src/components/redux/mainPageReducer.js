import axios from "axios";

const UPDATE_DATA = 'UPDATE_DATA';
const CHART_TICK = 'CHART_TICK';
const SECOND_CHART_TICK = 'SECOND_CHART_TICK';


let data = [];
// let prev = 100;
// for (let i = 0; i < 10000; i++) {
//   prev += 50 - Math.random() * 100;
//   if (prev < 0) prev = 0;
//   data.push({x: i, y: prev});
// }
let data2 = [];
// let prev2 = 100;
// for (let i = 0; i < 10000; i++) {
//   prev2 += 5 - Math.random() * 10;
//   if (prev2 < 0) prev2 = 0;
//   data2.push({x: i, y: prev2});
// }


const dataToCurrent = (data, currentData, startIndex, finishIndex) => {
    let newCurrentData = [];
    if (data.length < finishIndex + 1){
        return currentData;
    } else {
        newCurrentData = data.slice(startIndex, finishIndex + 1);
        return newCurrentData;
    }
}

let initState = {
        data: data,
        secondData: data2,
        currentData: [],
        currentSecondData: [],
        startIndex: 0,
        startSecondIndex: 0,
        finishIndex: 0,
        finishSecondIndex: 0,
        console: ['ПРЕДУПРЕЖДЕНИЕ: 192.168.0.1 опасное соединение','ПРЕДУПРЕЖДЕНИЕ: 192.168.0.2 опасное соединение'],
        addresses: ['192.168.0.1','192.168.0.2']
}

const mainPageReducer = (state = initState, action) => {
    switch (action.type) {
        
        case UPDATE_DATA:
            {
                return {
                    ...state,
                    data: [state.data, ...action.data.lengths],
                    secondData: [state.secondData, ...action.data.hurst],
                    console: [state.console, ...action.data.console],
                    addresses: [state.addresses, ...action.data.addresses]
                };
            }

        case CHART_TICK:
            { 
                return {
                    ...state,
                    currentData: dataToCurrent(state.data, state.currentData, state.startIndex, state.finishIndex),
                    finishIndex: dataToCurrent(state.data, state.currentData, state.startIndex, state.finishIndex) === state.currentData
                    ? state.finishIndex : state.finishIndex + 1,
                    startIndex: state.finishIndex - state.startIndex > 150 ? state.startIndex + 50 : state.startIndex
                }
            }
        case SECOND_CHART_TICK:
            {
                return {
                    ...state,
                    currentSecondData: dataToCurrent(state.secondData, state.currentSecondData, state.startSecondIndex, state.finishSecondIndex),
                    finishSecondIndex: dataToCurrent(state.secondData, state.currentSecondData, state.startSecondIndex, state.finishSecondIndex) === state.currentSecondData
                    ? state.finishSecondIndex : state.finishSecondIndex + 1,
                    startSecondIndex: state.finishSecondIndex - state.startSecondIndex > 150 ? state.startSecondIndex + 50 : state.startSecondIndex
                }
            }
        default: 
            return state;
    }
}

export default mainPageReducer;

export const updateData = (data) => ({ type: UPDATE_DATA, data});
export const dataTick = () => ({ type: CHART_TICK });
export const secondDataTick = () => ({ type: SECOND_CHART_TICK });

export const appInit = () => dispatch =>{
    // setInterval(()=>
    //     axios.get('http://127.0.0.1:5000/')
    //     .then((response) =>{
    //     debugger
    //     dispatch(updateData(response.data));
    //     }), 5000
    // )
        
}
