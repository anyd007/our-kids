import React,{ useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTheme } from "../../contexts/StyleContext";
import { Loading1 } from "../../loading/Loading";
import ReactPlayer from "react-player/youtube";
import { KlemensMotherDay22 } from "../../apis/KlementynaApi";
import "./klementynaVideos.css"


const KlementynaVideos = ()=>{
const { klementynaMedias } = useTheme()
const [loading, setLoading] = useState(true)
const [klementynaMD22, setKlementynaMD22] = useState(KlemensMotherDay22)
useEffect(()=>{
    setKlementynaMD22(KlemensMotherDay22)
    console.log(klementynaMD22);
    setTimeout(() => {
        setLoading(false)
    }, 2500);
},[])

    return(
        <>
        {loading && <Loading1 />}
        <Container fluid style={klementynaMedias} className="klementynaVideoContainer">
            <Row className="rowTitle" >
                <h2 className="titleKlemensVideo">MATERIAŁY WIDEO kLEMENTYNY</h2>
            </Row>
            <Row className="rowTitle">
                <h4>WYSTĘPY Z OKAZJI DNIA MAMY I TATY 2022 ROK</h4>
            </Row>
            <Row style={{textAlign:"center"}}>
                {klementynaMD22 && klementynaMD22.map(el=>(
            <Col 
            key={el.id} 
            id={el.id} 
            className="klemensbuttons"
            type="klemensbutton">
            <p>{el.button}</p>
            </Col>))}
            </Row>
        </Container>
        </>
    )
}

export default KlementynaVideos