// const initialState = {
//     bookings: [],
//     error: null,
//   };
  
//   const bookingsReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'GET_BOOKINGS_SUCCESS':
//         return {
//           ...state,
//           bookings: action.payload,
//         };
//       case 'GET_BOOKINGS_FAILURE':
//         return {
//           ...state,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default bookingsReducer;
const initialState = {
  bookings: [],
  error: null,
};

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'GET_BOOKINGS_SUCCESS':
          return {
              ...state,
              bookings: action.payload,
          };
      case 'GET_BOOKINGS_FAILURE':
          return {
              ...state,
              error: action.payload,
          };
      default:
          return state;
  }
};

export default bookingsReducer;
