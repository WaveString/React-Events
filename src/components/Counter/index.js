import React, { PropTypes } from 'react';

import styles from './index.css';

const Counter = ({ count }) => {
    if (!count) {
        return null;
    }

    return (
        <div className={styles.counter}>
            { count }
        </div>
    );
};

Counter.propTypes = {
    count: PropTypes.number.isRequired
};

export default Counter;
