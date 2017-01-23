export const ADD_EVENT = 'ADD_EVENT';
export const MARK_ALL_READ = 'MARK_ALL_READ';
export const DELETE_ALL_EVENTS = 'DELETE_ALL_EVENTS';

export const addEvent = (eventName) => ({ type: ADD_EVENT, eventName });
export const markAllRead = () => ({ type: MARK_ALL_READ });
export const deleteAllEvents = () => ({ type: DELETE_ALL_EVENTS });
