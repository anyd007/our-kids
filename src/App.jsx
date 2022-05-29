import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Antoni from "./components/antoni/Antoni";
import { GridProvider } from "./components/contexts/GridContext";
import { ThemeProvider } from "./components/contexts/StyleContext";


const App = () =>{

    return(
        <div className="app">
            <div className="content">
                <ThemeProvider>
                <GridProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/antoni" element={<Antoni />} />
                    </Routes>
                </Router>
                </GridProvider>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default App