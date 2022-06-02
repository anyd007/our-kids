import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTheme } from "../../contexts/StyleContext";
import { useBootstrap } from "../../contexts/bootstrapContext";
import "./klementynaVideos.css"


const KlementynaVideos = ()=>{
const { klementynaMedias } = useTheme()
const { breakpoints } = useBootstrap()
console.log(breakpoints);
    return(
        <Container style={klementynaMedias} className="klementynaVideoContainer">
            <Row>
                <h2>DZIEŃ MAMY I TATY ROK 2022<br />WYTĘPY ANTONIEGO</h2>
            </Row>
        </Container>
    )
}

export default KlementynaVideos