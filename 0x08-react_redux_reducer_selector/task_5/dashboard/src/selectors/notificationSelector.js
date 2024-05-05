import { get } from 'immutable';

export const filterTypeSelected = (state) => {
  return get(state, 'filter');
};

export const getNotifications = (state) => {
  return get(state, 'notifications');
};

export const getUnreadNotifications = (state) => {
  return get(state, 'notifications').filter(
    (notification) => !notification.isRead
  );
};
