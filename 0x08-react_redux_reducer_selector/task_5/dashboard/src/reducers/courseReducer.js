import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { fromJS, Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.merge(normalizedData.entities.courses);
    case SELECT_COURSE:
      return state.setIn(
        [action.index],
        state.getIn([action.index]).set('isSelected', true)
      );
    case UNSELECT_COURSE:
      return state.setIn(
        [action.index],
        state.getIn([action.index]).set('isSelected', false)
      );
    default:
      return state;
  }
}

export default courseReducer;
