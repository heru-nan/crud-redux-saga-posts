import * as types from '../types';

const _posts = [];

export const posts = (posts = _posts, action) => {
    switch (action.type) {
        case types.REQUEST_POSTS_FAILED:
            return posts;
        case types.REQUEST_POSTS_SUCCESS:
            return [...posts, ...action.data]
        case types.CREATE_POSTS_SUCCESS:
            return [...posts, action.post]
        case types.CREATE_POSTS_FAILED:
            return posts;
        case types.DELETE_POSTS_SUCCESS:
            return posts.filter(post => post.id !== action.id);
        case types.DELETE_POSTS_FAILED:
            return posts;
        case types.UPDATE_POSTS_SUCCESS:
            return posts.map(post => post.id === action.post.id ? action.post: post)
        case types.UPDATE_POSTS_FAILED:
            return posts;
        default:
            return posts;
    }
}