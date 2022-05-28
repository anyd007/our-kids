import React from "react";
import { useGrid } from "../contexts/GridContext";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import btn1 from "../imgs/kementynaBtn.avif"
import "./gridLayouts.css"

export const GridOne = () =>{
    const { gridLayout, gridBreakpoints, gridCols } = useGrid();
    return (
      <ResponsiveGridLayout
      className="layout"
      layouts={{lg:gridLayout}}
      breakpoints={gridBreakpoints}
      cols={gridCols}
      rowHeight={300}
       width={1200}
       isDraggable={false}
      // isResizable={false}
      >
        
      {/* <div key="klementynka-btn"><img key="klementynka-btn" src={btn1} alt="klementyka przycisk" /></div> */}
  </ResponsiveGridLayout>
    )
}