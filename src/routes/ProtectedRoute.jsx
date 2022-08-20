import React from "react";
import useAuth from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ role }) {
  const { getRole } = useAuth();
  const userRole = getRole();
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
