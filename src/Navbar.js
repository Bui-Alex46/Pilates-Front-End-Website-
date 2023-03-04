import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "./styles.css";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <Link to="/Home" className="Pilates-Header">
        <span className="Pilates-Header-text">AK Pilates</span>
      </Link>

      <div className="nav-links-wrapper">
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <CustomLink to="/Home"> Home </CustomLink>
          <CustomLink to="/about"> About </CustomLink>
          <CustomLink to="/Register"> Register </CustomLink>
        </ul>
        <button
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          style={{ marginLeft: "auto" }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} className="hoverable" {...props}>
        {children}
      </Link>
    </li>
  );
}
