import * as types from '../types';

const _posts = [];

export const posts = (posts = _posts, action) => {
    switch (action.type) {
        case types.REQUEST_POSTS_ERROR:
            return posts;
        case types.REQUEST_POSTS_SUCCESS:
            return [...posts, ...action.data]
        case types.CREATE_POSTS_SUCCESS:
            return [...posts, action.post]
        case types.CREATE_POSTS_ERROR:
            return posts;
        default:
            return posts;
    }
}