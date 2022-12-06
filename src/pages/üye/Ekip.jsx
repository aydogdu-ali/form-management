import React from 'react'
import { useState, useEffect } from "react";

const Uyeler = () => {
  const [user, setUser] = useState("");


  const getUsers = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));

  };

  useEffect(() => {
    getUsers();
  }, []);


  console.log(user);
  const { name, lastName, email, picture } = user;

  return (
    <div><div>
      <h1>
       
        {name?.first} {lastName?.last}
      </h1>
      <img className="rounded-circle" src={picture?.large} alt="img" />
      <p>{email}</p>
      <h5>{}</h5>
      <button className="btn btn-danger" onClick={getUsers}>
      Göster
      </button>
    </div></div>
  )
}

export default Uyeler