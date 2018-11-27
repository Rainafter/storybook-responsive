import { fromJS } from 'immutable';

import { SET_CURRENT_STEP, SET_NAME, SET_EMAIL } from './constants';
// The initial state of the App
export const initialState = fromJS({
  step: 1,
  step1: {
    headline1: 'SIGN UP FOR',
    headline2: 'THE TLC NEWSLETTER',
    title: 'join the list',
  },
  step2: {
    headline: 'ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.',
    title: 'join the list',
  },
  step3: {
    headline1: 'Thank You For Signing Up!',
    headline2: 'Look out for the latest news on your favorite shows.',
    title: 'congratulations!',
  },
  fullName: {
    firstName: '',
    lastName: '',
    errorMsg: '',
  },
  email: {
    value: '',
    errorMsg: '',
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return state.set('step', action.step);
    case SET_NAME:
      return state.setIn(['fullName', 'firstName'], action.name.firstName)
        .setIn(['fullName', 'lastName'], action.name.lastName);
    case SET_EMAIL:
      return state.setIn(['email', 'value'], action.email);
    default:
      return state;
  }
}

export default homeReducer;
