import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/AuthContext";
function RestrictedRoute() {
  const { getRole } = useAuth();
  const role = getRole();

  if (role) {
    return <Navigate to={`/${role}/dashboard`} />;
  }

  return <Outlet />;
}

export default RestrictedRoute;
