import React from "react";
import "./scss/rightpage.scss";
import project1 from "./img/ggbooking.png";
import project2 from "./img/ggradico.png";
import project3 from "./img/ujf.png";

const Myprojects = () => {
  return (
    <div className="projects">
      <h2>visit my projects & give your feedback</h2>
      <h4>My Projects</h4>

      <div className="projects-boxes">
        <div className="projects-box">
          <img src={project1} alt="" height={140} />
          <div className="df">
            <div>
            <h6>ui development</h6>
            </div>
            <div>
            <span>
              <img
                width="34"
                height="34"
                src="https://img.icons8.com/arcade/64/like.png"
                alt="like"
              />
            </span>
            </div>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="projects-box">
          <img src={project2} alt="" height={140} />

          <div className="df">
            <h6>ui development</h6>
            <span>
              <img
                width="34"
                height="34"
                src="https://img.icons8.com/arcade/64/like.png"
                alt="like"
              />
            </span>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="projects-box">
          <img src={project3} alt="" height={140} />

          <div className="df">
             <h6>ui development</h6>
            <span>
              <img
                width="34"
                height="34"
                src="https://img.icons8.com/arcade/64/like.png"
                alt="like"
              />
            </span>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Myprojects;
