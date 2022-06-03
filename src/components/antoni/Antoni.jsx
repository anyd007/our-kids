import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Password from "../password/Password";
import { useTheme } from "../contexts/StyleContext";
import { Loading1 } from "../loading/Loading";
import "./antoni.css"
import { Col, Container, Row } from "react-bootstrap";

const Antoni = () =>{
const [loading, setLoading] =useState(true)
const [showPassword, setShowPassword] = useState(false)
const { antoniStyle } = useTheme()
const history = useNavigate()
useEffect(()=>{
  setTimeout(() => {
      setLoading(false)
  }, 2500);
})

    return(
        <>
      {loading && <Loading1 />} 
      {showPassword && <Password />}
      <Container fluid style={antoniStyle} className="antoniContener">
            <Row className="antoniTitle">
                <h2>HELLO ANTONI</h2>
            </Row>
                <Row className="antonichoose">
                <h4 className="title">WYBIERZ PROSZĘ CO CHCESZ ZOBACZYĆ:</h4>
                </Row>
                <Row className="antoniExitBtnDiv">
                    <Col><button type="button" className="btn antoniExitBtn" onClick={()=>history("/")}>WYJDŹ</button></Col>
                </Row>
                <Row className="AntoniMediaBtns">
                    <Col onClick={()=>setShowPassword(true)} className="movies"><h5>OTWÓRZ SWOJE FILMY</h5></Col>
                    <Col className="pictures"><h5>OTWÓRZ SWOJE ZDJĘCIA</h5></Col>
                </Row>
        </Container>
        </>
    )
}

export default Antoni