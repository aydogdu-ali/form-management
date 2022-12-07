import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RegisterStyle from "./register.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contex/LoginContex";

// react-toastify kütüphanesinden kullanıcıya bilgi mesajı vermek için kullandım"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { setLogin } = useContext(LoginContext);

  // navigate hookunu kullanıcı kayıt olduğunda ekip sayfasına yönlendirilmesi için kullandım.
  const navigate = useNavigate();

  // toastify kütüphanesinden aldığım başarılı girişi için yazdığım paramaetrelere göre çalışan fonksiyon
  const succsess = () =>
    toast.success(" Aramıza Hoşgeldin!", {
      position: "top-center",
      autoClose: 1250,
      hideProgressBar: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  // Contex Api de tanımladığın kullanıcı bilgilerini kullanıcıdan aldığınız inputlarla tek bir statede topluyorum.
  // Bu çalışmada Contex Api simule edilmiştir.
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    city: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, tel, city, email, password } = user;

  // Kullanıcı bilgilerini girdikten sonra butonu "onay" verdiğinde çalışacak fonksiyonu tanımladım.
  // success() fonksiyonu ile toastify mesajı ekrana gelecek. setUser ile inputların içi boşalmış olacak.
  //setTimeout fonksiyonu ile toastifay mesajı kaybolduktan sonra kullanıcıyı "ekip" sayfasına yönlendirmiş oluyorum.

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
    succsess();
    setUser({
      firstName: "",
      lastName: "",
      tel: "",
      city: "",
      email: "",
      password: "",
    });

    setTimeout((handleSubmit) => navigate("/ekip"), 2000);
    console.log(user);
  };

  // kullanıcının her bir inputa veri girdiğinde girdiği verileri user objesine atmasını sağlıyorum.
  const handleChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <>
      <h1 className="text-center text-danger fs-bond mt-2">Üyelik Formu</h1>

      <div className={RegisterStyle["register"]}>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className={RegisterStyle["info"]}>
                Adınız:
                <span className="text-dark">
                  {firstName.toLocaleUpperCase()}
                </span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Adınız"
                required
                id="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className={RegisterStyle["info"]}>
                Soy Adınız:
                <span className="text-dark">
                  {lastName.toLocaleUpperCase()}
                </span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Soy Adınız"
                required
                id="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className={RegisterStyle["info"]}>
                Telefon Numaranız:
                <span className="text-dark">{tel}</span>
              </Form.Label>
              <Form.Control
                type="tel"
                placeholder="Telefon Numaranız 505-123-11-11 formatında"
                pattern="/{[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}/ "
                maxLength="13"
                required
                id="tel"
                value={tel}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className={RegisterStyle["info"]}>
                Yaşadığınız Şehir:
                <span className="text-dark">{city.toLocaleUpperCase()}</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Yaşadığınız Şehir"
                required
                id="city"
                value={city}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className={RegisterStyle["info"]}>
                Email address:<span className="text-dark">{email}</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                id="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className={RegisterStyle["info"]}>
                Password:<span className="text-dark">{password}</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                id="password"
                maxLength="8"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="outline-primary"
              className="w-100 mt-3 mb-3"
              type="submit"
            >
              Onay
            </Button>
          </Form>
        </Container>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
