import React from 'react'
import {Element} from "react-scroll"
import TopContent from '../TopContent/TopContent'
import "./TopContainer.css";

const TopContainer = () => {
  return (
    <Element  name='about' className='topcontainer'>
       <TopContent/>
    </Element>
  )
}

export default TopContainer
