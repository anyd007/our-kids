import React from "react";
import { useTheme } from "../contexts/StyleContext";
import { GridOne } from "../gridLayouts/GridLayouts";
import "./home.css";

const Home = () => {
  const { generalStyle } = useTheme();
  console.log(generalStyle);
  return (
    <div style={generalStyle} className="homeContener">
    <div className="title">
      <h1>NASZE KOCHANE SKARBY<br />KLEMENTYNA I ANTONI</h1>
     </div>
      {/* <GridOne /> */}
    </div>
  );
};

export default Home;
