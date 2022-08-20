import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/AuthContext";
function RestrictedRoute() {
  const { getRole, isAuthorized } = useAuth();
  const role = getRole();

  if (isAuthorized) {
    return <Navigate to={`/${role}/dashboard`} />;
  }

  return <Outlet />;
}

export default RestrictedRoute;
