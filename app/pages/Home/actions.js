
import {
  SUBMIT_FORM,
  SET_CURRENT_STEP,
  SET_EMAIL,
  SET_NAME,
} from './constants';

export const submitForm = payload => ({
  type: SUBMIT_FORM,
  payload,
});

export const setStep = step => ({
  type: SET_CURRENT_STEP,
  step,
});

export const setEmail = email => ({
  type: SET_EMAIL,
  email,
});

export const setName = name => ({
  type: SET_NAME,
  name,
});
