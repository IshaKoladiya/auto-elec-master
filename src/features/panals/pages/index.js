import { lazy } from "react"

const AdminPanal = lazy(()=>import('../components/AdminPanal'));
const TechnicianPanal = lazy(()=>import('../components/TechnicianPanal'));
const UserPanal = lazy(()=>import('../components/UserPanal'));

export{AdminPanal, TechnicianPanal, UserPanal};