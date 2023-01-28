import React from 'react'
import { Link } from 'react-router-dom';
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <p>Copyright ©2023 All rights reserved | This template is made with  by </p>
      <Link to={"/"}>Colorlib
</Link>
    </footer>
  )
}

export default Footer