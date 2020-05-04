import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers';
import rootHelloSagas from './sagas/hello';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(state){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducers, state, composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootHelloSagas);

    return store;
}

