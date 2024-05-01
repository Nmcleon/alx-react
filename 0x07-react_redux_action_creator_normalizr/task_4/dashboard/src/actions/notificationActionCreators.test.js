import {
  markAsRead,
  setNotificationFilter,
} from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { NotificationTypeFilters } from './notificationActionTypes';

// Test cases for markAsRead action creator
test('markAsRead action creator', () => {
  const index = 1;
  const expectedAction = {
    type: MARK_AS_READ,
    index: index,
  };
  expect(markAsRead(index)).toEqual(expectedAction);
});

test('setNotificationFilter action creator', () => {
  const filter = NotificationTypeFilters.DEFAULT;
  const expectedAction = {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
  expect(setNotificationFilter(filter)).toEqual(expectedAction);
});
