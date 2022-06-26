import React from 'react';
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
             <nav>
        <ul className="nav">
          <li> <NavLink className="nav-link" to="/home">Home</NavLink></li>
          <li> <NavLink className="nav-link" to="/home">Product</NavLink></li>
          <li> <NavLink className="nav-link" to="/home">About</NavLink></li>
          
        </ul>
      </nav>
        </div>
    );
};

export default NavBar;