import React from 'react';
import {Element} from "react-scroll"
import Experience from '../ExperienceBox/Experience';
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <Element className='experiencecontainer' id='exp'>
        <h1>Experience</h1>
        <div className='experiencecontainer__info'>
      
            <Experience number="+10" title="Client"/>
            <Experience number="+30" title="projects" style={{backgroundColor:"#f64c08"}}/>
            <Experience number="+40" title="years Teaching"/>
            <Experience number="600+" title="students get trained"/>
        </div>

    </Element>
  )
}

export default ExperienceContainer
