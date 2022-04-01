import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav id="nav">
      <li>
        <NavLink activeClassName="active-nav" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active-nav" exact to="/resume">
          Resume
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active-nav" exact to="/projects">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active-nav" exact to="/contact">
          Contact
        </NavLink>
      </li>
    </nav>
  );
};
