import {combineReducers} from 'redux'
import {posts} from './posts';
import {utils} from './utils';


const rootReducers = combineReducers({
    posts, utils
})

export default rootReducers;