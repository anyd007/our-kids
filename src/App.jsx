import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Klementyna from "./components/klementyna/Klementyna";
import KlementynaVideos from "./components/klementyna/klementynaVideos/KlementynaVideos";
import Antoni from "./components/antoni/Antoni";
import AntoniVideos from "./components/antoniVideos/AntoniVideo";
import { Loading1 } from "./components/loading/Loading";
import { ThemeProvider } from "./components/contexts/StyleContext";
import { BootstrapProvider } from "./components/contexts/bootstrapContext";


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
                <ThemeProvider>
                    <BootstrapProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/antoni" element={<Antoni />} />
                        <Route path="/antoniVideos" element={<AntoniVideos />} />
                        <Route path="/klementyna" element={<Klementyna />} />
                        <Route path="/kelmentynaVideos" element={<KlementynaVideos />} />
                    </Routes>
                </Router>
                </BootstrapProvider>
                </ThemeProvider>
            </div>
        </div>
        </>
    )
}

export default App