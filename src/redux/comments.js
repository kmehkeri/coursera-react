import { baseUrl } from '../shared/env';

// Action type constants
const ADD_COMMENT = "ADD_COMMENT";
const ADD_COMMENTS = "ADD_COMMENTS";
const COMMENTS_LOADING = "COMMENTS_LOADING";
const COMMENTS_FAILED = "COMMENTS_FAILED";

// Action creators
export const AddComment = (dishId, rating, author, comment) => {
    return {
        type: ADD_COMMENT,
        comment: { dishId, rating, author, comment }
    }
}

export const CommentsLoading = () => {
    return {
        type: COMMENTS_LOADING
    }
}

export const AddComments = (comments) => {
    return {
        type: ADD_COMMENTS,
        comments: comments
    }
}

export const CommentsFailed = (errorMessage) => {
    return {
        type: COMMENTS_FAILED,
        errorMessage: errorMessage
    }
}

// Handlers
export const fetchComments = () => (dispatch) => {
    dispatch(CommentsLoading(true));
    return fetch(baseUrl + '/comments')
        .then(response => response.json())
        .then(comments => dispatch(AddComments(comments)));
}

// Reducer
const initialState = {
    isLoading: true,
    errorMessage: null,
    comments: []
};

export const comments = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENTS:
            return { ...state, isLoading: false, comments: action.comments };

        case COMMENTS_LOADING:
            return { ...state, isLoading: true, errorMessage: null, comments: [] }

        case COMMENTS_FAILED:
            return { ...state, isLoading: false, errorMessage: action.errorMessage };

        case ADD_COMMENT:
            const id = Math.max(...state.comments.map((comment) => comment.id)) + 1;
            const date = new Date().toISOString();
            return {...state, comments: state.comments.concat(Object.assign({}, action.comment, { id, date })) };
        
        default:
            return state;
    }
}