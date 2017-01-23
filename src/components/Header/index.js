import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Notifications from '../Notifications';
import styles from './index.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { events, unreadEvents } = this.props;

        return (
            <div className={styles.wrapper}>
                <AppBar
                    iconElementRight={<Notifications {...{ events, unreadEvents }}/>}
                    showMenuIconButton={false}/>
            </div>
        );
    }
}
