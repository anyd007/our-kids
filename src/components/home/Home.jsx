import React, { useEffect, useState } from "react";
import { Loading1 } from "../loading/Loading";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/StyleContext";
import btn1 from "../imgs/kementynaBtn.avif"
import btn2 from "../imgs/antoni-btn.avif"
import "./home.css";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const [loading, setLoading]  = useState(false)
    const history = useNavigate()
  const { generalStyle } = useTheme();
  const handleAntoni=()=>{
    history("/antoni")
  }
  
  return (
<Container style={generalStyle} className="homeContener" fluid="md">
  <div className="title">
      <h1>NASZE KOCHANE SKARBY<br />KLEMENTYNA I ANTONI</h1>
  </div>
  <Row style={{textAlign:"center"}}>
    <Col onClick={()=>history("/klementyna")} className="buttonsDiv" data-hover="WCISNIJ"></Col>
    <Col onClick={()=>handleAntoni()} className="buttonsDiv2" data-hover2="WCISNIJ"></Col>
  </Row>
</Container>
  );
};

export default Home;
