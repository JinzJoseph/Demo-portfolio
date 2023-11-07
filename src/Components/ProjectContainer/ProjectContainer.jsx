import React from "react";
import { Element } from "react-scroll";
import Project from '../Project/Project';
import oo from "../../Assets/ii2.jpg";
import './ProjectContainer.css';



const ProjectContainer = () => {
  const projects = [
    {
      img: oo,
      title: "facebook",
      desc: "as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      link: "www.google.com",
    },
    {
      img: "https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg",
      title: "facebook",
      desc: "as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      link: "www.google.com",
    },

    {
      img: "https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg",
      title: "facebook",
      desc: "as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      link: "www.google.com",
    },
    {
      img: "https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg",
      title: "facebook",
      desc: "as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      link: "www.google.com",
    },
    {
      img: "https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg",
      title: "facebook",
      desc: "as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      link: "www.google.com",
    },
    {
      img: "https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg",
      title: "facebook",
      desc: "as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      link: "www.google.com",
    },
  ];


    
    return (
      <Element className="projectcontainer" id="projects">
        <>
          <h1>Projects</h1>
          <p>Here are some projects that I've done to make people's lives easier.</p>
  
          <div className="projectcontainer__projects">
            {projects.map((project, index) => (
              <Project
                key={index}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
            ))}
          </div>
        </>
      </Element>
    );
};

export default ProjectContainer;
