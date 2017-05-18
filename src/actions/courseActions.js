
import * as types from '../constants/constants';
import courseApi from  '../api/mockCourseApi';

export function loadCoursesSuccess (courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
        throw(error);
    });
  };
}


/* NOTE:
  { type: 'CREATE_COURSE', course: course }
  On ES6 you don't need the object value if it matches the key.
 */