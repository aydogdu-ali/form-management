import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginStyle from "./login.module.css"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../../contex/LoginContex";

const Login = () => {
  const { user, setUser } = useContext(LoginContext);
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

 
 

  const handleSubmit = (e) => {
    e.preventDefault();
    succsess();
        setTimeout((handleSubmit) => navigate("/ekip"), 3000);
       
  
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
                value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                value={user?.password || ""}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
