import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Klementyna from "./components/klementyna/Klementyna";
import KlementynaVideos from "./components/klementyna/klementynaVideos/KlementynaVideos";
import KlementynaPictures from "./components/klementyna/klementynaPictures/KlementynaPictures";
import Antoni from "./components/antoni/Antoni";
import AntoniVideos from "./components/antoniVideos/AntoniVideo";
import { Loading1 } from "./components/loading/Loading";
import { StyleProvider } from "./components/contexts/StyleContext";
import ThemeProvider from "react-bootstrap/ThemeProvider"


const App = () =>{
const [loading, setLoading] = useState(true)
useEffect(()=>{
    setTimeout(() => {
        setLoading(false)
    }, 3000);
},[])
    return(
        <>
        {loading && <Loading1 />}
        <div className="app">
            <div className="content">
                <StyleProvider>
                    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/antoni" element={<Antoni />} />
                        <Route path="/antoniVideos" element={<AntoniVideos />} />
                        <Route path="/klementyna" element={<Klementyna />} />
                        <Route path="/kelmentynaVideos" element={<KlementynaVideos />} />
                        <Route path="/klementynaPictures" element ={<KlementynaPictures />} />
                    </Routes>
                </Router>
                </ThemeProvider>
                </StyleProvider>
            </div>
        </div>
        </>
    )
}

export default App