import React, { useContext} from "react";
import MainAuthContext from "../../context/MainAuthContext";
import { useNavigate } from "react-router-dom";

let cleartime = null;
const AuthRoute = ({ children }) => {

    const {isUserLogged} = useContext(MainAuthContext)
    const navigate = useNavigate();
  if (isUserLogged) {
    clearTimeout(cleartime)
    return children;
  } else {
    cleartime = setTimeout(() => {
        console.log("go to log in");
        navigate("/login");
      }, 3000);
    return <h1>Not Authorise</h1>;
  }
};

export default AuthRoute;
