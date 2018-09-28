import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { dishes } from './dishes';
import { comments } from './comments';
import { promotions } from './promotions';
import { leaders } from './leaders';
import { initialFeedback } from './forms';

export const ConfigureStore = () => {
    const reducer = combineReducers({
        dishes,
        comments,
        promotions,
        leaders,
        ...createForms({ feedback: initialFeedback })
    });
    const middleware = applyMiddleware(thunk, logger);
    return createStore(reducer, middleware);
}
