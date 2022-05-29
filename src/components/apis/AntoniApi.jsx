import React, { useRef } from "react";
import ReactPlayer from 'react-player/youtube'
import "./apis.css"

const handleFullscreen = () =>{
 document.querySelector(".player").requestFullscreen()
}


export const MotherDay22 =[
    {
        id:"id-1",
        link:<ReactPlayer controls 
        height="200px" 
        width="300px" 
        url='https://youtu.be/sJe1bxhG7lk' 
        onStart={handleFullscreen}
        className="player"/>,
        alt:'',
        description:'video 1',
        button:<button className="btn">video 1</button>
    }
]
