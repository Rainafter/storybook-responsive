import { createLogger } from 'redux-logger';

export const createLoggerPredicate = () => {
  let count = 0;
  return (getState, action) => {
    const regex = /UPDATE_ALL_SUGGEST_INPUT_VALUE|UPDATE_TYPE_INPUT_VALUE|UPDATE_EDIT_INPUT_FIELD|UPDATE_EDIT_INPUT_FIELD_CR|SET_EDIT_DIRTY|SET_EDIT_VALID/;
    const unwanted = regex.test(action.type);
    if (unwanted) ++count;  // eslint-disable-line
    return (
      (count % 5 === 0 && unwanted) || !unwanted
    );
  };
};
// redux-logger docs: https://github.com/evgenyrodionov/redux-logger
export const logger = createLogger({
  // default collapse action logs that are not errors:
  collapsed: (getState, action, logEntry) => !logEntry.error,
  // transform immutable state objects to JSON in the logger so that they are more readable:
  stateTransformer: state => state.toJS(),
  // dont log super common actions like those after the search input is changed:
  predicate: createLoggerPredicate(),
});
