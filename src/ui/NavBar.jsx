import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="navlink">
          <a href="/">home</a>
        </li>
        <li className="navlink">
          <Link to="/about">about</Link>
        </li>
        <li className="navlink">
          <a href="">resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
