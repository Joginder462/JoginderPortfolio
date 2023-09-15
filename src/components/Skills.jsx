import React from "react";
import "./scss/leftmenu.scss";

const Skills = () => {
  return (
    <>
    <div classNameName="blk">
      <div classNameName="skills_div">
      <div classNameName="skill_h2">
          <h2>My Skills Are</h2>
        </div>

      <div className="container text-center">
  <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div className="col text-center fw-bold d-flex align-items-center flex-column">
      <div className="p-3"><img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/html-5--v1.png"
              alt="html-5--v1"
            />
            HTML</div>
    </div>
    <div className="col text-center fw-bold d-flex align-items-center flex-column">
      <div className="p-3"><img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/css3.png"
              alt="css3"
            />
            CSS</div>
    </div>
    <div className="col text-center fw-bold d-flex align-items-center flex-column">
      <div className="p-3"><img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/javascript.png"
              alt="javascript"
            />
            JavaScript</div>
    </div>
    <div className="col text-center fw-bold d-flex align-items-center flex-column">
      <div className="p-3"><img
              width="48"
              height="48"
              src="https://img.icons8.com/color-glass/48/bootstrap.png"
              alt="bootstrap"
            />
            BootStrap</div>
    </div>
    <div className="col text-center fw-bold d-flex align-items-center flex-column">
      <div className="p-3"><img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/sass.png"
              alt="sass"
            />
            SASS/SCSS</div>
    </div>
    <div className="col text-center fw-bold d-flex align-items-center flex-column">
      <div className="p-3"> <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/tailwindcss.png"
              alt="tailwindcss"
            />
            Tailwind CSS</div>
    </div>
    <div className="cocol text-center fw-bold d-flex align-items-center flex-columnl">
      <div className="p-3"><img
              width="48"
              height="48"
              src="https://img.icons8.com/cute-clipart/64/react-native.png"
              alt="react-native"
            />
            React</div>
    </div>
    <div className="col text-center fw-bold d-flex align-items-center flex-column">
      <div className="p-3"> <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/github.png"
              alt="github"
            />
            Git</div>
    </div>
    <div className="col text-center fw-bold d-flex align-items-center flex-column">
      <div className="p-3"><img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/adobe-photoshop--v1.png"
              alt="adobe-photoshop--v1"
            />
            Abdobe Photoshop</div>
    </div>
    {/* <div className="col">
      <div className="p-3">Row column</div>
    </div> */}
  </div>
</div>
      </div>
      </div>
    </>
  );
};

export default Skills;
