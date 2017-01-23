import {
    ADD_EVENT,
    MARK_ALL_READ,
    DELETE_ALL_EVENTS
} from '../actions';

import { eventsInitialState } from './initialState';

export function eventsReducer(state = eventsInitialState, action) {
    switch (action.type) {
        case ADD_EVENT:
            return [
                ...state,
                {
                    id: Math.max.apply(null, (state.map(item => item.id))) + 1,
                    title: action.eventName,
                    unread: true,
                    datetime: new Date()
                }
            ];
        case MARK_ALL_READ:
            return [
                ...state.map(item => ({ ...item, unread: false }))
            ];
        case DELETE_ALL_EVENTS:
            return [];
        default:
            return state;
    }
}

// Selectors
export function getUnreadEvents(state) {
    return state.events.filter(event => event.unread);
}
