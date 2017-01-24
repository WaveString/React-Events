import React, { PropTypes } from 'react';
import styles from './index.css';

const Popup = ({ children }) => (
    <div className={styles.popup}>
        { children }
    </div>
);

Popup.propTypes = {
    children: PropTypes.node
};

export default Popup;
