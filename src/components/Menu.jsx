/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Menu({ menuIsOpen }) {
  return (
    <div className={menuIsOpen && "open"} id="menu">
      <div className={menuIsOpen && "open"} id="menu-nav-links">
        <NavLink className={`nav-link`} to="/home">
          Home
        </NavLink>
        <NavLink className={`nav-link`} to="/demos">
          Démos
        </NavLink>
        <NavLink className={`nav-link`} to="/about">
          About
        </NavLink>
        <NavLink className={`nav-link`} to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
