import React,{ useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTheme } from "../../contexts/StyleContext";
import ReactPlayer from "react-player/youtube";
import { KlemensMotherDay22 } from "../../apis/KlementynaApi";
import "./klementynaVideos.css"


const KlementynaVideos = ()=>{
const { klementynaMedias } = useTheme()
const [klementynaMD22, setKlementynaMD22] = useState(KlemensMotherDay22)
console.log(klementynaMD22);

    return(
        <Container style={klementynaMedias} className="klementynaVideoContainer">
            <Row className="rowTitle" >
                <h2 className="titleKlemensVideo">MATERIAŁY WIDEO kLEMENTYNY</h2>
            </Row>
            <Row className="rowTitle">
                <h4>WYSTĘPY Z OKAZJI DNIA MAMY I TATY 2022 ROK</h4>
            </Row>
            <Row>
                
            </Row>
        </Container>
    )
}

export default KlementynaVideos