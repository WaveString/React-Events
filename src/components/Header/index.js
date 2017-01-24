import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Notifications from '../Notifications';
import styles from './index.css';

const Header = ({ popup, events, unreadEvents, onTogglePopup }) => (
    <div className={styles.wrapper}>
        <AppBar
            iconElementRight={<Notifications {...{ popup, events, unreadEvents, onTogglePopup }}/>}
            showMenuIconButton={false}/>
    </div>
);

Header.propTypes = {
    popup: PropTypes.object,
    unreadEvents: PropTypes.array,
    events: PropTypes.array,
    onTogglePopup: PropTypes.func
};

export default Header;
