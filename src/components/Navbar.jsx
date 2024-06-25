import React from 'react';

const Navbar = () => {
  return (
    <div className="container mb-5">
      <nav className="navbar navbar-expand-lg fixed-top text-dark">
        <div className="container">
          <a className="navbar-brand text-dark fw-bold fs-5 badge bg-warning" href="/">
            Portfolio
          </a>
          <button
            className="navbar-toggler text-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><i className="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item navborder">
                <a className="nav-link text-warning fw-bold fs-5" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item navborder">
                <a className="nav-link text-warning fw-bold fs-5" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item navborder">
                <a className="nav-link text-warning fw-bold fs-5" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item navborder">
                <a className="nav-link text-warning fw-bold fs-5" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item navborder">
                <a className="nav-link text-warning fw-bold fs-5" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item navborder">
                <a className="nav-link text-warning fw-bold fs-5" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
