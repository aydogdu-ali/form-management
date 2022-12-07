import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginStyle from "./login.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../../contex/LoginContex";

const Login = () => {
  const { user, setUser,setLogin } = useContext(LoginContext);
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
    if(user.email && user.password){
      succsess();
      setTimeout((handleSubmit) => navigate("/ekip"), 2000);
      setLogin(true)
    }

    else {
      setLogin(false)
    }

    
      
   
   
    
     
  };

  return (
    <>
      <h1 className="text-center text-danger fs-bond mt-4">Üye Giriş Ekranı</h1>

      <div className={LoginStyle["login"]}>
        <Container>
          <div>
            <Form.Group className="mb-3">
              <Form.Label className="">Email address:</Form.Label>
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
              <Form.Label className="">Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                id="password"
                value={user?.password || ""}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Form.Group>

            
          </div>
        </Container>
        <Button
              variant="danger"
              className="w-100 mt-3 mb-3"
              type="submit"
              onClick = {handleSubmit}
            >
              Giriş
            </Button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
