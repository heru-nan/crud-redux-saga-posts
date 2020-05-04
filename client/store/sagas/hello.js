import {put, takeEvery, all} from 'redux-saga/effects';

const delay = (ms) => new Promise(res  => setTimeout(res, ms));

function* helloSaga(){
   yield console.log("HELLO SAGA");
}

function* incrementAsync(){
   yield delay(2000);
   yield put({type: `INCREMENT`});
}

function * watchIncrementAsync(){
   yield takeEvery(`INCREMENT_ASYNC`, incrementAsync);
}

export default function* rootSagas(){
   yield all([
      helloSaga(),watchIncrementAsync()
   ])
}