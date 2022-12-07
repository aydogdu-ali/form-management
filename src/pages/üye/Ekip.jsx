import React from 'react'
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import EkipStyle from "./ekip.module.css"



// Api'den gelen veriyi tutacağım stateyi tanımlıyorum.
const Ekip = () => {
  const [ekip, setEkip] = useState([]);
  

  

  // Api'den veri çekmek için fonksiyon tanımlıyorum.
  const getUsers = () => {
    fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((data) => setEkip(data.data))
    .catch((err) => console.log(err));
     
  };

  // console.log(ekip)


  // Gelen verinin sayfa render olduğunda çalışması için useEffect Hookunu kullanıyorum.
  useEffect(() => {
    getUsers();
  }, []);


 
 

  return (

 <Container className="text-center mt-5">
    <div className={EkipStyle["ekip"]}>
      
      {ekip.map((ekip,id)=> {
        /*Api 'den gelen datanın içindeki veriyi açıyorum Kullanıcıya göstermek için map metodu ile DOM'da gösteriyorum*/
         const { first_name, last_name, email, avatar } = ekip;
        return ( <Col
          key={id}
          xs={12}
          md={6}
          lg={4}
        
        >
          <Image className={EkipStyle["Image"]} src={avatar} alt="img" />
          <h6>
            {first_name} {last_name}
          </h6>
          <p>
            {email} 
          </p>
        </Col>)
      })}
      
      
      </div>
      <h3 className='"text-center text-danger mt-2'>Ekip Üyelerimiz Sana Hoşgeldin Bakışı Yapıyor:)</h3>
      </Container>
    
  )
}

export default Ekip