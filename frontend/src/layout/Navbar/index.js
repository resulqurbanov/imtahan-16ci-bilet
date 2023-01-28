import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Navbar() {
  return (
    <nav>
      <img src="https://preview.colorlib.com/theme/busicol/img/logo.png" alt=""></img>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/pages'>Pages</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/add'>ADD</Link>
        </li>
      </ul>
      <div>
        <i class="fa-solid fa-magnifying-glass"></i>

        <button>Get a Quote</button>
      </div>
    </nav>
  );
}

export default Navbar;
