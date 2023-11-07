import React from "react";
import { Element } from "react-scroll";
import "./SkillContainer.css";
import skill from "../../Assets/oo.jpg";
import LinearProgress from "@mui/material/LinearProgress";

const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className="skillcontainer__image">
        <img src={skill} alt="" />
      </div>
      <div className="skillcontainer__text">
        <h2>Skillset</h2>
        <div className="skillcontainer-skillset">
          <h5>React</h5>
          <div className="skillcontainer__slider skillcontainer__slider1 ">
            <LinearProgress variant="determinate" value={20}></LinearProgress>
          </div>
        </div>
        <div className="skillcontainer-skillset">
          <h5>Node js</h5>
          <div className="skillcontainer__slider  skillcontainer__slider2 ">
            <LinearProgress variant="determinate" value={30}></LinearProgress>
          </div>
        </div>
        <div className="skillcontainer-skillset">
          <h5>Java</h5>
          <div className="skillcontainer__slider skillcontainer__slider3 ">
            <LinearProgress variant="determinate" value={40}></LinearProgress>
          </div>
        </div>
        <div className="skillcontainer-skillset">
          <h5>python</h5>
          <div className="skillcontainer__slider  skillcontainer__slider4 ">
            <LinearProgress variant="determinate" value={50}></LinearProgress>
          </div>
        </div>
        <div className="skillcontainer-skillset">
          <h5>DBMS</h5>
          <div className="skillcontainer__slider  skillcontainer__slider5 ">
            <LinearProgress variant="determinate" value={60}></LinearProgress>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
