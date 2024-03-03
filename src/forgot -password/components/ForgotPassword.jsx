import React, { useState } from "react";
import "../style/forgot-password.css";
import { useNavigate } from "react-router-dom";
import InputFilled from "../../components/ui/InputFilled";
import  axios  from "axios";
import { axiosGet, checkWhichUserByEmail } from "../../helper/genral-helper";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmituserEmail = (e) => {
    e.preventDefault();

    const endPoints = checkWhichUserByEmail(email)
    
    axiosGet(endPoints).then((res) => {

    let user = null;

    res.data.map((res) => {
      if (res.email === email) {
        user = res;
      }
    })

    if (user) {
      navigate(`/newpassword/${btoa(user.id)}/${btoa(endPoints)}`);
    } else {
      alert("Please check your email and try again.");
    }

    })
  };

  return (
    <div>
      <div className="">
        <h1>Forgot Password</h1>
        <p>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <form onSubmit={handleSubmituserEmail}>
          <InputFilled
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder=" Enter your Email"
          />

          <InputFilled type="submit" value="Send Link" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
