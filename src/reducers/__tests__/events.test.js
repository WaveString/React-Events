import { eventsReducer } from '../events';
import { eventsInitialState } from '../initialState';
import { addEvent, markAllRead, deleteAllEvents } from '../../actions'

describe('events reducer', () => {
    it('should return the initial state', () => {
        expect(eventsReducer(undefined, {})).toEqual(eventsInitialState)
    });

    it('should handle ADD_EVENT', () => {
        const testAction = addEvent('Test name');
        const testDate = new Date().setDate((new Date()).getDate() - 31);

        expect(eventsReducer([], testAction)).toEqual(
            [
                {
                    id: 1,
                    title: testAction.eventName,
                    unread: true,
                    datetime: testAction.datetime
                }
            ]
        );

        expect(eventsReducer(
                [
                    {
                        id: 11,
                        title: 'Test test test 11',
                        unread: false,
                        datetime: testDate
                    }
                ], testAction)
        ).toEqual(
            [
                {
                    id: 11,
                    title: 'Test test test 11',
                    unread: false,
                    datetime: testDate
                },
                {
                    id: 12,
                    title: testAction.eventName,
                    unread: true,
                    datetime: testAction.datetime
                }
            ]
        )
    });

    it('should handle MARK_ALL_READ', () => {
        const testAction = markAllRead();
        const testDate = new Date();

        expect(eventsReducer(
            [
                {
                    id: 1,
                    title: 'Test name 1',
                    unread: true,
                    datetime: testDate
                },
                {
                    id: 2,
                    title: 'Test name 2',
                    unread: true,
                    datetime: testDate
                }
            ], testAction)).toEqual(
            [
                {
                    id: 1,
                    title: 'Test name 1',
                    unread: false,
                    datetime: testDate
                },
                {
                    id: 2,
                    title: 'Test name 2',
                    unread: false,
                    datetime: testDate
                }
            ]
        );

        expect(eventsReducer(
            [
                {
                    id: 1,
                    title: 'Test name 1',
                    unread: false,
                    datetime: testDate
                },
                {
                    id: 2,
                    title: 'Test name 2',
                    unread: true,
                    datetime: testDate
                }
            ], testAction)).toEqual(
            [
                {
                    id: 1,
                    title: 'Test name 1',
                    unread: false,
                    datetime: testDate
                },
                {
                    id: 2,
                    title: 'Test name 2',
                    unread: false,
                    datetime: testDate
                }
            ]
        );
    });

    it('should handle DELETE_ALL_EVENTS', () => {
        const testAction = deleteAllEvents();
        const testDate = new Date();

        expect(eventsReducer(
            [
                {
                    id: 1,
                    title: 'Test name 1',
                    unread: true,
                    datetime: testDate
                },
                {
                    id: 2,
                    title: 'Test name 2',
                    unread: true,
                    datetime: testDate
                }
            ], testAction)).toEqual([]);

        expect(eventsReducer([], testAction)).toEqual([]);
    })
});
