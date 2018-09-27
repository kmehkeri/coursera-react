import { COMMENTS } from '../shared/comments';

const ADD_COMMENT = "ADD_COMMENT";

export const AddComment = (dishId, rating, author, comment) => {
    return {
        type: ADD_COMMENT,
        comment: { dishId, rating, author, comment }
    }
}

export const comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const id = Math.max(...state.map((comment) => comment.id)) + 1;
            const date = new Date().toISOString();
            return [ ...state, Object.assign({}, action.comment, { id, date }) ];
        
        default:
            return state;
    }
}