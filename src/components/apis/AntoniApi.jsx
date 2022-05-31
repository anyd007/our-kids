import React, { useRef } from "react";
import ReactPlayer from 'react-player/youtube'
import "./apis.css"

const handleFullscreen = () =>{
 document.querySelector(".player").requestFullscreen()
}


export const MotherDay22 =[
    {
        id:"id-1",
        link:process.env.REACT_APP_ANTONI_VIDEO1,
        alt:'',
        description:'video 1',
        with:"250px",
        height: "150px"
     
    },
    {
        id:"id-2",
        link:process.env.REACT_APP_ANTONI_VIDEO2,
        alt:"",
        description: "video-2",
        with:"250px",
        height: "150px"
    },
    {
        id:"id-3",
        link:process.env.REACT_APP_ANTONI_VIDEO3,
        alt:"",
        description: "video-2",
        with:"250px",
        height: "150px"
    },
    {
        id:"id-4",
        link:process.env.REACT_APP_ANTONI_VIDEO4,
        alt:"",
        description: "video-2",
        with:"250px",
        height: "150px"
    }
]

