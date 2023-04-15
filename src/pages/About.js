import React from 'react'
import classes from "./About.module.scss";
import {FaLinkedinIn ,FaGithub} from "react-icons/fa";

function About() {
  return (

    <div className={classes.intro}>

      <div className={classes.left}>
        <div className={classes.wrapper}>
          <h2>Hi , I'm</h2>
          <h1>Claudia Cristina </h1>
          <h1>Tomus</h1>
          <div className={classes.icons}>
          <FaLinkedinIn/>
          <FaGithub/>
          </div>
          

        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.imgContainer}>
          <img src="assets/image.JPG" alt="" />
        </div>
      </div>


    </div>

  );
}

export default About