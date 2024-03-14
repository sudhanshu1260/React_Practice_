import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // <header>
    //   <a href="#">Logo</a>
    //   <nav>
    //     <ul>
    //       <li>
    //         <NavLink to="/">Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/about">About</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/contact">Contact</NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    <nav class="navbar">
      <a href="#" class="nav-logo">
        Attica🍁
      </a>
      <ul class="nav-menu">
        <li class="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>

        <li class="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>

        <li class="nav-item">
          <NavLink to="/service">Services</NavLink>
        </li>

        <li class="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
