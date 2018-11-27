import { createSelector } from 'reselect';

export const selectHome = state => state.get('home');

export const makeSelectStep = () => createSelector(selectHome, substate => substate.get('step'));

export const makeSelectStep1 = () => createSelector(selectHome, substate => substate.get('step1').toJS());

export const makeSelectStep2 = () => createSelector(selectHome, substate => substate.get('step2').toJS());

export const makeSelectStep3 = () => createSelector(selectHome, substate => substate.get('step3').toJS());

export const makeSelectFullName = () => createSelector(selectHome, substate => substate.get('fullName').toJS());

export const makeSelectEmail = () => createSelector(selectHome, substate => substate.get('email').toJS());
