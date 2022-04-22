import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

export const App = () => {
  return (
    <div className="wrapper">
      <div id="top-nav" className="top-nav">
        <nav className="navbar navbar-expand-md navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./assets/logo.png" alt="" width="70px"></img>
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

        <div className="hero">
          <div className="container">
            <div className="row mt-5 py-3">
              {/* <!-- below md take 12 grid --> */}
              <div className="col-md-6 text-center order-md-2">
                <img src="./assets/garry.png" alt="" width="50%"></img>
              </div>

              <div className="col-md-6 pt-5 d-flex flex-column justify-content-evenly">
                <h5>Hi, I am Garry Amasia</h5>
                <h1>Software Engineer | Dented Code</h1>
                <p className="pt-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro, illo dolore dignissimos nostrum ad beatae? Corrupti
                  quae nihil, reiciendis qui temporibus, voluptates id laborum
                  ullam, odio corporis voluptatum facere autem.
                </p>
                {/* <!-- note!text-danger has !important rule --> */}
              </div>

              {/* <!-- text-end is bootstrap className to put everything to the right inside its container --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
