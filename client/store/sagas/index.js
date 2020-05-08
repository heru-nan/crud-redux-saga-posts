import {takeEvery, put, all, call, takeLatest, select} from 'redux-saga/effects'
import axios from 'axios';
import * as types from '../types';

const url = `//localhost:3001`;

function * fetchPosts(){
    const res = yield call(axios.get, `${url}/posts`);
    if(!res.data){
        yield put({type: types.REQUEST_POSTS_FAILED});
    }
    yield put({type: types.REQUEST_POSTS_SUCCESS, data: res.data});
}

function *listen(){
    yield takeEvery(types.REQUEST_POSTS, fetchPosts);    
}

function *createPost(action){
    const {title, description} = action;
    if(!title || !description){
        return yield put({type: types.CREATE_POSTS_FAILED, error: "title or description invalid"});
    }
    try {
        const res = yield call(axios.post, `${url}/posts`, {title, description});
        const {id} = res.data;
        const post = {
            title,
            description,
            id
        }
        
        yield put({type: types.CREATE_POSTS_SUCCESS, post});

    } catch (error) {
        console.log(error);
        return yield put({type: types.CREATE_POSTS_FAILED, error});
    }

}

function *deletePost(action){
    try {
        const id = Number(action.id);
        const res = yield call(axios.delete, `${url}/posts/${id}`);
        console.log(res);
        yield put({type: types.DELETE_POSTS_SUCCESS, id});
    } catch (error) {
        yield put({type: types.DELETE_POSTS_FAILED, error});
    }
}

function * updatePost(action){
    const {utils} = yield select();
    try {
        const id = utils.values[0];
        const value = utils.values[1];
        const obj = {};
        obj[action.id] = value;
        
        const res = yield call(axios.patch, `${url}/posts/${id}`,obj)
        yield put({type: types.UPDATE_POSTS_SUCCESS, post: res.data})

    } catch (error) {
        yield put({type: types.UPDATE_POSTS_FAILED, error});
    }
}

function *watchPosts(){
    yield takeLatest(types.CREATE_POSTS, createPost);
    yield takeLatest(types.DELETE_POSTS, deletePost);
    yield takeLatest(types.UPDATE_POSTS, updatePost);
}

export default function* rootSaga(){
    yield all([
        listen(),
        watchPosts(),
    ])
}