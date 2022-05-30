import React, { createContext, useContext, useState } from "react";
import image1 from "../imgs/collage.avif"
import minons from "../imgs/minions-wallpaper.avif"
import "./contex.css"

const general={
    fontFamily: "Appleberry, truetype",
    color: "white",
    backgroundImage: `url(${image1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    overflowY: "scroll",
    overflowX:"hidden",
    top:0,
    bottom:0
    
}
const antoni={
    fontFamily: "Appleberry, truetype",
    color: "blue",
    fontWeight: "bold",
    backgroundImage: `url(${minons})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    height: "100vh",
    overflowY: "scroll",
    overflowX:"hidden",
    top:0,
    bottom:0
}

const ThemeContext = createContext()

export const useTheme = ()=>{
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children})=>{
 const [generalStyle,setGeneralStyle] = useState(general)
 const [antoniStyle, setAntoniStyle] = useState(antoni)
 
 return(
     <ThemeContext.Provider value={{generalStyle, setGeneralStyle, antoniStyle, setAntoniStyle}}>
         {children}
     </ThemeContext.Provider>
 )
}