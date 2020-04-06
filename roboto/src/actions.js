import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => ({
    //constant, we will use a variable so the program indicates an error if is misspelled
    //we imported the constant from constants js instead of using a string on type. 
    //The utility of this is easier use of the variables and prevent typo errors
    type: CHANGE_SEARCH_FIELD, 
    payload: text
})

export const requestRobots = () =>  (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch("https://jsonplaceholder.typicode.com/users") //gets the a tobot file online to get the atributes of robots which will be loaded by the cardlist
        .then(response => response.json()) 
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error }))
}

