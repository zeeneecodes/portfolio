import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="navlink">
          <a href="/">home</a>
        </li>
        <li className="navlink">
          <a href="/about">about</a>
        </li>
        <li className="navlink">
          <a href="/about">resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
