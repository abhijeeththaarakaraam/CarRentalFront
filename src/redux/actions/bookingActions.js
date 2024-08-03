
// import axios from '../../axios';
// import { message } from 'antd';

// export const bookCar = (reqObj) => async dispatch => {
//     dispatch({ type: 'LOADING', payload: true });

//     try {
//         await axios.post('/bookings/bookcar', reqObj);
//         dispatch({ type: 'LOADING', payload: false });
//         // message.success('Your car booked successfully');
//         return Promise.resolve();
//     } catch (error) {
//         console.log(error);
//         dispatch({ type: 'LOADING', payload: false });
//         // message.error('Something went wrong, please try later');
//         return Promise.reject(error);
//     }
// };

// export const getAllBookings = () => async dispatch => {
//     dispatch({ type: 'LOADING', payload: true });

//     try {
//         const response = await axios.get('/bookings/getallbookings');
//         dispatch({ type: 'GET_BOOKINGS_SUCCESS', payload: response.data });
//         dispatch({ type: 'LOADING', payload: false });
//     } catch (error) {
//         console.log(error);
//         dispatch({ type: 'GET_BOOKINGS_FAILURE', payload: error.message });
//         dispatch({ type: 'LOADING', payload: false });
//     }
// };


import axios from '../../axios';
import { message } from 'antd';

export const bookCar = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        console.log('Booking Request:', reqObj); // Log request
        await axios.post('/bookings/bookcar', reqObj);
        dispatch({ type: 'LOADING', payload: false });
        return Promise.resolve();
    } catch (error) {
        console.error('Error Booking Car:', error); // Log error
        dispatch({ type: 'LOADING', payload: false });
        return Promise.reject(error);
    }
};


export const getAllBookings = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        const response = await axios.get('/bookings/getallbookings');
        console.log('Fetched Bookings:', response.data); // Log response data
        dispatch({ type: 'GET_BOOKINGS_SUCCESS', payload: response.data });
        dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
        console.error('Error Fetching Bookings:', error); // Log error
        dispatch({ type: 'GET_BOOKINGS_FAILURE', payload: error.message });
        dispatch({ type: 'LOADING', payload: false });
    }
};
