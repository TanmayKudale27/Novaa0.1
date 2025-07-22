import React, { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className="header fixed-top d-flex align-items-center shadow-sm bg-white">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center text-decoration-none">
          <h1 className="sitename mb-0">Nova</h1>
        </a>

        <nav id="navmenu" className={`navmenu ${menuOpen ? "open" : ""}`}>
          <ul className="nav flex-column flex-xl-row gap-3 mb-0">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="/portfolio" className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="/team" className="nav-link">Team</a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link">Blog</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Dropdown 1</a></li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">Deep Dropdown</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Deep Dropdown 1</a></li>
                    <li><a className="dropdown-item" href="#">Deep Dropdown 2</a></li>
                    <li><a className="dropdown-item" href="#">Deep Dropdown 3</a></li>
                    <li><a className="dropdown-item" href="#">Deep Dropdown 4</a></li>
                    <li><a className="dropdown-item" href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="#">Dropdown 2</a></li>
                <li><a className="dropdown-item" href="#">Dropdown 3</a></li>
                <li><a className="dropdown-item" href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        <i
          className="mobile-nav-toggle d-xl-none bi bi-list fs-3"
          onClick={toggleMobileMenu}
        ></i>
      </div>
    </header>
  );
};

export default Header;
