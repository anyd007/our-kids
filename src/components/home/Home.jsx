import React, { useEffect, useState } from "react";
import { Loading1 } from "../loading/Loading";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/StyleContext";
import btn1 from "../imgs/kementynaBtn.avif"
import btn2 from "../imgs/antoni-btn.avif"
import "./home.css";

const Home = () => {
  const [loading, setLoading]  = useState(false)
    const history = useNavigate()
  const { generalStyle } = useTheme();
  const handleAntoni=()=>{
    history("/antoni")
    console.log(process.env.REACT_APP_PASSWORD);
  }
  
  return (
<div style={generalStyle} className="homeContener">
  <div className="title">
      <h1>NASZE KOCHANE SKARBY<br />KLEMENTYNA I ANTONI</h1>
  </div>
  <button onClick={()=>history("/klementyna")} className="buttonsDiv" data-hover="WCISNIJ">
      <img className="klementynaBtn" src={btn1} alt="klementyka przycisk" />
      <div className="img-text">TUTAJ</div>
    </button>
  <button onClick={()=>handleAntoni()} className="buttonsDiv2" data-hover2="WCISNIJ">
      <img className="antoniBtn" src={btn2} alt="antoni przycisk" />
      <div className="img-text2">TUTAJ</div>
  </button>
</div>
  );
};

export default Home;
