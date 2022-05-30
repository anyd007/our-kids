import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../StyleContext";
import { Loading1 } from "../../loading/Loading";
import "./klementyna.css"

const Klementyna = () =>{
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
        <div style={klemensStyle} className="klemensContener">
        <div className="klemenstitle">
            <h2>WITAJ KLEMENTYNKO</h2>
        </div>
        <div className="klemensChoose">
            <h4>WYBIERZ PROSZĘ CO CHCESZ ZROBIĆ</h4>
            <div>
                <div className="movies"><h5>OTWÓRZ SWOJE FILMY</h5></div>
                <div className="pictures"><h5>OTWÓRZ SWOJE ZDJĘCIA</h5></div>
            </div>
        </div>
        <div className="btn">
                <button type="button" className="btn klemensExitBtn" onClick={()=>history("/")}>WYJDŹ</button>
            </div>
        </div>
        
    </>
)
}
export default Klementyna