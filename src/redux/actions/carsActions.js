
import axios from '../../axios';
import { message } from 'antd';

export const getAllCars = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        const response = await axios.get('/cars/');
        dispatch({ type: 'GET_ALL_CARS', payload: response.data });
        dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false });
    }
};

export const getCar = (carId) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        const response = await axios.get(`/cars/${carId}`);
        dispatch({ type: 'GET_CAR', payload: response.data });
        dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false });
        // Optionally handle error (e.g., show error message)
    }
};

export const addCar = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        await axios.post('/cars/addcar', reqObj);
        dispatch({ type: 'LOADING', payload: false });
        message.success('New car added successfully');
        setTimeout(() => {
            window.location.href = '/admin';
        }, 500);
    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false });
    }
};

export const editCar = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        await axios.post('/cars/editcar', reqObj);
        dispatch({ type: 'LOADING', payload: false });
        message.success('Car details updated successfully');
        setTimeout(() => {
            window.location.href = '/admin';
        }, 500);
    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false });
    }
};

export const deleteCar = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        await axios.post('/cars/deletecar', reqObj);
        dispatch({ type: 'LOADING', payload: false });
        message.success('Car deleted successfully');
        setTimeout(() => {
            window.location.reload();
        }, 500);
    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false });
    }
};
