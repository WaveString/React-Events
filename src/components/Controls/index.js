import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './index.css';

export default class Controls extends Component {
    static propTypes = {
        onAddEvent: PropTypes.func,
        onMarkAllRead: PropTypes.func,
        onDeleteAllEvents: PropTypes.func,
        onTogglePopup: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            eventName: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleClickSendButton = this.handleClickSendButton.bind(this);
    }

    handleInput(e) {
        this.setState({ eventName: e.target.value });
    }

    handleClickSendButton() {
        const { onAddEvent } = this.props;
        const eventName = this.state.eventName;

        if (eventName) {
            onAddEvent(eventName);
            this.setState({ eventName: '' });
        }
    }

    render() {
        const { onMarkAllRead, onDeleteAllEvents, onTogglePopup } = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <div className={styles.coloumn}>
                        <TextField
                            hintText='Введите название события'
                            fullWidth={true}
                            value={this.state.eventName}
                            onChange={this.handleInput}
                        />
                    </div>
                    <RaisedButton
                        className={styles.sendButton}
                        label='Отправить' primary={true}
                        onClick={this.handleClickSendButton}
                    />
                </div>

                <div className={styles.coloumn}>
                    <div className={styles.row}>
                        <RaisedButton
                            label='Пометить все события прочитанными'
                            primary={true}
                            fullWidth={true}
                            onClick={onMarkAllRead}
                        />
                    </div>
                    <div className={styles.row}>
                        <RaisedButton
                            label='Удалить все события'
                            primary={true}
                            fullWidth={true}
                            onClick={onDeleteAllEvents}
                        />
                    </div>
                    <div className={styles.row}>
                        <RaisedButton
                            label='Скрыть / показать попап нотификаций'
                            primary={true}
                            fullWidth={true}
                            onClick={onTogglePopup}/>
                    </div>
                </div>
            </div>
        );
    }
}
