import { useState } from "react";
import { createContext } from "react";


// Login Context oluşturdum
export const LoginContext = createContext();

// Kullanacağım global stateleri tanımladım.
const LoginProvider = ({ children }) => {

  // Kullanıcı bilgilerini tutan state
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    city: "",
    email: "",
    password: "",
  });

  // Kullanıcının Login Bilgisini Tutan State
  const [login ,setLogin] = useState(false)
  
  //  Göndereceğim değişkenleri values e aktardım.
  const values = { user,setUser,login,setLogin};
  return (
    /* Değişkenleri Kullanacağım yerlerde göndermek için value propertisini kullandım. Sarmala yapacağım yerler içinde  children propsunu kullanıyoruz.Bu sayede LoginProvider'ın sarmaladığı her yerde global değişkenlerimizi kullanabileceğiz. */
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;