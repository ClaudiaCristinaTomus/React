import React from 'react'
import classes from "./Projects.module.scss";
import project1 from "../assets/bookmarkWebsite.png"
import project2 from  "../assets/easyBank.png"
import project3 from  "../assets/websitesalon.png"
import project4 from "../assets/shortly.png"
import project5 from "../assets/manage.png"

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
      <a href="https://claudiacristinatomus.github.io/bookmarkPage/" target="_blank" rel="noreferrer">
        <img src={project1} alt="example" />
      </a>
        </div>

        <div className={classes.item}>
        <a href="https://claudiacristinatomus.github.io/websiteReactJSSCSS/" target="_blank" rel="noreferrer">
        <img src={project2} alt="example" /></a>
     
        </div>

        <div className={classes.item}>
        <a href="https://claudiacristinatomus.github.io/websiteReactJS/" target="_blank" rel="noreferrer">
        <img src={project3} alt="example" /></a>
     
        </div>
        <div className={classes.item}>
        <a href="https://claudiacristinatomus.github.io/ApiURLReactJsPage/" target="_blank" rel="noreferrer">
        <img src={project4} alt="example" /></a>
      
        </div>

        <div className={classes.item}>
        <a href="https://claudiacristinatomus.github.io/managePageReactJs/" target="_blank" rel="noreferrer">
        <img src={project5} alt="example" /></a>
         
        </div>
      </div>
  
    </section>
  )
}

export default Projects