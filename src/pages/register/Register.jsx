import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RegisterStyle from "./register.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();

  const succsess = () =>
    toast.success(" Aramıza Hoşgeldin!", {
      position: "top-center",
      autoClose: 1250,
      hideProgressBar: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    city: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, tel, city, email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    succsess();
    setFormValue({
      firstName: "",
      lastName: "",
      tel: "",
      city: "",
      email: "",
      password: "",
    });

    setTimeout((handleSubmit) => navigate("/ekip"), 3000);
    console.log(formValue);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormValue({ ...formValue, [e.target.id]: e.target.value });
  };

  return (
    <>
      <h1 className="text-center text-danger fs-bond mt-2">Üyelik Formu</h1>

      <div className={RegisterStyle["register"]}>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className={RegisterStyle["info"]}>
                Adınız:{" "}
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
