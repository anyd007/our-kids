import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Klementyna from "./components/contexts/klementyna/Klementyna";
import Antoni from "./components/antoni/Antoni";
import { Loading1 } from "./components/loading/Loading";
import { ThemeProvider } from "./components/contexts/StyleContext";


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
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/antoni" element={<Antoni />} />
                        <Route path="/klementyna" element={<Klementyna />} />
                    </Routes>
                </Router>
                </ThemeProvider>
            </div>
        </div>
        </>
    )
}

export default App