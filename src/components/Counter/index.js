import React, { Component, PropTypes } from 'react';
import styles from './index.css';

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count } = this.props;

        if (!count) {
            return null;
        }

        return (
            <div className={styles.counter}>
                { count }
            </div>
        );
    }
}

Counter.propTypes = {
    count: PropTypes.number.isRequired
};
