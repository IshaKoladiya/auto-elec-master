// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "../features/home/pages";
// import { Login } from "../features/log-in/pages";
// import { SignUp } from "../features/sign-up/pages";
import AuthRoute from "../utils/auth-route/AuthRoute";
// import { ForgotPassword } from "../forgot -password/pages";
// import { NewPassword } from "../new-password/pages";

const Routers = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <AuthRoute>
    //           <Home />
    //         </AuthRoute>
    //       }
    //     />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<SignUp />} />
    //     <Route path="/forgotpassword" element={<ForgotPassword/>} />
    //     <Route path="/newpassword/:id/:endpoints" element={<NewPassword/>} />
    //     <Route path="*" element={<h1>404 Not found</h1>} />
    //   </Routes>
    // </BrowserRouter>
    <AuthRoute/>
  );
};

export default Routers;
