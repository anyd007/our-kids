import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
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
        <div className="app">
            <div className="content">
                <ThemeProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={loading ? <Loading1 /> : <Home />} />
                        <Route path="/antoni" element={<Antoni />} />
                    </Routes>
                </Router>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default App