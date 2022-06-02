import React, { useState } from "react";
import ReactLoading from 'react-loading';
import "./loading.css"


export const Loading1 = () =>{
    return(
    <>
    <div className="blur"></div>
     <section className="loading">
    <ReactLoading className="reactLoader" type={"bubbles"} color={"greenyellow"} height={100} width={175} />
    <h4 className="loadingText">ZARAZ ZOBACZYMY CO TUTAJ MAMY...</h4>
    </section>
    </>
    )
}
export const Loading2 = () =>{
    return(
    <>
     <section className="loading2">
    <ReactLoading  className="reactLoader" type={"bubbles"} color={"greenyellow"} height={100} width={175} />
    <h4 className="loadingText">WCZYTUJEMY FILM ANTONIEGO GĘBALI, PROSZĘ CZEKAĆ...</h4>
    </section>
    </>
    )
}
export const Info1 = () =>{
    return(
    <>
     <section className="info1">
    <h4 className="info1Text">TO JUŻ KONIEC FILMU ATONIEGO, ZAMKNIJ ALBO ODTWÓRZ PONOWNIE</h4>
    </section>
    </>
    )
}
export const Info2 = () =>{
    const [buffor, setBuffor] = useState("BUFOROWANIE...CZEKAMY")
    setTimeout(() => {
        setBuffor("BUFFOROWANIE, TRWA DOŚĆ DŁUGO SPRAWDŹ PRĘDKOŚĆ SWOJEGO INTERNETU LUB ZMIEŃ ROZDZIELCZOŚĆ FILMU")
    }, 10000);
    return(
    <>
     <section className="info2">
     <ReactLoading  className="infoLoader2" type={"bubbles"} color={"greenyellow"} height={100} width={175} />
    <h4 className="info1Text">{buffor}</h4>
    </section>
    </>
    )
}