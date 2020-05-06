import {takeEvery, put, all, call, takeLatest} from 'redux-saga/effects'
import axios from 'axios';
import * as types from '../types';

const url = `//localhost:3001`;

function * fetchPosts(){
    const res = yield call(axios.get, `${url}/posts`);
    if(!res.data){
        yield put({type: types.REQUEST_POSTS_ERROR});
    }
    yield put({type: types.REQUEST_POSTS_SUCCESS, data: res.data});
}

function *listen(){
    yield takeEvery(types.REQUEST_POSTS, fetchPosts);    
}

function *createPost(action){
    const {title, content} = action;
    if(!title || !content){
        return yield put({type: types.CREATE_POSTS_ERROR, error: "title or content invalid"});
    }
    try {
        const res = yield call(axios.post, `${url}/posts`, {title, content});
        const {id} = res.data;
        const post = {
            title,
            content,
            id
        }
        
        yield put({type: types.CREATE_POSTS_SUCCESS, post});

    } catch (error) {
        console.log(error);
        return yield put({type: types.CREATE_POSTS_ERROR, error});
    }

}

function *watchPosts(){
    yield takeLatest(types.CREATE_POSTS, createPost);
}

export default function* rootSaga(){
    yield all([
        listen(),
        watchPosts(),
    ])
}