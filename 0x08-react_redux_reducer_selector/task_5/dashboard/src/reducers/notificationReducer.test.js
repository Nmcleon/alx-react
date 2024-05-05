import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      notifications: [],
      filter: 'DEFAULT',
    });
  });

  it('FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    expect(
      notificationReducer(
        {},
        { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications }
      )
    ).toEqual({
      notifications: notifications.map((notification) => ({
        ...notification,
        isRead: false,
      })),
      filter: 'DEFAULT',
    });
  });

  it('MARK_AS_READ', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    expect(
      notificationReducer({ notifications }, { type: MARK_AS_READ, index: 1 })
    ).toEqual({
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
      filter: 'DEFAULT',
    });
  });

  it('SET_TYPE_FILTER', () => {
    expect(
      notificationReducer({}, { type: SET_TYPE_FILTER, filter: 'URGENT' })
    ).toEqual({
      notifications: [],
      filter: 'URGENT',
    });
  });
});
