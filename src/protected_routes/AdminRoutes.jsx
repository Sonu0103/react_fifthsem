import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoutes = () => {
  // get user information
  const user = JSON.parse(localStorage.getItem("user"));

  // checck user and isadmin
  return user != null && user.isAdmin ? <Outlet /> : <Navigate to={"/login"} />;
};

export default AdminRoutes;
