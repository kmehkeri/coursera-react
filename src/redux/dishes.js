import { DISHES } from '../shared/dishes';

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

export const fetchDishes = () => (dispatch) => {
    dispatch(DishesLoading(true));
    setTimeout(() => {
        dispatch(AddDishes(DISHES))
    }, 2000);
}

const initialState = {
    isLoading: true,
    errorMessage: null,
    dishes: []
};

export const dishes = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISHES:
            return { ...state, isLoading: false, dishes: DISHES };

        case DISHES_LOADING:
            return { ...state, isLoading: true, errorMessage: null, dishes: [] }

        case DISHES_FAILED:
            return { ...state, isLoading: false, errorMessage: action.errorMessage };

        default:
            return state;
    }
}