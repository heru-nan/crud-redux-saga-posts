import * as types from '../types';

export const switchVisibility  = (value="form") => {
    return {
        type: types.SWITCH_VISIBILITY,
        value
    }
}
