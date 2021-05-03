import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sakib Uddin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#Services">
                  Sevices
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#Blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#Skills">
                  Skills
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#Portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
