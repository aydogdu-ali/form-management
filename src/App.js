import "./App.css";
import Main from "./component/main/Main";
import Navbar from "./component/navbar/Navbar.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import PrivateRouter from "./component/PrivateRouter";
import Ekip from "./pages/üye/Ekip";
import { Route, Routes } from "react-router-dom";
import LoginProvider from "./contex/LoginContex.jsx";

function App() {
  return (
    <div>
      {/* LoginProvider ile App içindeki tüm Componentleri sarmaladım. Bu durumda sarmaladığım her yerde Contex te tanımladım değişkenleri çağırım kullanabilirim.*/}
      <LoginProvider>
        <Navbar />

        {/*Her sayfada gösterilecek componentleri Routes'dışında bırakıyorum. İçindekiler ise vereceğimiz pathe göre değişecek olan sayfalar.*/}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          {/*Ekip sayfasını sadece üyelere özel göstermek için onu PrivateRouter ile sarmalıyorum. Sadece üye olanlar bu sayfaya gidebilir.*/}
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
