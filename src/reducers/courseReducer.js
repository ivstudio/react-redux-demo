import * as types from '../constants/constants';
export default function courseReducer(state = [], action){

  switch (action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}

/* NOTE:
 ...state - spread operator returns a new instance of 'state array'.
 then Object.assign creates a deep copy of object action.course passed in with new course via the action.
 spread operator and Object.assign return a new copy with new course.
 */