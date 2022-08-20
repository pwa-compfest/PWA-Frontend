import React from "react";
import useAuth from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ role }) {
  const { getRole, isAuthorized } = useAuth();
  const userRole = getRole();
  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
