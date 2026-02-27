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
          <a
            href="https://drive.google.com/file/d/12Xr2wAkIOFVkpWFOLp_qYdl5iasXTuxi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
