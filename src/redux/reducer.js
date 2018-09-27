import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';

export const initialState = {
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    comments: COMMENTS
};

export const AddComment = (comment) => {
    return {
        type: "ADD_COMMENT",
        comment: comment
    }
}

export const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            const id = Math.max(...state.comments.map((comment) => comment.id)) + 1;
            return Object.assign({}, state, {
                comments: [ ...state.comments, Object.assign({}, action.comment, { id: id }) ]
            });

        default: return state;
    }
}