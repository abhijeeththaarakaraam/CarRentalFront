// src/redux/reducers/carsReducer.js

const initialState = {
    cars: [],
    // other initial state properties if any
  };
  
  const carsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_CARS':
        return { ...state, cars: action.payload };
      // other cases if any
      default:
        return state;
    }
  };
  
  export default carsReducer;
  