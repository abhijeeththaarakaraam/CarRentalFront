import './App.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';

const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children;
  }
  return <Navigate to="/login" />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route 
        path="/booking/:carId" 
        element={<ProtectedRoute><BookingCar /></ProtectedRoute>}
        loader={async ({ params }) => {
          const response = await fetch(`https://crbackend-lixw.onrender.com/api/cars/${params.carId}`);
          if (!response.ok) {
            throw new Error("Failed to load car data");
          }
          return response.json();
        }}
      />
      <Route path="/userbookings" element={<ProtectedRoute><UserBookings /></ProtectedRoute>} />
      <Route path="/addcar" element={<ProtectedRoute><AddCar /></ProtectedRoute>} />
      <Route path="/editcar/:carid" element={<ProtectedRoute><EditCar /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


