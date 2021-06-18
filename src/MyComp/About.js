import React from "react";
import './CSSFiles/about.css';

export const About = () => {
  return (
    <>
      <div className="photoParent">
      <div id="childDiv"> 
       <p>  I am <span> Saif </span></p>
      </div>
    </div>
    <div className="container rounded border border-info py-3 my-3">
      <p id="first_para">
        I am Bachelor, Web Developer, and Learner! Passionate about building
        excellent software that improves the lives of those around me. I
        specialize in creating software for clients ranging from individuals and
        small-businesses all the way to large enterprise corporations. What
        would you do if you had a software expert available at your fingertips?
      </p>
      <ul>
        <li>
          Profesional Skills Result oriented professional with more than 4 years
          of experience in IT industry.
        </li>
        <li>
          Experience in front end development technologies including advanced
          JavaScript (cross-browser and cross-platform compatibility, AJAX),
          HTML, CSS, Angular, React and JavaScript
        </li>
        <li>
          Also have good experioance on angular material, animation and
          visualization effects.
        </li>
      </ul>
    </div>
    <br/>
    </>
  );
};
