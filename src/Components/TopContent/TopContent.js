import React from 'react';
import "./TopContent.css"


const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>Mr vishal Raj</h1>
            <p>A proffesional web and App developer</p>
            <a href="www.google.com">
                <button className='topcontent__downloadbutton'>Download CV</button>
            </a>
            <link to="projects" smooth={true} duration={500}></link>
            <button className='topcontent__workbutton'>My Work</button>
        </div>
      
    </div>
  )
}

export default TopContent
