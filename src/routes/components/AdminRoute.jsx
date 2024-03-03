import React from 'react';
import {Routes, Route , Navigate } from "react-router-dom";
import { AdminPanal } from '../../features/panals/pages';
import { AdminUsers } from '../../features/admin-user/pages';

const AdminRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<AdminPanal/>} />
      <Route path="/admin/users" element={<AdminUsers relation={'users'}/>} />
      <Route path="/admin/technician" element={<AdminUsers relation={'technician'}/>} />
      <Route path="/admin/admins" element={<AdminUsers relation={'admins'}/>} />
      <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </div>
  )
}

export default AdminRoute
