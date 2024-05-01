import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

// Test cases for login action creator
test('login action creator', () => {
  const email = 'test@example.com';
  const password = 'password123';
  const expectedAction = {
    type: LOGIN,
    user: {
      email: email,
      password: password,
    },
  };
  expect(login(email, password)).toEqual(expectedAction);
});

// Test cases for logout action creator
test('logout action creator', () => {
  const expectedAction = {
    type: LOGOUT,
  };
  expect(logout()).toEqual(expectedAction);
});

// Test cases for displayNotificationDrawer action creator
test('displayNotificationDrawer action creator', () => {
  const expectedAction = {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
  expect(displayNotificationDrawer()).toEqual(expectedAction);
});

// Test cases for hideNotificationDrawer action creator
test('hideNotificationDrawer action creator', () => {
  const expectedAction = {
    type: HIDE_NOTIFICATION_DRAWER,
  };
  expect(hideNotificationDrawer()).toEqual(expectedAction);
});
