import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavbarStyle from "./navbar.module.css";
import { LoginContext } from "../../contex/LoginContex";

const Navbar1 = () => {
  const { user, setUser,login, setLogin } = useContext(LoginContext);
  
 

  const handleClick = (e) => {
        e.preventDefault();
    setUser({ email: "", password: "" });
    setLogin(false)
    
  }
  console.log(user);

  return (
    <Nav className="justify-content-center mt-3">
      <Nav.Item className={NavbarStyle["nav-item"]}>
        <Link className={NavbarStyle["nav-item-link"]} to="/">
          Anasayfa
        </Link>
      </Nav.Item>
      {!login  ?  (
        <Nav.Item className={NavbarStyle["nav-item"]}>
          <Link className={NavbarStyle["nav-item-link"]} to="/login">
            Login
          </Link>
        </Nav.Item>):      
      (
        <Nav.Item className={NavbarStyle["nav-item"]}>
          <Link
            className={NavbarStyle["nav-item-link"] }
            to="/login"
            onClick={handleClick}
          >
            Logout
          </Link>
        </Nav.Item>
      )}

      <Nav.Item className={NavbarStyle["nav-item"]}>
        <Link className={NavbarStyle["nav-item-link"]} to="/ekip">
          Ekip
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar1;
