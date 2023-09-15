import React from "react";
import "./scss/rightpage.scss";

const What_i_do = () => {
  return (
    <div className="features">
      <h2>features</h2>
      <h4>what i do ?</h4>

      <div className="features-boxes">
        <div className="features-box">
          <img
            width="75"
            height="75"
            src="https://img.icons8.com/external-flat-satawat-anukul/75/external-designthinking-design-thinking-flat-flat-satawat-anukul-19.png"
            alt="external-designthinking-design-thinking-flat-flat-satawat-anukul-19"
          />

          <h3>graphic designing</h3>
          <p>
          "Transforming ideas into captivating visuals – my graphic design service brings your vision to life with creativity and precision. Elevate your brand's aesthetics with designs that resonate and inspire."
          </p>
        </div>
        
        <div className="features-box">
          <img
            width="75"
            height="75"
            src="https://img.icons8.com/fluency/48/laptop-coding.png"
            alt="laptop-coding"
          />
          <h3>web development</h3>
          <p>Elevate your digital presence with cutting-edge UI development services that fuse innovation and functionality. Crafted to captivate, our web solutions redefine user experiences.</p>
        </div>

        <div className="features-box">
          <img
            width="75"
            height="75"
            src="https://img.icons8.com/external-filled-outline-satawat-anukul/64/external-seomarketing-seo-filled-outline-filled-outline-satawat-anukul-4.png"
            alt="external-seomarketing-seo-filled-outline-filled-outline-satawat-anukul-4"
          />
          <h3>ui/ux designing</h3>
          <p>
          Elevate your digital presence with meticulously crafted UI/UX designs that captivate and engage your audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default What_i_do;
