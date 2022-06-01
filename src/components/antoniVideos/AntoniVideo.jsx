import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MotherDay22 } from "../apis/AntoniApi";
import ReactPlayer from "react-player/youtube";
import { useTheme } from "../contexts/StyleContext";
import { Loading2 } from "../loading/Loading";
import { AiOutlineCloseCircle} from 'react-icons/ai';
import "./antoniVideo.css";

const AntoniVideos = (props) => {
  const { antoniMedias } = useTheme();
  const [loading, setLoading] = useState(false);
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
    setLoading(true)
  };
  const handleCloseVideo = () =>{
      setShowVideo(false)
  }

  return (
    <>
      <div style={antoniMedias} className="antoniMediaContener">
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
        {loading && <Loading2 />}
        <div className="antoniVideoContener">
          {showVideo && (
        <span className="wrapper">
        <AiOutlineCloseCircle onClick={handleCloseVideo} className="closeBtn closeVideo"/>
            <ReactPlayer
                id={videos[0].id}
                key={videos[0].id}
                className="reactPlayer"
                url={videos[0].link}
                controls
                height={videos[0].height}
                width={videos[0].width}
                onReady={() => setLoading(false)}
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
