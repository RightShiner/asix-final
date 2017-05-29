import React from 'react';
import NotificationSystem from 'react-notification-system';

import store from 'store';
import { notificationClear } from 'actions/NotificationActions';

export default class NotificationContainer extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.addNotification());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  addNotification() {
    const notificationReducer = store.getState().notificationReducer;
    if (notificationReducer.ready) {
      this.refs.notificationSystem.addNotification(notificationReducer.notification);
      store.dispatch(notificationClear());
    }
  }

  render() {
    return <NotificationSystem ref="notificationSystem" />;
  }
}
