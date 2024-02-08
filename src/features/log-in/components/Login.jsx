import React, { useContext, useState } from "react";
import "../style/login.css";
import { Link , useNavigate  } from "react-router-dom";
import MainAuthContext from "../../../context/MainAuthContext";

const Login = () => {
const [emailPassword, setEmailPassword] = useState({email:"" , password:""});

const handleLogin = (e) => {
    e.preventDefault();
    setEmailPassword({
        ...emailPassword,[e.target.name]:e.target.value
    })
}

const navigate = useNavigate()

const { handleIsLogin } = useContext(MainAuthContext);

const handleSubmitUser = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/users').then((res)=> res.json()).then((data) => {
        console.log(data)

         const user = data.find((user) => {
          return user.email === emailPassword.email && user.password === emailPassword.password;
        });

        if (user) {
            alert("User login");
            handleIsLogin(true);
            navigate('/')
            return;
          } else {
            alert("Please check your email and password.");
          }
    })

}

  return (
    <div className="container">
      <h1>Log In</h1>
      <form onSubmit={handleSubmitUser}>
        <label>
         <span style={{marginRight:"10px"}}><b>Email : </b></span>
         <input type="email" name="email" value={emailPassword.email} required onChange={handleLogin}/>
        </label>
        <label>
         <span><b>Password : </b></span>
         <input type="password" name="password" value={emailPassword.password} required onChange={handleLogin}/>
        </label>
        <input style={{marginBottom:"0px"}} type="submit" value={"Log In"} />
        <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
      </form>
    </div>
  );
};

export default Login;
