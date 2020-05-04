import * as types from '../types';

const _utils = {
    id: "utils",
    visibility: false,
    values: [],
    error : "",
    counter: 0,
}

const handleSubmit = (values, n) => {
    for(let i = 0; i < n; i++){
        if(!values[i]){
            return false;
        }
    }
    return true;
}

export const utils = (utils = _utils, action) => {
    switch (action.type) {
        case types.SWITCH_VISIBILITY:
            return {...utils, visibility: !utils.visibility }    
        case types.HANDLE_SUBMIT:
            
            if(handleSubmit(action.values, action.n)){
                return {...utils, error: "all good"}
            }
            return {...utils, error: "handle submit"};
        case types.INCREMENT:
            return {...utils, counter: utils.counter + 1}
        default:
            return utils;
    }
}