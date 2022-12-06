
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Private = () => {
  const { user } = useContext(LoginContext);

  return (
    <div> <div>
    {user.email && user.password ? <Outlet /> : <Navigate to="/login" />}
  </div></div>
  )
}

export default Private



