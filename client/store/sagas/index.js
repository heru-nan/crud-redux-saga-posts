import {takeEvery, put, all, call, take} from 'redux-saga/effects'
import axios from 'axios';
import * as types from '../types';

const url = `//localhost:3001`;

function * fetchPosts(){
    yield console.log("FETCH POSTS : ", url);
    const res = yield (axios.get(`${url}/posts`));
    console.log(res);
    if(!res.data){
        yield put({type: types.REQUEST_POSTS_ERROR});
    }
    yield console.log(res.data);
    yield put({type: types.REQUEST_POSTS_SUCCESS, data: res.data});

}

function *listen(){
    yield takeEvery(types.REQUEST_POSTS, fetchPosts);
}

export default function* rootSaga(){
    yield all([
        listen()
    ])
}