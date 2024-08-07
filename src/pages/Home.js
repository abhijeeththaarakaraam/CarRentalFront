// export default Home;
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import Spinner from '../components/Spinner';
import { getAllCars } from '../redux/actions/carsActions';
import { Col, Row, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { RangePicker } = DatePicker;

function Home() {
    const { cars } = useSelector((state) => state.carsReducer);
    const { loading } = useSelector((state) => state.alertsReducer);
    const [filteredCars, setFilteredCars] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);

    function setFilter(values) {
        const selectedFrom = moment(values[0], 'MMM DD yyyy HH:mm');
        const selectedTo = moment(values[1], 'MMM DD yyyy HH:mm');

        const temp = cars.filter((car) => {
            for (const booking of car.bookedTimeSlots) {
                if (
                    selectedFrom.isBetween(booking.from, booking.to) ||
                    selectedTo.isBetween(booking.from, booking.to) ||
                    moment(booking.from).isBetween(selectedFrom, selectedTo) ||
                    moment(booking.to).isBetween(selectedFrom, selectedTo)
                ) {
                    return false;
                }
            }
            return true;
        });

        setFilteredCars(temp);
    }

    if (loading) {
        return <Spinner />;
    }

    return (
        <DefaultLayout>
            {/* <Row className="mt-3" justify="center">
                <Col lg={20} sm={24} className="d-flex justify-content-left">
                    <RangePicker showTime={{ format: 'HH:mm' }} format="MMM DD yyyy HH:mm" onChange={setFilter} />
                </Col>
            </Row> */}

            <Row justify="center" gutter={16}>
                {filteredCars.length === 0 ? (
                    <Col span={24} className="text-center">
                        <h2>Choose any Car which you dreamt of!!</h2>
                    </Col>
                ) : (
                    filteredCars.map((car) => (
                        <Col lg={5} sm={24} xs={24} key={car._id}>
                            <div className="car p-2 bs1">
                                <img src={car.image} className="carimg" alt={car.name} />

                                <div className="car-content d-flex align-items-center justify-content-between">
                                    <div className="text-left pl-2">
                                        <p>{car.name}</p>
                                        <p>Rent Per Hour {car.rentPerHour} /-</p>
                                    </div>

                                    <div>
                                        <button className="btn1 mr-2">
                                            <Link to={`/booking/${car._id}`}>Book Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))
                )}
            </Row>
        </DefaultLayout>
    );
}

export default Home;
