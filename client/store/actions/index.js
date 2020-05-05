import * as types from '../types';

export const switchVisibility  = () => {
    return {
        type: types.SWITCH_VISIBILITY,
    }
}

export const handleSubmit = (values, n = 2) => {
    return {
        type: types.HANDLE_SUBMIT,
        values,
        n
    }
}

export const deletePost = (id) => {
    return {
        type: types.DELETE,
        id
    }
}

