import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MotherDay22 } from "../apis/AntoniApi";
import ReactPlayer from "react-player/youtube";
import { useTheme } from "../contexts/StyleContext";
import { Loading2, Loading1, Info1, Info2 } from "../loading/Loading";
import { AiOutlineCloseCircle} from 'react-icons/ai';
import "./antoniVideo.css";

const AntoniVideos = (props) => {
  const { antoniMedias } = useTheme();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false)
  const [getInfo1, setGetInfo1] = useState(false)
  const [gettInfo2, setGetInfo2] = useState(false)
  const [showVideo, setShowVideo] = useState(false);
  const [videos, setVideos] = useState([]);
  const [getMotherDay22, setGetMotherDay22] = useState(MotherDay22);
  useEffect(() => {
    setGetMotherDay22(MotherDay22);
  }, []);
  const history = useNavigate();
  const haldleOpenVideo = (item) => {
    let x = getMotherDay22.filter((video) => video.id === item.id);
    setVideos(x);
    setShowVideo(true);
    setLoading2(true)
  };
  const handleCloseVideo = () =>{
      setShowVideo(false)
      setGetInfo1(false)
  }
  useEffect(()=>{
      setTimeout(() => {
        setLoading(false)
      }, 2500);
  })
  

  return (
    <>
      <div style={antoniMedias} className="antoniMediaContener">
      {loading && <Loading1 />} 
        <div>
          <h2>DZIEŃ MAMY I TATY ROK 2022<br />WYTĘPY ANTONIEGO
          </h2>
        </div>
        <div className="buttosSection">
      {getMotherDay22 &&
        getMotherDay22.map((el) => (
        <div className="buttons"
            onClick={(e) => haldleOpenVideo(e.target)}
            key={el.id}
            id={el.id}
            type="button"><p>{el.button}</p></div>))}
        </div>
        <div className="antoniVideoContener">
          {showVideo && (
        <span className="wrapper">
              <AiOutlineCloseCircle onClick={handleCloseVideo} className="closeBtn closeVideo"/>
            {loading2 && <Loading2 />}
            {getInfo1 && <Info1 />}
            {gettInfo2 && <Info2 />}
            <ReactPlayer
                id={videos[0].id}
                key={videos[0].id}
                className="reactPlayer"
                url={videos[0].link}
                controls
                height={videos[0].height}
                width={videos[0].width}
                loop={false}
                onPlay={()=>setGetInfo1(false)}
                onReady={() => setLoading2(false)}
                onEnded={()=>setGetInfo1(true)}
                onBuffer={()=>setGetInfo2(true)}
                onBufferEnd={()=>setGetInfo2(false)}
              />
        </span>
          )}
        </div>
        <div>
          <button
            type="button"
            className="btn antoniExitVideo"
            onClick={() => history("/antoni")}
            >
            WYJDŹ
          </button>
        </div>
      </div>
    </>
  );
};
export default AntoniVideos;
