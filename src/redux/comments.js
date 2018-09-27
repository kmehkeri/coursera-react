import { COMMENTS } from '../shared/comments';

export const AddComment = (comment) => {
    return {
        type: "ADD_COMMENT",
        comment: comment
    }
}

export const comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            const id = Math.max(...state.comments.map((comment) => comment.id)) + 1;
            return Object.assign({}, state, {
                comments: [ ...state.comments, Object.assign({}, action.comment, { id: id }) ]
            });
        
        default:
            return state;
    }
}