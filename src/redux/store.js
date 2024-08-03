
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {alertsReducer} from './reducers/alertsReducer';
// import carsReducer from './reducers/carsReducer'; // Ensure this is the default import

// const rootReducer = combineReducers({
//   alertsReducer,
//   carsReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { alertsReducer } from './reducers/alertsReducer';
import carsReducer from './reducers/carsReducer';
import bookingsReducer from './reducers/bookingsReducer';

const rootReducer = combineReducers({
  alertsReducer,
  carsReducer,
  bookingsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
