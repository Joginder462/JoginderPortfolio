import React from "react";
import "./scss/rightpage.scss";
import project1 from "./img/ggbooking.png";
import project2 from "./img/ggradico.png";
import project3 from "./img/ujf.png";

const Myprojects = () => {
  return (
    <div className="project">
      <h2>visit my project & give your feedback</h2>
      <h4>My project</h4>

      <div className="row mx-auto g-3">
        <div className="col-lg-6 col-md-8 mx-auto">
          <img src={project1} alt="" height={140} />
          <div className="d-flex justify-content-between px-5 py-2">
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

          <p className="px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="col-lg-6 col-md-8 mx-auto">
          <img src={project2} alt="" height={140} />

          <div className="d-flex justify-content-between px-5 py-2">
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

          <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="col-lg-6 col-md-8 mx-auto">
          <img src={project3} alt="" height={140} />

          <div className="d-flex justify-content-between px-5 py-2">
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

          <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
        <div className="col-lg-6 col-md-8 mx-auto">
          <img src={project3} alt="" height={140} />

          <div className="d-flex justify-content-between px-5 py-2">
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

          <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Myprojects;
