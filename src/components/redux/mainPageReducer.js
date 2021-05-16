
const UPDATE_DATA = 'UPDATE_DATA';


let data = [];
let prev = 100;
for (let i = 0; i < 10000; i++) {
  prev += 5 - Math.random() * 10;
  if (prev < 0) prev = 0;
  data.push({x: i, y: prev});
}

let initState = {
        data: data,
}

const mainPageReducer = (state = initState, action) => {
    switch (action.type) {
        
        case UPDATE_DATA:
            {
                debugger
                return {
                    ...state,
                    data: action.data,
                };
            }
        default: 
            return state;
    }
}

export default mainPageReducer;

export const updateData = (data) => ({ type: UPDATE_DATA, data});

