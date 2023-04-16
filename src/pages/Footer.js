import React from 'react'
import classes from "./Footer.module.scss";
import {FaLinkedinIn ,FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <FaLinkedinIn className={classes.icon} />
      <FaGithub className={classes.icon} />
    </div>
  )
}

export default Footer