import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Test cases for selectCourse action creator
test('selectCourse action creator', () => {
  const index = 1;
  const expectedAction = {
    type: SELECT_COURSE,
    index: index,
  };
  expect(selectCourse(index)).toEqual(expectedAction);
});

// Test cases for unSelectCourse action creator
test('unSelectCourse action creator', () => {
  const index = 1;
  const expectedAction = {
    type: UNSELECT_COURSE,
    index: index,
  };
  expect(unSelectCourse(index)).toEqual(expectedAction);
});
