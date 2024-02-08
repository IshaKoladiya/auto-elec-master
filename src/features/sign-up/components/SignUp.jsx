import React, { useState } from "react";
import "../style/sign-up.css";
import { Link,useNavigate } from "react-router-dom";

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
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name:singnupData.name,
        email:singnupData.email,
        password:singnupData.password,
        id:Date.now()
      }),
    }).then((res) => res.json())
    .then((res) => {
      console.log(res);
      alert("User created successfully");
      navigate("/login");
    });
  };

  

  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmitUser}>
          <label>
           <b>UserName : </b>
            <input
              type="text"
              name="name"
              value={singnupData.name}
              required
              onChange={handleSignUp}
            />
          </label>
          <label>
           <b>Email : </b>
            <input
              type="email"
              name="email"
              value={singnupData.email}
              required
              onChange={handleSignUp}
            />
          </label>
          <label>
           <b>Password : </b>
            <input
              type="password"
              name="password"
              value={singnupData.password}
              required
              onChange={handleSignUp}
            />
          </label>
          <input type="submit" value={"Sign In"} />
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
