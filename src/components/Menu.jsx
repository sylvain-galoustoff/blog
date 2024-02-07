/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Menu({ menuIsOpen, toggleMenu }) {
  return (
    <div className={menuIsOpen ? "open" : undefined} id="menu">
      <div className={menuIsOpen ? "open" : undefined} id="menu-nav-links">
        <NavLink className={`nav-link`} onClick={toggleMenu} to="/home">
          Home
        </NavLink>
        <NavLink className={`nav-link`} onClick={toggleMenu} to="/demos">
          Démos
        </NavLink>
        <NavLink className={`nav-link`} onClick={toggleMenu} to="/about">
          About
        </NavLink>
        <NavLink className={`nav-link`} onClick={toggleMenu} to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
