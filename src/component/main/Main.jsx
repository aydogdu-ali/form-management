import React from 'react'
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import MainStyle from "./main.module.css"



const Main = () => {
  const navigate = useNavigate();

   const  handleClick =()=>{
    navigate("/register")

   }


    
  return (
    <>

    <header className={MainStyle["mid"]}>
     <h1 className='text-danger fs-bond'>Hoşgeldiniz</h1>
     <Button variant="success " className='w-50' onClick ={handleClick}> {"Hadi Bize Katılmak İçin Tıkla"}</Button>

    </header>
  

    </>
    
  )
}

export default Main