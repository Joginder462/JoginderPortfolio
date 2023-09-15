import React from "react";
import "./scss/rightpage.scss";
import What_i_do from "./What_i_do";
import Myprojects from "./Myprojects";
// import Myresume from "./Myresume";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";

const Rightpage = () => {
  return (
    <div id="content-page">
      {/* page1 start */}
      <div id="page1">
        <div className="page1-text">
          <h1>JOGINDER</h1>
          <h4>I am UI Developer.</h4>

          <button className="btn-53">
            <div className="original">Contact Me</div>
            <div className="letters">
              <span>C</span>
              <span>O</span>
              <span>N</span>
              <span>T</span>
              <span>A</span>
              <span>C</span>
              <span>T</span>
            </div>
          </button>
        </div>
      </div>

      {/* page2 start */}
      <div id="page2">
        <What_i_do />
      </div>

      {/* skills div*/}
      <div>
        <Skills/>
      </div>

      {/* page3 start */}
      <div id="page3">
        <Myprojects />
      </div>

      {/* page4 start */}
      {/* <div id="page4">
        <Myresume/>
      </div> */}
      
      {/* Blog start */}
      {/* <div id="Blog">
        <Blog/>
      </div> */}

      {/* page5 start */}
      <div id="page5">
        <Contact />
      </div>

      {/* footer */}
      <div id="footer">
        <Footer/>
      </div>
    </div>
  );
};

export default Rightpage;
