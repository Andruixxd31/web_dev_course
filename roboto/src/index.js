import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //one of the two functions of the API
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger } from 'redux-logger'; //type of middleware 
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import './index.css';
import App from './containers/App'; //The father of all the components. Index wiil get everythin from App.js
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers.js';

//will logged the output of the actions
const logger = createLogger(); 

//making a root to use in the store a be able to use the both reducer we made
const rootReducer = combineReducers({ searchRobots, requestRobots}); 
//with the store we can remove all state from the app and keep it in the store. 
// Store will be passed down as a prop
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)) //rootReducer combines all reducers. can be used if we needen


ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, 
                document.getElementById('root'));
registerServiceWorker();