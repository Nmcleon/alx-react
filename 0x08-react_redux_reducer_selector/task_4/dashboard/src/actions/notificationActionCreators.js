import { bindActionCreators } from 'redux';
import {
  markAsRead,
  setNotificationFilter,
} from './notificationActionCreators';

export const boundNotificationActionCreators = bindActionCreators(
  {
    markAsRead: markAsRead,
    setNotificationFilter: setNotificationFilter,
  },
  dispatch
);
