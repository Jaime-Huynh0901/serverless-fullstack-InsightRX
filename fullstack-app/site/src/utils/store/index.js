// import createStore component function from react-redux 
import {createStore, applyMiddleware, compose} from 'redux';
import eventTypesReducers from '../reducers';
import thunkMiddleware from 'redux-thunk';

// Redux store calls the reducer function you gave it
export const configureStore = initialState => {
    const store = createStore(eventTypesReducers, initialState, compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ));
    return store;
  }

// const store = createStore(eventsReducers); // higher-order function

// export default store; 
// Store:
    // Holds application state;
    // Allows access to state via getState();
    // Allows state to be updated via (action);
    // Registers listeners via subscribe(listener);
    // Handles unregistering of listeners via the function returned by subscribe(listener);