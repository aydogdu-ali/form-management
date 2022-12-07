import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import MainStyle from "./main.module.css";

const Main = () => {
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
        <Button variant="success " className="w-50" onClick={handleClick}>
          {" "}
          {"Hadi Bize Katılmak İçin Tıkla"}
        </Button>
      </header>
    </>
  );
};

export default Main;
