import { useContext} from "react";
import MainAuthContext from "../../context/MainAuthContext";
// import { useNavigate } from "react-router-dom";
import UserRoute from "../../routes/components/UserRoute";
import AdminRoute from "../../routes/components/AdminRoute";
import TechnicianRoute from "../../routes/components/TechnicianRoute";
import LoginRoute from "../../routes/components/LoginRoute";

// let cleartime = null;
const AuthRoute = () => {
 const {isUserLogged} = useContext(MainAuthContext)
 const EndPoints = atob(localStorage.getItem("panalsEndPoints") ? JSON.parse(localStorage.getItem("panalsEndPoints")) : "");
    // const navigate = useNavigate();

const switchRoutes = {
  users : <UserRoute/>,
  admins : <AdminRoute/>,
  technician : <TechnicianRoute/>,
  login : <LoginRoute/>,
  "": "404 Not Found "
}

  if (isUserLogged) {
    // clearTimeout(cleartime)
    console.log(EndPoints)
    return switchRoutes[EndPoints];
  } else {
    // cleartime = setTimeout(() => {
    //     navigate("/login");
    //   },3000);
    return switchRoutes["login"];
  }
};

export default AuthRoute;
