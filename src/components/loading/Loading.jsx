import React from "react";
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
    <div className="blur2"></div>
     <section className="loading2">
    <ReactLoading  className="reactLoader" type={"bubbles"} color={"greenyellow"} height={100} width={175} />
    <h4 className="loadingText">WCZYTUJEMY FILM ANTONIEGO GĘBALI, PROSZĘ CZEKAĆ...</h4>
    </section>
    </>
    )
}