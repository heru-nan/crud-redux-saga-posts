import {
    createStore,
    compose,
} from 'redux';

import rootReducers from './reducers';

export default function configureStore(state){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducers, state, composeEnhancers())
}
