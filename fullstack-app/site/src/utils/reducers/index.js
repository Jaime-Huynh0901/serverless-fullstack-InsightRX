import { combineReducers } from 'redux';
import eventsReduc from './eventsReduc';

/*
 * Combined Reducers
 */

// combineReducers() -> generates function to call the reducers with slices of state selected according to their keys + re-combines their results into a single object
  // combineReducers() also does not create a new object if all of the reducers provided to it do not change state
const eventTypesReducers = combineReducers({
  eventsReduc
})

export default eventTypesReducers;