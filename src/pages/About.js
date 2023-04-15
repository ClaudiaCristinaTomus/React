import React from 'react'
import classes from "./About.module.scss";
import image from "../assets/image.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About = () => {
  return (
    <section className={classes.about}>
      <h2 className={classes.about__title}>Hi , I'm <span className={classes.about__title__name}>Claudia Cristina Tomus</span></h2>
      <div className={classes.about__icons}>
      <FontAwesomeIcon icon={["fab", "github"]} />
      <FontAwesomeIcon icon={["fab", "github"]} />
      </div>
      <img src={image} alt="Logo" className={classes.about__image}/>
    </section>
  )
}

export default About