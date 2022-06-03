import React, { createContext, useContext, useState } from "react";
import image1 from "../imgs/collage.avif"
import minons from "../imgs/minions-wallpaper.avif"
import bob from "../imgs/spongebob-wallpaper.avif"
import princess from "../imgs/wp2439373-disney-xd-wallpapers.avif"
import ponny from "../imgs/my-little-ponny-wallpaper.webp"
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
    overflowY: "auto",
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
    overflowY: "auto",
    overflowX:"hidden",
    top:0,
    bottom:0
}
const antoniMedia ={
    fontFamily: "Appleberry, truetype",
    color: "blue",
    fontWeight: "bold",
    backgroundImage: `url(${bob})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    backgroundPosition: "center",
    width: "100vw",
    overflowY: "auto",
    overflowX:"hidden",
    top:0,
    bottom:0
}
const klementyna={
    fontFamily: "MEgalopolis Extra",
    color: "blue",
    fontWeight: "bold",
    backgroundImage: `url(${princess})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    height: "100vh",
    overflowY: "auto",
    overflowX:"hidden",
    top:0,
    bottom:0
}
const klementynaMedia={
    fontFamily: "MEgalopolis Extra",
    color: "blue",
    fontWeight: "bold",
    backgroundImage: `url(${ponny})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    height: "100vh",
    overflowY: "auto",
    overflowX:"hidden",
    top:0,
    bottom:0
}

const ThemeContext = createContext()

export const useTheme = ()=>{
    return useContext(ThemeContext)
}

export const StyleProvider = ({children})=>{
 const [generalStyle,setGeneralStyle] = useState(general)
 const [antoniStyle, setAntoniStyle] = useState(antoni)
 const [antoniMedias, setAntoniMedias] = useState(antoniMedia)
 const [klemensStyle, setKlemensStyle] = useState(klementyna)
 const [klementynaMedias, setKlementynaMedias] = useState(klementynaMedia)
 
 return(
     <ThemeContext.Provider value={{generalStyle, setGeneralStyle, antoniStyle, setAntoniStyle, 
     klemensStyle, setKlemensStyle, antoniMedias, setAntoniMedias, klementynaMedias, setKlementynaMedias}}>
         {children}
     </ThemeContext.Provider>
 )
}