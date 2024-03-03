import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../../features/log-in/pages";
import { SignUp } from "../../features/sign-up/pages";
import { ForgotPassword } from "../../forgot -password/pages";
import { NewPassword } from "../../new-password/pages";

const LoginRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newpassword/:id/:endpoints" element={<NewPassword/>} />
        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </div>
  );
};

export default LoginRoute;
