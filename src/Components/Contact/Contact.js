import React from 'react'
import "./Contact.css"
import { Element } from 'react-scroll';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contact = () => {
    
  return (
    <Element className='contact' id="contact">
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>Email:<span>Jinsjosephkunnummel000@gmail.com</span>
            </p>
            <p>
                Github Username:<span>@jinsjoseph396</span>
            </p>
            <div className='contact__icons'>
                <a href="google.com">
                    <IconButton>
                       <LinkedInIcon/>
                    </IconButton>
                </a>
                <a href="google.com">
                    <IconButton>
                   <FacebookIcon/>
                    </IconButton>
                </a>
                <a href="google.com">
                    <IconButton>
                   <InstagramIcon/>
                    </IconButton>
                </a>

            </div>
        </div>



    </Element>
  )
}

export default Contact
