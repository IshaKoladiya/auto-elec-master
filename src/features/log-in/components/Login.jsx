import React, { useContext, useState } from "react";
import "../style/login.css";
import { Link} from "react-router-dom";
import MainAuthContext from "../../../context/MainAuthContext";
import InputFilled from "../../../components/ui/InputFilled";
import { axiosGet, checkWhichUserByEmail } from "../../../helper/genral-helper";

const Login = () => {
  const [emailPassword, setEmailPassword] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailPassword({
      ...emailPassword,
      [e.target.name]: e.target.value,
    });
  };

  // const navigate = useNavigate();

  const { handleIsLogin } = useContext(MainAuthContext);

  const handleSubmitUser = (e) => {
    e.preventDefault();

    const endPoints = checkWhichUserByEmail(emailPassword.email)
    
    axiosGet(endPoints).then((res)=>{
      console.log("axios" , res.data)
      let user = null;
      res.data.find((users) => {
        // console.log("pass",users.email)

        if(users.email === emailPassword.email &&
          atob(users.password) === emailPassword.password){
            user = users
          }
        
      });
      if (user) {
        alert("User login");
        handleIsLogin(true);
        localStorage.setItem("isUserLogged", JSON.stringify(btoa(user.id)));
        localStorage.setItem("panalsEndPoints", JSON.stringify(btoa(endPoints.slice(1))));
        return;
      } else {
        alert("Please check your email and password.");
      }
     
    });
   

    // fetch("http://localhost:5000/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);

    //     const user = data.find((user) => {
    //       // console.log("pass",atob(user.password))
    //       return (
    //         user.email === emailPassword.email &&
    //         atob(user.password) === emailPassword.password
    //       );
    //     });
    //     if (user) {
    //       alert("User login");
    //       handleIsLogin(true);
    //       localStorage.setItem("isUserLogged", JSON.stringify(btoa(user.id)));
    //       navigate("/");
    //       return;
    //     } else {
    //       alert("Please check your email and password.");
    //     }
    //   });
  };

  return (
    <div className="container">
      <h1>Log In</h1>
      <form onSubmit={handleSubmitUser}>
        <label>
          <span>
            <b>Email : </b>
          </span>
          <InputFilled
            name="email"
            type="email"
            placeholder=" Enter your Email"
            value={emailPassword.email}
            onChange={handleLogin}
          />
        </label>
        <label>
          <span>
            <b>Password : </b>
          </span>
          <InputFilled
            name="password"
            type="password"
            value={emailPassword.password}
            placeholder=" Enter your password"
            onChange={handleLogin}
          />
        </label>
        <InputFilled type="submit" value={"Log In"} />
        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
        <div>
        <Link to="/forgotpassword">Forgot Password</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
