import expect from 'expect';
import * as courseActions from './courseActions';
import * as constants from './../constants/constants';


import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';


describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: constants.CREATE_COURSE_SUCCESS,
        course: course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);

    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Here's an example call to mock
    // nock('http://example.com')
    //  .get('/course')
    //  .reply(200, {body: {course: [{ id:1, firstName: 'Cory', lastName: 'House'}] }})

    const expectedActions = [
      {type: constants.BEGIN_AJAX_CALL},
      {type: constants.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({courses: []}, expectedActions);

    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(constants.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(constants.LOAD_COURSES_SUCCESS);
      done();
    });


  });
});
