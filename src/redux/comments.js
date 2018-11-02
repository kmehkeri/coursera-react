import { baseUrl } from '../shared/env';
import { handleResponse, handleError } from '../shared/fetch';

// Action type constants
const ADD_COMMENT = "ADD_COMMENT";
const ADD_COMMENTS = "ADD_COMMENTS";
const COMMENTS_LOADING = "COMMENTS_LOADING";
const COMMENTS_FAILED = "COMMENTS_FAILED";

// Action creators
export const AddComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment: comment
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

// Thunk actions
export const fetchComments = () => (dispatch) => {
    dispatch(CommentsLoading(true));
    return fetch(baseUrl + '/comments')
        .then(handleResponse, handleError)
        .then(response => response.json())
        .then(comments => dispatch(AddComments(comments)))
        .catch(error => {
            console.log("Post comments failed: " + error.message);
            alert("Your comment could not be posted");
        });
}

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = { dishId, rating, author, comment, date: new Date().toISOString() }
    return fetch(baseUrl + '/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin'
    })
        .then(handleResponse, handleError)
        .then(response => response.json())
        .then(comment => dispatch(AddComment(comment)))
        .catch(error => dispatch(CommentsFailed(error.message)));
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
            return {...state, comments: state.comments.concat(action.comment) };
        
        default:
            return state;
    }
}