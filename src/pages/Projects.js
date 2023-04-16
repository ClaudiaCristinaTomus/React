import React from 'react'
import classes from "./Projects.module.scss";
const Projects = () => {
  return (
    <section className={classes.projects}>
      <h2 className={classes.projects__title}>Projects</h2>
      <div className={classes.projects__subtitle}>
        <h3 className={classes.projects__subTitle}>Html/CSS/Javascript</h3>
        <h3 className={classes.projects__subTitle}>ReactJs/SCSS</h3>
        <h3 className={classes.projects__subTitle}>ReactNative</h3>
        <div className={classes.line}></div>
        </div>

      <div className={classes.container}>
      <div className={classes.item}>
          <img src="assets/bookmarkWebsite.png" alt="" />
          <h3>Web layout</h3>
        </div>

        <div className={classes.item}>
          <img src="assets/easyBank.png" alt="" />
          <h3>Web layout</h3>
        </div>

        <div className={classes.item}>
          <img src="assets/websitesalon.png" alt="" />
          <h3>Web layout</h3>
        </div>
        <div className={classes.item}>
          <img src="assets/shortly.png" alt="" />
          <h3>Web layout</h3>
        </div>

        <div className={classes.item}>
          <img src="assets/manage.png" alt="" />
          <h3>Web layout</h3>
        </div>
      </div>
  
    </section>
  )
}

export default Projects