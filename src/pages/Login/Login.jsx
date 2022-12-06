import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginStyle from "./login.module.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const succsess = () =>
    toast.success(" Hoşgeldin!", {
      position: "top-center",
      autoClose: 1250,
      hideProgressBar: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [formValue, setFormValue] = useState({
       email: "",
    password: "",
  });

  const { email, password } = formValue;

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

    setTimeout((handleSubmit) => navigate("/Üyeler"), 3000);
    console.log(formValue);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormValue({ ...formValue, [e.target.id]: e.target.value });
  };

  return (
    <>
      <h1 className="text-center text-danger fs-bond mt-4">Üye Giriş Ekranı</h1>

      <div className= {LoginStyle["login"]}>
        <Container>
          <Form onSubmit={handleSubmit}>
                                 
            <Form.Group className="mb-3">
              <Form.Label className="">
                Email address:
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
              <Form.Label className="">
                Password:
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
              Giriş
            </Button>
          </Form>
        </Container>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
