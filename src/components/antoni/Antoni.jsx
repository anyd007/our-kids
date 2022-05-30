import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/StyleContext";
import { Loading1 } from "../loading/Loading";
import "./antoni.css"

const Antoni = () =>{
const [loading, setLoading] =useState(true)
const { antoniStyle } = useTheme()
const history = useNavigate()
useEffect(()=>{
  setTimeout(() => {
      setLoading(false)
  }, 2500);
})

    return(
        <>
      {loading && <Loading1 />} 
      <div style={antoniStyle} className="antoniContener">
            <div className="antoniTitle">
                <h2>HELLO ANTONI</h2>
            </div>
            <div className="antonichoose">
                <h4 className="title">WYBIERZ PROSZĘ CO CHCESZ ZOBACZYĆ:</h4>
                <div>
                <div className="movies"><h5>OTWÓRZ SWOJE FILMY</h5></div>
                <div className="pictures"><h5>OTWÓRZ SWOJE ZDJĘCIA</h5></div>
                </div>
            </div>
            <div className="btn">
                <button type="button" className="btn antoniExitBtn" onClick={()=>history("/")}>WYJDŹ</button>
            </div>
        </div>
        </>
    )
}

export default Antoni