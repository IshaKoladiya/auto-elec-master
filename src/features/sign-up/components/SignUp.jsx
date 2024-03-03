import React, { useState } from "react";
import "../style/sign-up.css";
import { Link, useNavigate } from "react-router-dom";
import InputFilled from "../../../components/ui/InputFilled";
import {axiosPost, checkWhichUserByEmail } from "../../../helper/genral-helper";

const SignUp = () => {
  const [singnupData, setSingnupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    setSingnupData({ ...singnupData, [e.target.name]: e.target.value });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();

    const encodedPassword = btoa(singnupData.password);

    const postData = {
      name: singnupData.name,
      email: singnupData.email,
      password: encodedPassword,
      id: Date.now(),
    }

    // if (singnupData.email.includes("@admin.") && singnupData.password.includes("Admin")) {
    //   axiosPost("/admins", postData).then(() => {
    //     alert(`Admin created successfully`);
    //     navigate("/login");
    //   });
    // } else if (singnupData.email.includes("@technician.")) {
    //   axiosPost("/technician", postData).then(() => {
    //     alert(`Technician created successfully`);
    //     navigate("/login");
    //   });
    // } else {
    //   axiosPost("/users", postData).then(() => {
    //     alert(`User created successfully`);
    //     navigate("/login");
    //   });
    // }
    const endPoints = checkWhichUserByEmail(singnupData.email)
    axiosPost(endPoints,postData).then(response => {
    // Handle the successful response
    alert("User created successfully");
    navigate("/");
    console.log('Response:', response.data);
  })

  //   fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: singnupData.name,
  //       email: singnupData.email,
  //       password: encodedPassword,
  //       id: Date.now(),
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       alert("User created successfully");
  //       navigate("/login");
  //     });
  };

  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmitUser}>
          <label>
            <b>UserName : </b>
            <InputFilled
              name="name"
              type="text"
              value={singnupData.name}
              onChange={handleSignUp}
              placeholder=" Enter your name"
            />
          </label>
          <label>
            <b>Email : </b>
            <InputFilled
              name="email"
              type="email"
              value={singnupData.email}
              onChange={handleSignUp}
              placeholder=" Enter your Email"
            />
          </label>
          <label>
            <b>Password : </b>
            <InputFilled
              type="password"
              name="password"
              placeholder=" Enter your password"
              value={singnupData.password}
              onChange={handleSignUp}
            />
          </label>
          <InputFilled type="submit" value={"Sign In"} />
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Log In</Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
