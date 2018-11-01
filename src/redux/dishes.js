import { baseUrl } from '../shared/env';
import { handleResponse, handleError } from '../shared/fetch';

// Action type constants
export const DISHES_LOADING = 'DISHES_LOADING';
export const DISHES_FAILED = 'DISHES_FAILED';
export const ADD_DISHES = 'ADD_DISHES';

// Action creators
export const DishesLoading = () => {
    return {
        type: DISHES_LOADING
    }
}

export const DishesFailed = (errorMessage) => {
    return {
        type: DISHES_FAILED,
        errorMessage: errorMessage
    }
}

export const AddDishes = (dishes) => {
    return {
        type: ADD_DISHES,
        dishes: dishes
    }
}

// Thunk actions
export const fetchDishes = () => (dispatch) => {
    dispatch(DishesLoading(true));
    return fetch(baseUrl + '/dishes')
        .then(handleResponse, handleError)
        .then(response => response.json())
        .then(dishes => dispatch(AddDishes(dishes)))
        .catch(error => dispatch(DishesFailed(error.message)));
}

// Reducer
const initialState = {
    isLoading: true,
    errorMessage: null,
    dishes: []
};

export const dishes = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISHES:
            return { ...state, isLoading: false, dishes: action.dishes };

        case DISHES_LOADING:
            return { ...state, isLoading: true, errorMessage: null, dishes: [] }

        case DISHES_FAILED:
            return { ...state, isLoading: false, errorMessage: action.errorMessage };

        default:
            return state;
    }
}