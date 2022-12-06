import "./App.css";
import Main from "./component/main/Main";
import Navbar from "./component/navbar/Navbar.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import PrivateRouter from "./component/PrivateRouter";
import Ekip from "./pages/üye/Ekip"
import { Route, Routes } from "react-router-dom";
import LoginProvider from "./contex/LoginContex.jsx";


function App() {
  return (
    <div>
      <LoginProvider>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />

        <Route path="/ekip" element={<PrivateRouter />}>
          <Route path="" element={<Ekip />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      </LoginProvider>
    </div>
  );
}

export default App;
