
import * as types from '../types';

export const createPosts =  (title, content) => ({
    type: types.CREATE_POSTS,
    title, content,
})