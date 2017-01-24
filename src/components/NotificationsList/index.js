import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import { formatDate } from '../../utils';

import styles from './index.css';

export default class NotificationsList extends Component {
    static propTypes = {
        events: PropTypes.array,
        onTogglePopup: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.handleClickOnLink = this.handleClickOnLink.bind(this);
    }

    handleClickOnLink(e) {
        e.preventDefault();
        e.stopPropagation();

        const { onTogglePopup } = this.props;
        onTogglePopup();
    }

    render() {
        const { events } = this.props;

        if (events.length === 0) {
            return null;
        }

        return (
            <div className={styles.wrapper}>
                <List>
                    { events.slice(0, 5).map((event, i) =>
                        <ListItem key={i} primaryText={event.title} secondaryText={formatDate(event.datetime)} />) }

                    { events.length > 5 ?
                        <a href="" className={styles.link} onClick={this.handleClickOnLink}>
                            посмотреть все...
                        </a> : null }
                </List>
            </div>
        );
    }
}
