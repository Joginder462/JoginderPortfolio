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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores magni vel dignissimos ullam explicabo esse nulla accusantium! Ipsa, doloribus!
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum officia tenetur. Laborum porro perspiciatis repellat repellendus quidem quas eius.</p>
        </div>

        <div className="features-box">
          <img
            width="75"
            height="75"
            src="https://img.icons8.com/external-filled-outline-satawat-anukul/64/external-seomarketing-seo-filled-outline-filled-outline-satawat-anukul-4.png"
            alt="external-seomarketing-seo-filled-outline-filled-outline-satawat-anukul-4"
          />
          <h3>ui/ux designing</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur consectetur facere officia soluta sapiente dicta cupiditate modi ad? Harum.</p>
        </div>
      </div>
    </div>
  );
};

export default What_i_do;
