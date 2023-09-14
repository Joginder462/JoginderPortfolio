import React from "react";
import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/leftmenu.scss";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
// import Myresumemenu from "./Myresumemenu";


const Myresume = () => {
  return (
    <div>
    {/* <Myresumemenu/> */}
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Education} />
          <Route path="/skills" Component={Skills} />
          <Route path="/experience" Component={Experience} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Myresume;