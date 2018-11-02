import { baseUrl } from '../shared/env';
import { handleResponse, handleError } from '../shared/fetch';

// Action type constants
export const LEADERS_LOADING = 'LEADERS_LOADING';
export const LEADERS_FAILED = 'LEADERS_FAILED';
export const ADD_LEADERS = 'ADD_LEADERS';

// Action creators
export const LeadersLoading = () => {
    return {
        type: LEADERS_LOADING
    }
}

export const LeadersFailed = (errorMessage) => {
    return {
        type: LEADERS_FAILED,
        errorMessage: errorMessage
    }
}

export const AddLeaders = (leaders) => {
    return {
        type: ADD_LEADERS,
        leaders: leaders
    }
}

// Thunk actions
export const fetchLeaders = () => (dispatch) => {
    dispatch(LeadersLoading(true));
    return fetch(baseUrl + '/leaders')
        .then(handleResponse, handleError)
        .then(response => response.json())
        .then(leaders => dispatch(AddLeaders(leaders)))
        .catch(error => dispatch(LeadersFailed(error.message)));
}

// Reducer
const initialState = {
    isLoading: true,
    errorMessage: null,
    leaders: []
};

export const leaders = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LEADERS:
            return { ...state, isLoading: false, leaders: action.leaders };

        case LEADERS_LOADING:
            return { ...state, isLoading: true, errorMessage: null, leaders: [] }

        case LEADERS_FAILED:
            return { ...state, isLoading: false, errorMessage: action.errorMessage };

        default:
            return state;
    }
}