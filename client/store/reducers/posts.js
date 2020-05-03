import * as types from '../types';

const handleSubmit = (values, n) => {
    for(let i = 0; i < n; i++){
        if(!values[i]){
            return false;
        }
    }
    return true;
}

export const posts = (state = [], action) => {
    switch (action.type) {
        case types.SET_STATE:
            return [...state, {posts: action.posts}];
        case types.HANDLE_SUBMIT:
            if(handleSubmit(action.values, action.n)){
                return [...state, {title: action.values[0], content: action.values[1], id: "p"+action.values[0]}]
              }
            return state;
        case types.DELETE:
            return state.filter(post => post.id !== action.id);
        default:
            return state;
    }
}