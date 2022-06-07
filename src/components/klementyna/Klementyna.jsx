import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Password2 from "../password/Password2"
import { useTheme } from "../contexts/StyleContext";
import { Loading1 } from "../loading/Loading";
import { AiOutlineCloseSquare} from 'react-icons/ai';
import "./klementyna.css"
import { Col, Container, Row } from "react-bootstrap";

const Klementyna = () =>{
const [password, setPassword] = useState(false)
const history = useNavigate()
const { klemensStyle } = useTheme()
const [loading, setLoading] = useState(true)
useEffect(()=>{
    setTimeout(() => {
        setLoading(false)
    }, 2500);
})


return(
    <>
        {loading && <Loading1 />}
    <Container fluid style={klemensStyle} className="klemensContener">
        {password && <Password2 />}
        <Row className="klemenstitle">
            <h2>WITAJ KLEMENTYNKO</h2>
        </Row>
        <Row className="klemensChoose">
            <h4>WYBIERZ PROSZĘ CO CHCESZ ZROBIĆ</h4>
        </Row>
        <Row style={{textAlign:"center"}}>
                <AiOutlineCloseSquare className="exitIcon" onClick={()=>history("/")} />
        </Row>
        <Row style={{textAlign:"center"}}>
                <Col onClick={()=>setPassword(true)} className="movies"><h5>OTWÓRZ SWOJE FILMY</h5></Col>
                <Col onClick={()=>history("/klementynaPictures")} className="pictures"><h5>OTWÓRZ SWOJE ZDJĘCIA</h5></Col>
        </Row>
       
        
    </Container>
        
    </>
)
}
export default Klementyna