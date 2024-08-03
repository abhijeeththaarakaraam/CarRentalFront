import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button, Row, Col, Card, Spin } from "antd";
import { Link } from "react-router-dom";
import axios from "../axios";

function DefaultLayout(props) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("/cars/");
        setCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="bookings">
        <Link to="/userbookings">Bookings</Link>
      </Menu.Item>
      <Menu.Item key="admin">
        <Link to="/admin">Admin</Link>
      </Menu.Item>
      <Menu.Item
        key="logout"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <span style={{ color: "slateblue" }}>Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between" style={{alignItems:'center'}}>
              <h1>
                <b>
                  <Link to="/" style={{ color: "slateblue" }}>
                    Car Rental
                  </Link>
                </b>
              </h1>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button>{user?.username || "User"}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">
        {props.children}
        <div className="car-list">
          {loading ? (
            <div className="loading-spinner">
              <Spin />
            </div>
          ) : (
            <Row gutter={16}>
              {cars.map((car) => (
                <Col key={car._id} lg={6} sm={12} xs={24}>
                  <Card style={{ margin: '5px', padding: '10px' }}
                    hoverable
                    title={car.name}
                    cover={<img alt={car.name} src={car.image} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />}
                  >
                    <p>Capacity: {car.capacity}</p>
                    <p>Fuel Type: {car.fuelType}</p>
                    <p>Rent Per Hour: ${car.rentPerHour}</p>
                    <Button type="primary" style={{color:'white'}}>
                      <Link to={`/booking/${car._id}`}>Book Now</Link>
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
      <div className="footer text-center">
        <hr />
        <p>CopyRight &copy; 2024 CarRental.com</p>
      </div>
    </div>
  );
}

export default DefaultLayout;




