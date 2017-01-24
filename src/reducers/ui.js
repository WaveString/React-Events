import { TOGGLE_POPUP } from '../actions';
import { uiInitialState } from './initialState';

export function uiReducer(state = uiInitialState, action) {
    switch (action.type) {
        case TOGGLE_POPUP:
            return {
                ...state,
                popup: {
                    ...state.popup,
                    isOpen: !state.popup.isOpen
                }
            };
        default:
            return state;
    }
}

// Selectors
export function getUnreadEvents(state) {
    return state.events.filter(event => event.unread);
}
