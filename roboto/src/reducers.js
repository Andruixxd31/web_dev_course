//The reducer takes actions and outputs a state that will
//A reducer is basically a function
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';


const initialStateSearch = {
    searchField: '' //initial object
}

//reducer
//it takes a state of the application and the action
//if the action is reladted to seraching robots we will act upon the state
export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch(action.type) { //with action.type can tell which action are related to searching robots
        case CHANGE_SEARCH_FIELD:
            //returning the state with the input of the user
            return Object.assign({}, state, {searchField: action.payload});
        default: 
            return state;
    }
}

const initialStateRobots = { //state for the requestRobots. This will be returned depending on which case is true 
    isPending : false,
    robots: [],
    error: ''
}

//reducers that handles the requests of robots
export const requestRobots = (state = initialStateRobots, action={}) => {
    switch (action.type) { //listens to action.type. There are three posible cases
        case REQUEST_ROBOTS_PENDING: 
            return Object.assign({}, state, { isPending: true});
        case REQUEST_ROBOTS_SUCCESS: 
            return Object.assign({}, state, {robots: action.payload, isPending: false}); //we got the response from the promises
        case REQUEST_ROBOTS_FAILED: //case where it failes
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default: 
            return state;
    }
}