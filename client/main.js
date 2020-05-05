import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './static/styles.css';
import './node_modules/bulma/css/bulma.min.css'
import state from './state.js';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './store';

const store = configureStore(state);




render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
, document.getElementById('root'));

