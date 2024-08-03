import "./editCar.css"
import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { editCar, getAllCars } from "../redux/actions/carsActions";

function EditCar() {
  const dispatch = useDispatch();
  const { cars, loading } = useSelector((state) => state.carsReducer);
  const [selectedCar, setSelectedCar] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    // Function to parse carId from window.location.pathname
    const getCarIdFromPath = () => {
      const pathParts = window.location.pathname.split("/");
      return pathParts[pathParts.length - 1]; // Assuming carId is at the end of the URL path
    };

    const carId = getCarIdFromPath();

    if (!cars.length) {
      dispatch(getAllCars());
    } else {
      const foundCar = cars.find((car) => car._id === carId);
      if (foundCar) {
        setSelectedCar(foundCar);
        form.setFieldsValue(foundCar); // Set initial form values
      } else {
        console.error(`Car with ID ${carId} not found.`);
        // Handle scenario where selected car is not found
      }
    }
  }, [cars, dispatch, form]);

  useEffect(() => {
    console.log("Selected Car ID:", selectedCar ? selectedCar._id : "Not selected");
  }, [selectedCar]);

  const onFinish = (values) => {
    if (selectedCar) {
      const updatedCar = { ...selectedCar, ...values };
      dispatch(editCar(updatedCar));
    } else {
      console.error("Selected car details not found.");
      // Handle this scenario as per your application's requirement
    }
  };

  return (
    <DefaultLayout>
      {loading ? (
        <Spinner />
      ) : selectedCar ? (
        <div className="add-car-container">
          <Form form={form} initialValues={selectedCar} onFinish={onFinish}>
            <h3>Edit Car</h3>
            <hr />
            <Form.Item name="name" label="Car Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="image" label="Image URL" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="rentPerHour"
              label="Rent Per Hour"
              rules={[{ required: true, type: "number", min: 0 }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item name="capacity" label="Capacity" rules={[{ required: true }]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item name="fuelType" label="Fuel Type" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Edit Car
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <p>No car found with the specified ID.</p>
      )}
    </DefaultLayout>
  );
}

export default EditCar;
