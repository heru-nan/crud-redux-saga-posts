
import * as types from '../types';

export const createPosts =  (title, description) => ({
    type: types.CREATE_POSTS,
    title, description,
})