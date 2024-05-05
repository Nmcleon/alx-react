import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

// Action creators
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index: index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index: index,
});

// Bind action creators
export const boundCourseActionCreators = bindActionCreators(
  {
    selectCourse: selectCourse,
    unSelectCourse: unSelectCourse,
  },
  dispatch
);
