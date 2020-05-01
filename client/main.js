import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './static/styles.css';

import state from './state.js';

render(<App state = {state} />, document.getElementById('root'));

