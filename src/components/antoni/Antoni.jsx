import React,{ useState } from "react";
import { useTheme } from "../contexts/StyleContext";
import { AntoniTable1 } from "../tables/Tables";
import "./antoni.css"

const Antoni = () =>{
const { antoniStyle } = useTheme()

    return(
        <div style={antoniStyle} className="antoniContener">
            <div className="antoniTitle">
                <h2>HELLO ANTONI</h2>
            </div>
            < AntoniTable1 />
        </div>
    )
}

export default Antoni