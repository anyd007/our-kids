import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MotherDay22 } from "../apis/AntoniApi";
import ReactPlayer from 'react-player/youtube'
import { useTheme } from "../contexts/StyleContext";
import { Loading2 } from "../loading/Loading";
import "./antoniVideo.css"

const AntoniVideos = () =>{
const { antoniMedias } = useTheme()
const [loading, setLoading] = useState(true)
const [getMotherDay22, setGetMotherDay22] = useState(MotherDay22)
useEffect(()=>{
    setGetMotherDay22(MotherDay22)
},[])
const history = useNavigate()


    return(
        <>
      {loading && <Loading2 />}
    <div style={antoniMedias} className="antoniMediaContener">
        <div>
            <h2>DZIEŃ MAMY I TATY ROK 2022<br />WYTĘPY ANTONIEGO</h2>
        </div>
        <div className="antoniVideoContener">
       {getMotherDay22.map(el=>(<ReactPlayer 
       key={el.id}
       className="reactPlayer" 
       url={el.link} 
       controls
       height={el.height}
       width={el.with}
       onReady={()=>setLoading(false)}
       >    
       </ReactPlayer>))}
        </div>
        <div>
            <button type="button" className="btn antoniExitVideo" onClick={()=>history("/antoni")}>WYJDŹ</button>
        </div>
    </div>
        </>
    )
}
export default AntoniVideos