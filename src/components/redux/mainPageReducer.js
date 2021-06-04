
const UPDATE_DATA = 'UPDATE_DATA';
const CHART_TICK = 'CHART_TICK';


let data = [];
let prev = 100;
for (let i = 0; i < 10000; i++) {
  prev += 5 - Math.random() * 10;
  if (prev < 0) prev = 0;
  data.push({x: i, y: prev});
}

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
        currentData: [],
        startIndex: 0,
        finishIndex: 0,

}

const mainPageReducer = (state = initState, action) => {
    switch (action.type) {
        
        case UPDATE_DATA:
            {
                debugger
                return {
                    ...state,
                    data: [state.data, action.data],
                };
            }
        case CHART_TICK:
            { 
                debugger
                return {
                    ...state,
                    currentData: dataToCurrent(state.data, state.currentData, state.startIndex, state.finishIndex),
                    finishIndex: dataToCurrent(state.data, state.currentData, state.startIndex, state.finishIndex) === state.currentData
                    ? state.finishIndex : state.finishIndex + 1,
                    startIndex: state.finishIndex - state.startIndex > 150 ? state.startIndex + 50 : state.startIndex
                }
            }
        default: 
            return state;
    }
}

export default mainPageReducer;

export const updateData = (data) => ({ type: UPDATE_DATA, data});
export const dataTick = () => ({ type: CHART_TICK });

