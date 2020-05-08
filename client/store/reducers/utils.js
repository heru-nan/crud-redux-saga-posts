import * as types from '../types';

const _utils = {
    id: "utils",
    visibility: {"form": false, "title": false, "description": false},
    values: [],
    error : "",
}


export const utils = (utils = _utils, action) => {
    switch (action.type) {
        case types.SWITCH_VISIBILITY:
            const _obj = Object.assign({}, utils.visibility);
            _obj[action.value] = !_obj[action.value];
            return {...utils, visibility: _obj}
        case types.MESSAGES:
            console.log(action.messages);
            return utils;
        case types.HANDLE_POST_CHANGE:
            console.log()
            return {...utils, values: [action.id, action.value]}
        default:
            return utils;
    }
}