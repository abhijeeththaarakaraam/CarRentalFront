import "./admin.css"
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { deleteCar, getAllCars } from "../redux/actions/carsActions";
import { Col, Row, Card, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button, Spin } from "antd";
const user = JSON.parse(localStorage.getItem("user"));

const { Meta } = Card;

function AdminHome() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalCars, setTotalcars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);
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
    // <DefaultLayout>
    <>
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
      <Row justify="center" gutter={16} className="mt-2">
        <Col lg={20} sm={24}>
          <div className="d-flex justify-content-around align-items-center">
            <h3 className="mt-1 mr-2">Admin Panel</h3>
            <button className="btn1">
              <a href="/addcar">ADD CAR</a>
            </button>
          </div>
        </Col>
      </Row>

      {loading && <Spinner />}

      <Row justify="center" gutter={[16, 16]}>
        {totalCars.map((car) => (
          <Col lg={6} md={8} sm={12} xs={24} key={car._id} className="another">
            <Card className="card1"
              hoverable
              cover={<img alt={car.name} src={car.image} className="carimg" />}
              actions={[
                <Link to={`/editcar/${car._id}`}>
                  <EditOutlined style={{ color: "green" }} />
                </Link>,
                <Popconfirm
                  title="Are you sure to delete this car?"
                  onConfirm={() => { dispatch(deleteCar({ carid: car._id })); }}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteOutlined style={{ color: "red" }} />
                </Popconfirm>,
              ]}
            >
              <Meta
                title={car.name}
                description={`Rent Per Hour ${car.rentPerHour} /-`}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <div className="footer text-center">
        <hr />
        <p>CopyRight &copy; 2024 CarRental.com</p>
      </div>
      {/* </DefaultLayout> */}
      </>
  );
}

export default AdminHome;
