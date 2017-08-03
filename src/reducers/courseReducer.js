import * as types from '../constants/constants';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){

  switch (action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}

/* NOTE:
 ...state - spread operator returns a new instance of 'state array'.
 then Object.assign creates a deep copy of object action.course passed in with new course via the action.
 spread operator and Object.assign return a new copy with new course.
 */
