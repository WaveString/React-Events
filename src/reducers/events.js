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
                    id: state.length ? Math.max.apply(null, (state.map(item => item.id))) + 1 : 1,
                    title: action.eventName,
                    unread: true,
                    datetime: action.datetime
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

export function getSortEvents(state) {
    return state.events.sort((a, b) => a.datetime < b.datetime);
}
