import React, { createContext, useContext, useState } from "react";
import image1 from "../imgs/collage.avif"

const general={
    fontFamily: "Luckiest Guy",
    color: "white",
    fontWeight: "bold",
    backgroundImage: `url(${image1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    height: "100vh",
    
}

const ThemeContext = createContext()

export const useTheme = ()=>{
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children})=>{
 const [generalStyle,setGeneralStyle] = useState(general)

 return(
     <ThemeContext.Provider value={{generalStyle, setGeneralStyle}}>
         {children}
     </ThemeContext.Provider>
 )
}