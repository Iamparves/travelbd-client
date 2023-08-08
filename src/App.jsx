import "bootstrap/dist/css/bootstrap.css";
import React, { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import AddPackage from "./components/Dashboard/AddPackage/AddPackage";
import BookingsList from "./components/Dashboard/BookingsList/BookingsList";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import ManagePackages from "./components/Dashboard/ManagePackages/ManagePackages";
import MyBookings from "./components/Dashboard/MyBookings/MyBookings";
import Profile from "./components/Dashboard/Profile/Profile";
import Testimonial from "./components/Dashboard/Testimonial/Testimonial";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PageLoader from "./components/Shared/Loader/PageLoader";
import UserContextProvider from "./contexts/UserContext";

const Checkout = lazy(() => import("./pages/checkout"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const NotFound = lazy(() => import("./pages/notFound"));
const Packages = lazy(() => import("./pages/packages"));

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Toaster />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/packages" element={<Packages />} exact />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="" element={<Navigate to="profile" />} />
                <Route path="profile" element={<Profile />} />
                <Route path="bookings" element={<BookingsList />} />
                <Route path="addPackage" element={<AddPackage />} />
                <Route path="managePackage" element={<ManagePackages />} />
                <Route path="makeAdmin" element={<MakeAdmin />} />
                <Route path="testimonial" element={<Testimonial />} />
                <Route path="myBookings" element={<MyBookings />} />
              </Route>
              <Route path="/checkout/:id" element={<Checkout />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContextProvider>
  );
};

export default App;
