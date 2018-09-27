import { createStore, combineReducers } from 'redux';
import { dishes } from './dishes';
import { comments } from './comments';
import { promotions } from './promotions';
import { leaders } from './leaders';

export const ConfigureStore = () => {
    const reducer = combineReducers({ dishes, comments, promotions, leaders });
    return createStore(reducer);
}
