import React from "react";
import "./scss/leftmenu.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h2>Thanks For Visiting</h2>
        </div>
        <div className="footer_social">
        <p>Please Find Me At -</p>
        <a href="https://www.linkedin.com/in/joginder-kumar-188504215" target="_blank" rel="noopener noreferrer">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/fluency/40/linkedin.png"
              alt="linkedin"
            />
          </a>
          
          <a href="https://www.instagram.com/nah_itz_rahul" target="_blank" rel="noopener noreferrer">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/fluency/40/instagram-new.png"
              alt="instagram-new"
            />
          </a>
          <a href="https://www.facebook.com/joginderkumar462" target="_blank" rel="noopener noreferrer">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/40/facebook-new.png"
              alt="facebook-new"
            />
          </a>
          <a href="https://wa.me/918607733399" ><img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/whatsapp.png" alt="whatsapp"/></a>
          <a href="tel:+918607733399"><img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/3d-fluency/94/phone-disconnected.png"
                  alt="phone-disconnected"
                /></a>
          <a href="mailto:rahulrahul462@gmail.com" target="_blank" rel="noopener noreferrer"><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/gmail.png" alt="gmail"/></a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
