import { combineReducers } from 'redux';
import { eventsReducer as events } from './events';
import { uiReducer as ui } from './ui';

const rootReducer = combineReducers({
    events,
    ui
});

export default rootReducer;
