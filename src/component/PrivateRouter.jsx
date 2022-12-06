
import  { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import  {LoginContext}  from "../contex/LoginContex"

const PrivateRouter = () => {
  const { user } = useContext(LoginContext);

  return (
    <div> <div>
    {user.email && user.password ? <Outlet /> : <Navigate to="/register" />}
  </div></div>
  )
}

export default PrivateRouter



