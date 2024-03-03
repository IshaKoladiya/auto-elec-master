import React from "react";
import { useNavigate } from "react-router-dom";
const AdminPanal = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>adminpanal</h1>
      <button onClick={() => navigate("/admin/users")}>Users</button>
      <button onClick={() => navigate("/admin/technician")}>Technicians</button>
      <button onClick={() => navigate("/admin/admins")}>admins</button>
  </>
  );
};

export default AdminPanal;
