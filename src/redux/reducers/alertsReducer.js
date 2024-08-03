// // src/redux/reducers/alertsReducer.js

// const initialState = {
//     loading: false,
//     error: null
// };

// const alertsReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'SHOW_LOADING':
//             return {
//                 ...state,
//                 loading: true
//             };
//         case 'HIDE_LOADING':
//             return {
//                 ...state,
//                 loading: false
//             };
//         case 'SHOW_ERROR':
//             return {
//                 ...state,
//                 error: action.payload
//             };
//         case 'HIDE_ERROR':
//             return {
//                 ...state,
//                 error: null
//             };
//         default:
//             return state;
//     }
// };

// export default alertsReducer;
// src/redux/reducers/alertsReducer.js
const initialState = {
    loading: false,
  };
  
  export const alertsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  };
  