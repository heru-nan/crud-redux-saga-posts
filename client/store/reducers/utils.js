import * as types from '../types';

const _utils = {
    id: "utils",
    visibility: false,
    values: [],
    error : "",
}


export const utils = (state = _utils, action) => {
    switch (action.type) {
        case types.SWITCH_VISIBILITY:
            return {...state, visibility: !state.visibility }    
        case types.MESSAGES:
            console.log(action.messages);
            return state;
        default:
            return state;
    }
}