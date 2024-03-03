import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { UserPanal } from "../../features/panals/pages";

const UserRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/user" element={<UserPanal />} />
        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </div>
  );
};

export default UserRoute;
