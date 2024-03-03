import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import "../style/home.css"
import MainAuthContext from "../../../context/MainAuthContext";
import { AdminPanal, TechnicianPanal, UserPanal } from "../../panals/pages";

const Home = () => {
  // const navigate = useNavigate();

  const panals = {
    admins : <AdminPanal/>,
    technicians :<TechnicianPanal/>,
    users : <UserPanal/>

  }


  const {handleIsLogin} = useContext(MainAuthContext);
  // const panalsEndPoints = localStorage.getItem('panalsEndPoints');
  // const converted = atob(JSON.parse(panalsEndPoints));
  // console.log(converted)




  return (
    <>
      <div className="containerHome">
        <h1>Wel-Come to Home page....!</h1>
        {/* {panals[converted]} */}
        <button onClick={()=>handleIsLogin(false)}>Log Out</button>
      </div>
    </>
  );
};

export default Home;
