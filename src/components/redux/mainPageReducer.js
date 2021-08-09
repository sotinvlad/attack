import axios from "axios";

const UPDATE_DATA = 'UPDATE_DATA';
const CHART_TICK = 'CHART_TICK';
const SECOND_CHART_TICK = 'SECOND_CHART_TICK';
const UPDATE_IP = 'UPDATE_IP';

const dataToCurrent = (data, currentData, startIndex, finishIndex) => {
    let newCurrentData = [];
    if (data.length < finishIndex + 1) {
        return currentData;
    } else {
        newCurrentData = data.slice(startIndex, finishIndex + 1);
        return newCurrentData;
    }
}

let initState = {
    data: [],
    secondData: [],
    currentData: [],
    currentSecondData: [],
    startIndex: 0,
    startSecondIndex: 0,
    finishIndex: 0,
    finishSecondIndex: 0,
    console: [],
    addresses: [],
    ipInput: '',
}

const mainPageReducer = (state = initState, action) => {
    switch (action.type) {

        case UPDATE_DATA:
            {
                return {
                    ...state,
                    data: [...action.data.lengths],
                    secondData: [...action.data.hurst],
                    console: action.data.console,
                    addresses: action.data.addresses,
                };
            }

        case CHART_TICK:
            {
                return {
                    ...state,
                    currentData: dataToCurrent(state.data, state.currentData, state.startIndex, state.finishIndex),
                    finishIndex: dataToCurrent(state.data, state.currentData, state.startIndex, state.finishIndex) === state.currentData ?
                        state.finishIndex : state.finishIndex + 1,
                    startIndex: state.finishIndex - state.startIndex > 150 ? state.startIndex + 50 : state.startIndex
                }
            }
        case SECOND_CHART_TICK:
            {
                return {
                    ...state,
                    currentSecondData: dataToCurrent(state.secondData, state.currentSecondData, state.startSecondIndex, state.finishSecondIndex),
                    finishSecondIndex: dataToCurrent(state.secondData, state.currentSecondData, state.startSecondIndex, state.finishSecondIndex) === state.currentSecondData ?
                        state.finishSecondIndex : state.finishSecondIndex + 1,
                    startSecondIndex: state.finishSecondIndex - state.startSecondIndex > 150 ? state.startSecondIndex + 50 : state.startSecondIndex
                }
            }
        case UPDATE_IP:
            {
                return {
                    ...state,
                    ipInput: action.ipInput
                }
            }
        default:
            return state;
    }
}

const getBackendIP = () => {
    return localStorage.getItem('backend_ip');
}

export default mainPageReducer;

export const updateData = (data) => ({ type: UPDATE_DATA, data });
export const dataTick = () => ({ type: CHART_TICK });
export const secondDataTick = () => ({ type: SECOND_CHART_TICK });
export const updateIp = (ipInput) => ({ type: UPDATE_IP, ipInput });

export const appInit = () => dispatch => {
    if (localStorage.getItem('backend_ip') == null){
        localStorage.setItem('backend_ip','127.0.0.1');
    }
    setInterval(() =>
        axios.get(`http://${getBackendIP()}:5000/`)
        .then((response) => {
            debugger
            dispatch(updateData(response.data));
        }), 5000
    )
}

export const useSolution = (id) => dispatch => {
    let ip = localStorage.getItem('backend_ip');
    axios.get(`http://${getBackendIP()}:5000/solve/${id}`);
}

export const useAttack = (id) => dispatch => {
    axios.get(`http://${getBackendIP()}:5000/attack?name=${id}`);
}

export const inputBackEndIP = (val) => dispatch => {
    localStorage.setItem('backend_ip', val);
}

