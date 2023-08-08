import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const ProtectedRoute = () => {
  const location = useLocation();

  const { user } = useUser();
  const token = localStorage.getItem("token");

  return user?.isLoggedIn || token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
