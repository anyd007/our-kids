import React, { useState } from "react";
import { MotherDay22 } from "../apis/AntoniApi";
import "./table.css"


export const AntoniTable1 = ()=>{
const [getMotherDay22, setGetMotherDay22] = useState(MotherDay22)
console.log(getMotherDay22.map(el=>el.description));

return(
    <div className="getMotherDay22Table">
        <div className="title">
            <h2 className="h2title">OTO FILMY Z WYSTEPU ANTONIEGO GĘBALI<br />Z OKAZJI DNIA MAMY I TATY W ROKU 2022</h2>
        </div>
        {getMotherDay22 && getMotherDay22.map(el=>(
        <div key={el.id} className="mainContener">
         <h4 key={el.id}>{el.description}</h4><br />
         <div>{el.link}</div>
         </div>
        ))}
         
    </div>
)
}