import "./editCar.css";
import { Col, Row, Form, Input,Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import Spinner from '../components/Spinner';
import { addCar } from '../redux/actions/carsActions';

function EditCar() {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.alertsReducer);

    function onFinish(values) {
        values.bookedTimeSlots = [];

        dispatch(addCar(values));
        console.log(values);
    }

    return (
        <DefaultLayout>
            {loading && (<Spinner />)}
            <Row justify='center mt-5'>
                <Col lg={12} sm={24} xs={24} className='p-2'>
                    <Form className='add-car-container p-2' layout='vertical' onFinish={onFinish}>
                        <h3>Add Car</h3>
                        <hr />
                        <Form.Item name='name' label='Car name' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='image' label='Image url' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='rentPerHour' label='Rent per hour' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='capacity' label='Capacity' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='fuelType' label='Fuel Type' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Add Car
                            </Button>
                            </Form.Item>
                        </Form>
                </Col>
            </Row>

        </DefaultLayout>
    )
}

export default EditCar;

