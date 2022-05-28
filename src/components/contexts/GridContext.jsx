import React, { createContext, useContext, useState } from "react";

const layout = [
    { i: "klementynka-btn", x: 0, y: 0, w: 1, h: 1 },
    { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
    { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
    { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
    { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
  ];

const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
const cols={ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }


const GridContext = createContext()

export const useGrid = ()=>{
    return useContext(GridContext)
}

export const GridProvider = ({children}) =>{
    const [gridLayout, setGridLayout] = useState(layout)
    const [gridBreakpoints, setGridBreakpoints] = useState(breakpoints)
    const [gridCols, setGridCols] = useState(cols)

    return(
        <GridContext.Provider value={{ gridLayout, gridBreakpoints, gridCols }}>
            {children}
        </GridContext.Provider>
    )
}