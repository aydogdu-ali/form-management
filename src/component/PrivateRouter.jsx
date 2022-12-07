

import  { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import  {LoginContext}  from "../contex/LoginContex"

const PrivateRouter = () => {
  const { login } = useContext(LoginContext);


  // Kullanıcı login olduğunda ekip sayfasına yönlendirilir. Değilse login sayfasına
  return (
    <div> 
    {login  ? <Outlet /> : <Navigate to="/login" />}
  </div>
  )
}

export default PrivateRouter



