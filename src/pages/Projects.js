import React from 'react'
import classes from "./Projects.module.scss";
const Projects = () => {
  return (
    <section className={classes.projects}>
      <h2 className={classes.projects__title}>Projects</h2>
      <div className={classes.project__subtitle}>
        <h3 className={classes.project__subTitle}>Html/CSS/Javascript</h3>
        <h3 className={classes.project__subTitle}>ReactJs/SCSS</h3>
      </div>
    </section>
  )
}

export default Projects