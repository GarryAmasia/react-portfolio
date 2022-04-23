import React from "react";
import logo from "../../assets/logo.png";

export const TopNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="70px"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
