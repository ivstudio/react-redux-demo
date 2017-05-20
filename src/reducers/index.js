/*
 * ROOT REDUCER - combines all reducers - index.js is the name convention for RootReducer
*/

import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses, //using shorthand property name. courses: courses
  authors
});

export default rootReducer;