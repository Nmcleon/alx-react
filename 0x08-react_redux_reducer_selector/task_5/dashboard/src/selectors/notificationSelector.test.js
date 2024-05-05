import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';
import { fromJS } from 'immutable';

describe('Notification Selectors', () => {
  const initialState = fromJS({
    filter: 'DEFAULT',
    notifications: [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ],
  });

  it('return the correct filter type', () => {
    expect(filterTypeSelected(initialState)).toBe('DEFAULT');
  });

  it('return the list of notifications', () => {
    const notifications = getNotifications(initialState).toJS();
    expect(notifications.length).toBe(3);
    expect(notifications[0].value).toBe('New course available');
  });

  it('return the list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(initialState).toJS();
    expect(unreadNotifications.length).toBe(2);
    expect(unreadNotifications[0].value).toBe('New course available');
  });
});
