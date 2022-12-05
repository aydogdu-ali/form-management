import "./App.css";
import Main from "./component/main/Main";
import Navbar from "./component/navbar/Navbar.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import PrivateRouter from "./component/PrivateRouter";
import Uyeler from "./pages/üye/Uyeler.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />

        <Route path="/Üyeler" element={<PrivateRouter />}>
          <Route path="" element={<Uyeler />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
