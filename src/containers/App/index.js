import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Controls from '../../components/Controls';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getUnreadEvents } from '../../reducers/events'
import {
    addEvent,
    markAllRead,
    deleteAllEvents
} from '../../actions';

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            events,
            unreadEvents,
            onAddEvent,
            onMarkAllRead,
            onDeleteAllEvents
        } = this.props;

        return (
                <MuiThemeProvider>
                    <div style={{width: '900px'}}>
                        <Header {...{ events, unreadEvents }}/>
                        <Controls {...{ onAddEvent, onMarkAllRead, onDeleteAllEvents }}/>
                    </div>
                </MuiThemeProvider>
        );
    }
}

const select = (state) => {
    return {
        events: state.events,
        unreadEvents: getUnreadEvents(state)
    };
};

const mapDispatchToProps = (dispatch) => ({
    onAddEvent: (event) => dispatch(addEvent(event)),
    onMarkAllRead: () => dispatch(markAllRead()),
    onDeleteAllEvents: () => dispatch(deleteAllEvents()),
});

export default connect(select, mapDispatchToProps)(App);
