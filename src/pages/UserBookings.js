// import "./admin.css"
// import React, { useEffect } from "react";
// import DefaultLayout from "../components/DefaultLayout";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllBookings } from "../redux/actions/bookingActions";
// import { Col, Row, Card } from "antd";
// import Spinner from '../components/Spinner';
// import moment from "moment";

// function UserBookings() {
//   const dispatch = useDispatch();
//   const { bookings } = useSelector((state) => state.bookingsReducer);
//   const { loading } = useSelector((state) => state.alertsReducer);
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     dispatch(getAllBookings());
//   }, []);

//   return (
//     <DefaultLayout>
//       {loading && (<Spinner />)}
//       <h3 className="text-center mt-2">My Bookings</h3>

//       <Row justify="center" gutter={16}>
//         <Col lg={16} sm={24}>
//           {bookings.filter(o => o.user === user._id).map((booking) => {
//             return (
//               <Card className="bs1 mt-3" key={booking._id} style={{ backgroundColor: '#f0f0f0' }}>
//                 <Row gutter={16} className="text-left">
//                   <Col lg={6} sm={24}>
//                     <p><b>{booking.car}</b></p>
//                     <p>Total hours: <b>{booking.totalHours}</b></p>
//                     <p>Rent per hour: <b>{booking.rentPerHour}</b></p>
//                     <p>Total amount: <b>{booking.totalAmount}</b></p>
//                     <p>Driver Required: <b>{booking.driverRequired ? "Yes" : "No"}</b></p>
//                     <p>Payment Status: <b>{booking.paymentStatus}</b></p>
//                   </Col>

//                   <Col lg={12} sm={24} style={{maxWidth:'40%'}}>
//                     <p>From: <b>{moment(booking.bookedTimeSlots.from).format('MMM DD YYYY HH:mm')}</b></p>
//                     <p>To: <b>{moment(booking.bookedTimeSlots.to).format('MMM DD YYYY HH:mm')}</b></p>
//                     <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD YYYY')}</b></p>
//                   </Col>

//                   <Col lg={6} sm={24} className='text-right'>
//                     <img style={{ borderRadius: 5 }} src={booking.carImageUrl} height="200"  className="p-2 anotherImg" />
//                   </Col>
//                 </Row>
//               </Card>
//             );
//           })}
//         </Col>
//       </Row>
//     </DefaultLayout>
//   );
// }

// export default UserBookings;
import "./admin.css"
import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row, Card } from "antd";
import Spinner from '../components/Spinner';
import moment from "moment";

function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  useEffect(() => {
    console.log("Fetched Bookings: ", bookings);
  }, [bookings]);

  return (
    <DefaultLayout>
      {loading && (<Spinner />)}
      <h3 className="text-center mt-2">My Bookings</h3>

      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
          {bookings.filter(o => o.user === user._id).map((booking) => {
            return (
              <Card className="bs1 mt-3" key={booking._id} style={{ backgroundColor: '#f0f0f0' }}>
                <Row gutter={16} className="text-left">
                  <Col lg={6} sm={24}>
                    <p><b>{booking.car}</b></p>
                    <p>Total hours: <b>{booking.totalHours}</b></p>
                    <p>Rent per hour: <b>{booking.rentPerHour}</b></p>
                    <p>Total amount: <b>{booking.totalAmount}</b></p>
                    <p>Driver Required: <b>{booking.driverRequired ? "Yes" : "No"}</b></p>
                    <p>Payment Status: <b>{booking.paymentStatus}</b></p>
                  </Col>

                  <Col lg={12} sm={24} style={{maxWidth:'40%'}}>
                    <p>From: <b>{moment(booking.bookedTimeSlots.from).format('MMM DD YYYY HH:mm')}</b></p>
                    <p>To: <b>{moment(booking.bookedTimeSlots.to).format('MMM DD YYYY HH:mm')}</b></p>
                    <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD YYYY')}</b></p>
                  </Col>

                  <Col lg={6} sm={24} className='text-right'>
                    <img style={{ borderRadius: 5 }} src={booking.carImageUrl} height="200" className="p-2 anotherImg" />
                  </Col>
                </Row>
              </Card>
            );
          })}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;

