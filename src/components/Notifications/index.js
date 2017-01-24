import React, { Component, PropTypes } from 'react';
import SocialNotifications from 'material-ui/svg-icons/social/notifications-none';
import NotificationsList from '../NotificationsList';
import Counter from '../Counter';
import Popup from '../Popup';

import styles from './index.css';

const iconStyles = {
    width: '50px',
    height: '42px',
    transform: 'rotate(45deg)'
};

export default class Notifications extends Component {
    static propTypes = {
        popup: PropTypes.object,
        unreadEvents: PropTypes.array,
        events: PropTypes.array,
        onTogglePopup: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.handleClickOnIcon = this.handleClickOnIcon.bind(this);
    }

    handleClickOnIcon() {
        const { onTogglePopup } = this.props;
        onTogglePopup();
    }

    render() {
        const { popup, unreadEvents, events, onTogglePopup } = this.props;
        return (
            <div className={styles.wrapper} onClick={this.handleClickOnIcon}>
                <SocialNotifications style={iconStyles}/>
                <div className={styles.counter}>
                    <Counter count={unreadEvents.length}/>
                </div>
                <div onClick={e => e.stopPropagation()}>
                    { popup.isOpen &&
                        <Popup>
                            <NotificationsList events={events} onTogglePopup={onTogglePopup}/>
                        </Popup>
                    }
                </div>
            </div>
        );
    }
}
