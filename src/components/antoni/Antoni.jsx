import React from "react";
import { useTheme } from "../contexts/StyleContext";
import "./antoni.css"

const Antoni = () =>{
const { antoniStyle } = useTheme()
    return(
        <div style={antoniStyle} className="antoniContener">
            <div className="antoniTitle">
                <h2>HELLO ANTONI</h2>
            </div>
        </div>
    )
}

export default Antoni