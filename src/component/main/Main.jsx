import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import MainStyle from "./main.module.css";
import { LoginContext } from "../../contex/LoginContex";

const Main = () => {
  const { login } = useContext(LoginContext);

  // Üye olmayan kullanıcıyı register sayfasına yönlendirdim
  const navigate = useNavigate();

  //Kullanıcı butona tıkladığında register sayfasına yönlendirecek mouse eventini tanımladım.
  const handleClick = () => {
    navigate("/register");
  };

  return (
    <>
      <header className={MainStyle["mid"]}>
        <h1 className="text-danger fs-bond">Hoşgeldiniz</h1>

        {/*Kullanıcı giriş yapmadıysa gösteriyorum*/}
        {!login && (
          <Button variant="success " className="w-50" onClick={handleClick}>
            Hadi Bize Katılmak İçin Tıkla
          </Button>
        )}

        {/*Kullanıcı giriş yapdıysa gösteriyorum*/}
        {login && (
          <h4 className=" bg-dark text-white border rounded p-3 mt-2 ">
            "Geleceğin kapısı onu itmesini bilenlere açılır.” (Coluche){" "}
          </h4>
        )}
      </header>
    </>
  );
};

export default Main;
