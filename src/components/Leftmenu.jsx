import React from "react";
import "./scss/leftmenu.scss";
import logoimg from "../components/img/mypic.jpeg";

const Leftmenu = () => {
  return (
    <>
      <div id="left-menu">
        <div className="logo">
          <img src={logoimg} alt="" height={180} />
        </div>

        <div className="menu">
          <li>
            <a href="#page1">
              <span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/3d-fluency/94/home.png"
                  alt="home"
                />
              </span>
              home
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-portfolio-success-flatart-icons-flat-flatarticons.png"
                  alt="external-portfolio-success-flatart-icons-flat-flatarticons"
                />
              </span>{" "}
              features
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#page2">
              <span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/dusk/64/investment-portfolio.png"
                  alt="investment-portfolio"
                />
              </span>{" "}
              portfolio
            </a>
          </li>
          <li>
            <a href="#page4">
              <span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/dusk/64/contract-job.png"
                  alt="contract-job"
                />
              </span>
              resume
            </a>
          </li>
          <li>
            {" "}
            <a href="#page3">
              <span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-clients-media-agency-flaticons-lineal-color-flat-icons.png"
                  alt="external-clients-media-agency-flaticons-lineal-color-flat-icons"
                />
              </span>{" "}
              clients
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/dusk/64/tags.png"
                  alt="tags"
                />
              </span>{" "}
              pricing
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#Blog">
              <span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/3d-fluency/94/wordpress.png"
                  alt="wordpress"
                />
              </span>{" "}
              blog
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#page5">
              <span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/3d-fluency/94/phone-disconnected.png"
                  alt="phone-disconnected"
                />
              </span>{" "}
              contact
            </a>{" "}
          </li>
        </div>

        <div className="left-menu-social-links">
          <h3>find with me</h3>
          <div className="left-menu-social-links-a">
            <a href="https://www.facebook.com/joginderkumar462" target="_blank" rel="noopener noreferrer"><img width="40" height="40" src="https://img.icons8.com/color/40/facebook-new.png" alt="facebook-new"/></a>

            <a href="https://www.instagram.com/nah_itz_rahul" target="_blank" rel="noopener noreferrer"><img width="40" height="40" src="https://img.icons8.com/fluency/40/instagram-new.png" alt="instagram-new"/></a>
            
            <a href="https://www.linkedin.com/in/joginder-kumar-188504215" target="_blank" rel="noopener noreferrer"><img width="40" height="40" src="https://img.icons8.com/fluency/40/linkedin.png" alt="linkedin"/></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftmenu;
