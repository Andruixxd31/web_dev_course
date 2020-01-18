import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'; //The father of all the components. Index wiil get everythin from App.js
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
