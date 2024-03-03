import React from 'react'
import { Navigate, Routes, Route } from "react-router-dom";
import { TechnicianPanal } from '../../features/panals/pages';
const TechnicianRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="/techinican"/>} />
      <Route path="/techinican" element={<TechnicianPanal/>} />
      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
    </div>
  )
}

export default TechnicianRoute
