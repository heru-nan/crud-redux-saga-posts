import * as types from '../types';

const _utils = {
    id: "utils",
    visibility: false,
    values: [],
    error : "",
}

const handleSubmit = (values, n) => {
    for(let i = 0; i < n; i++){
        if(!values[i]){
            return false;
        }
    }
    return true;
}

export const utils = (state = _utils, action) => {
    switch (action.type) {
        case types.SWITCH_VISIBILITY:
            return {...state, visibility: !state.visibility }    
        case types.HANDLE_SUBMIT:
            
            if(handleSubmit(action.values, action.n)){
                return {...state, error: "all good"}
            }
            return {...state, error: "handle submit"};
        default:
            return state;
    }
}