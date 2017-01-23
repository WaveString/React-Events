import React, { Component } from 'react';
import SocialNotifications from 'material-ui/svg-icons/social/notifications-none';
import Counter from '../Counter';

import styles from './index.css';

const iconStyles = {
    width: '50px',
    height: '42px',
    transform: 'rotate(45deg)'
};

export default class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.handleClickOnIcon = this.handleClickOnIcon.bind(this);
    }

    handleClickOnIcon() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { unreadEvents } = this.props;

        return (
            <div className={styles.wrapper} onClick={this.handleClickOnIcon}>
                <SocialNotifications style={iconStyles}/>
                <div className={styles.counter}>
                    <Counter count={unreadEvents.length}/>
                </div>
            </div>
        );
    }
}
