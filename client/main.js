import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './static/styles.css';

import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './store';

const store = configureStore();




render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
, document.getElementById('root'));

