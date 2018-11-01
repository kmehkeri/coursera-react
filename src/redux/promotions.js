import { baseUrl } from '../shared/env';

// Action type constants
const PROMOS_LOADING = "PROMOS_LOADING";
const PROMOS_FAILED = "PROMOS_FAILED";
const ADD_PROMOS = "ADD_PROMOS";

// Action creators
export const PromosLoading = () => {
    return {
        type: PROMOS_LOADING
    }
}

export const PromosFailed = (errorMessage) => {
    return {
        type: PROMOS_FAILED,
        errorMessage: errorMessage
    }
}

export const AddPromos = (promos) => {
    return {
        type: ADD_PROMOS,
        promos: promos
    }
}

// Handlers
export const fetchPromos = () => (dispatch) => {
    dispatch(PromosLoading(true))
    return fetch(baseUrl + '/promotions')
        .then(response => response.json())
        .then(promos => dispatch(AddPromos(promos)));
}

// Reducer
const initialState = {
    isLoading: true,
    errorMessage: null,
    promotions: []
};

export const promotions = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROMOS:
            return { ...state, isLoading: false, promotions: action.promos };

        case PROMOS_LOADING:
            return { ...state, isLoading: true, errorMessage: null, promos: [] }

        case PROMOS_FAILED:
            return { ...state, isLoading: false, errorMessage: action.errorMessage };
        
        default:
            return state;
    }
}