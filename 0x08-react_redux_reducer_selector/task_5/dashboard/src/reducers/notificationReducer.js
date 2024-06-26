// notificationReducer.js
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { fromJS, Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map();

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge(normalizedData.entities.notifications);
    case MARK_AS_READ:
      return state.setIn(
        [action.index],
        state.getIn([action.index]).set('isRead', true)
      );
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}

export default notificationReducer;
