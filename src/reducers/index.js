import { combineReducers } from 'redux';
import { eventsReducer as events } from './events';

const rootReducer = combineReducers({
    events
});

export default rootReducer;
