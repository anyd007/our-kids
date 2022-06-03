import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useTheme } from "../../contexts/StyleContext";
import { Loading1 } from "../../loading/Loading";
import ReactPlayer from "react-player/youtube";
import { KlemensMotherDay22 } from "../../apis/KlementynaApi";
import { AiOutlineCloseCircle, AiOutlineCloseSquare} from 'react-icons/ai';
import { Loading2, Info1, Info2 } from "../../loading/Loading";
import "./klementynaVideos.css"


const KlementynaVideos = ()=>{
const { klementynaMedias } = useTheme()
const [loading, setLoading] = useState(true)
const [loading2, setLoading2] = useState(false)
const [getInfo1, setGetInfo1] = useState(false)
const [getInfo2, setGetInfo2] = useState(false)
const [showKlemensVideo, setShowKlemensVideo] = useState(false)
const [klemesVideos, setKlemesVideos] = useState([])
const [klementynaMD22, setKlementynaMD22] = useState(KlemensMotherDay22)

const history = useNavigate()
useEffect(()=>{
    setKlementynaMD22(KlemensMotherDay22)
    
    setTimeout(() => {
        setLoading(false)
    }, 2500);
},[])
const handleOpenVideo=(e)=>{
    let x = klementynaMD22.filter(item=>item.id===e.id)
    setKlemesVideos(x)
    setShowKlemensVideo(true)
    setLoading2(true)
    setGetInfo1(false)
}

    return(
        <>
        {loading && <Loading1 />}
 <Container fluid="md" style={klementynaMedias} className="klementynaVideoContainer">
     <Row className="rowTitle" >
        <h2 className="titleKlemensVideo">MATERIAŁY WIDEO KLEMENTYNY</h2>
    </Row>
    <Row style={{textAlign:"center"}}>
        <AiOutlineCloseSquare onClick={()=>history("/klementyna")} className="exitIcon" />
    </Row>
    <Row className="rowTitle">
        <h4>WYSTĘPY Z OKAZJI DNIA MAMY I TATY 2022 ROK</h4>
    </Row>
    <Row style={{textAlign:"center"}}>
        {klementynaMD22 && klementynaMD22.map(el=>(
          <Col 
            onClick={(e)=>handleOpenVideo(e.target)}
            key={el.id} 
            id={el.id} 
            className="klemensbuttons"
            type="klemensbutton">
            <p>{el.button}</p>
          </Col>))}
    </Row>
        {showKlemensVideo && (
    <span className="wrapper">
       <div className="closeDiv"><AiOutlineCloseCircle onClick={()=>setShowKlemensVideo(false)} className="closeKlemensVideo"/></div>
            {loading2 && <Loading2 />}
            {getInfo1 && <Info1 />}
            {getInfo2 && <Info2 />}
            <ReactPlayer
                id={klemesVideos[0].id}
                key={klemesVideos[0].id}
                className="reactPlayer"
                url={klemesVideos[0].link}
                controls
                height={klemesVideos[0].height}
                width={klemesVideos[0].width}
                loop={false}
                onPlay={()=>setGetInfo1(false)}
                onReady={() => setLoading(false)}
                onEnded={()=>setGetInfo1(true)}
                onBuffer={()=>setGetInfo2(true)}
                onBufferEnd={()=>setGetInfo2(false)}
              />
    </span>)}
</Container>
    </>
    )
}

export default KlementynaVideos