import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../style/home.css"
import MainAuthContext from "../../../context/MainAuthContext";

const Home = () => {
  const navigate = useNavigate();

  const {handleIsLogin} = useContext(MainAuthContext)

  return (
    <>
      <div className="containerHome">
        <h1>Wel-Come to Home page....!</h1>
        <button onClick={()=>handleIsLogin(false)}>Log Out</button>
      </div>
    </>
  );
};

export default Home;
