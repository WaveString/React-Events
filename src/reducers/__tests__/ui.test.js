import { uiReducer } from '../ui';
import { uiInitialState } from '../initialState';
import { togglePopup } from '../../actions'

describe('events reducer', () => {
    it('should return the initial state', () => {
        expect(uiReducer(undefined, {})).toEqual(uiInitialState)
    });

    it('should handle TOGGLE_POPUP', () => {
        const testAction = togglePopup();

        expect(uiReducer({
            popup: {
                isOpen: false
            }
        }, testAction)).toEqual({
            popup: {
                isOpen: true
            }
        });

        expect(uiReducer({
            popup: {
                isOpen: true
            }
        }, testAction)).toEqual({
            popup: {
                isOpen: false
            }
        });
    });
});
