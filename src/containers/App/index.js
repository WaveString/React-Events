import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Controls from '../../components/Controls';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getUnreadEvents, getSortEvents } from '../../reducers/events';
import {
    addEvent,
    markAllRead,
    deleteAllEvents,
    togglePopup
} from '../../actions';

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            ui,
            events,
            unreadEvents,
            onAddEvent,
            onMarkAllRead,
            onDeleteAllEvents,
            onTogglePopup
        } = this.props;
        const { popup } = ui;

        return (
            <MuiThemeProvider>
                <div style={{ width: '900px' }}>
                    <Header {...{ popup, events, unreadEvents, onTogglePopup }}/>
                    <Controls {...{ onAddEvent, onMarkAllRead, onDeleteAllEvents, onTogglePopup }}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

const select = (state) => {
    return {
        ui: state.ui,
        events: getSortEvents(state),
        unreadEvents: getUnreadEvents(state)
    };
};

const mapDispatchToProps = (dispatch) => ({
    onAddEvent: (event) => dispatch(addEvent(event)),
    onMarkAllRead: () => dispatch(markAllRead()),
    onDeleteAllEvents: () => dispatch(deleteAllEvents()),
    onTogglePopup: () => dispatch(togglePopup())
});

export default connect(select, mapDispatchToProps)(App);
