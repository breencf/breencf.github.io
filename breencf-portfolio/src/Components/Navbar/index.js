import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav id="nav">
      <li>
        <NavLink activeClassName="active-nav" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active-nav" to="/resume">Resume</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active-nav" to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active-nav" to="/contact">Contact</NavLink>
      </li>
    </nav>
  );
};
