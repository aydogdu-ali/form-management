

import  { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import  {LoginContext}  from "../contex/LoginContex"

const PrivateRouter = () => {
  const { login, user } = useContext(LoginContext);

  return (
    <div> 
    {login && (user.email || user.password) ? <Outlet /> : <Navigate to="/login" />}
  </div>
  )
}

export default PrivateRouter



