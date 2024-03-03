import { useEffect, useState } from "react";
import MainAuthContext from "./MainAuthContext";

const AuthContext = ({ children }) => {
const [isUserLogged, setIsUserLogged] = useState(false);

useEffect(() => {
    const userlogin = localStorage.getItem("userLogged");

    setIsUserLogged(JSON.parse(userlogin));
  }, []);

const handleIsLogin = (value) => {
    setIsUserLogged(value);
    // localStorage.setItem("isUserLogged", value);
  };

  return (
    <MainAuthContext.Provider value={{isUserLogged , handleIsLogin}}>{children}</MainAuthContext.Provider>
  );
};

export default AuthContext;
