import React from 'react';
import { Link } from 'react-scroll';
import './home-page.scss';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import resume from '../assets/resume.pdf'

export default function HomePage(){
   return ( <div class = "home-page">
       <div class = "profile-image"></div>
       <Typed
            strings={['Hi! ^200 I am Arsen']}
            typeSpeed={60}
        />
       <p>A curious computer tinkerer with passion for everything that makes the gray matter work</p>
       <button class = "view-work-button"><Link smooth={true} duration = {500} to = "about-me">More About Me ⇓</Link></button>
       <button class = "resume-button"><a href = {resume} target = "_blank">Resume</a></button>
    </div>)
}