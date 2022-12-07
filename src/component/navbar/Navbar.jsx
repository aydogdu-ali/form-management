import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavbarStyle from "./navbar.module.css";
import { LoginContext } from "../../contex/LoginContex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar1 = () => {
  // Tanımladığım global değişkenleri kullanmak için çağırdım.
  const { user, setUser, login, setLogin } = useContext(LoginContext);

  // Kullanıcı Giriş yapmadan Ekip sayfasına tıklarsa uyarı toastify verdiren fonksiyonu kulandım.
  const warning = () =>
    toast.warning(" Ekibi Görmek İçin Giriş Yapmalısın!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const error = () =>
    toast.error(" Tekrar Bekleriz!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  // Kullanıcı login olduğunda setUser ile inputtaki verileri  temizliyorum.
  // setLogin ile de sisteme giriş yaptığını bildiriyorum
  // error( fonksiyonu ile toastfy mesajı verdiriyorum

  const handleClick = (e) => {
    e.preventDefault();
    setUser({ email: "", password: "" });
    setLogin(false);
    error();
  };
  console.log(user);

  // Kullanıcı giriş yapmadan/yada üye olmadan ekip sayfasına tıklayınca gerçekleşecek olan mouse eventini tanımladım
  const handleEkip = () => {
    if (!login) {
      warning();
    }
  };

  return (
    <Nav className="justify-content-center mt-3">
      <Nav.Item className={NavbarStyle["nav-item"]}>
        <Link className={NavbarStyle["nav-item-link"]} to="/">
          Anasayfa
        </Link>
      </Nav.Item>
      {/*Bu ternary ifadesinde kullanıcı login değilse Navbar da Login yazacak eğer login ise  Logout yazmış olacak. 
      Ayrıca Logout tıklandığında çalışacak mouse eventini yukarıda tanımlamıştık */}
      {!login ? (
        <Nav.Item className={NavbarStyle["nav-item"]}>
          <Link className={NavbarStyle["nav-item-link"]} to="/login">
            Login
          </Link>
        </Nav.Item>
      ) : (
        <Nav.Item className={NavbarStyle["nav-item"]}>
          <Link
            className={NavbarStyle["nav-item-link"]}
            to="/login"
            onClick={handleClick}
          >
            Logout
          </Link>
        </Nav.Item>
      )}

      <Nav.Item className={NavbarStyle["nav-item"]}>
        <Link
          className={NavbarStyle["nav-item-link"]}
          to="/ekip"
          onClick={handleEkip}
        >
          Ekip
        </Link>
      </Nav.Item>
      <ToastContainer />
    </Nav>
  );
};

export default Navbar1;
