import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className={cx("navbar", "navbar-light", "navbar-expand-lg", "static-top")}
    >
      <Link to="/">
        <img src="http://placehold.it/150x50?text=Logo" alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={cx("collapse", "navbar-collapse")} id="navbarResponsive">
        <center>
          <ul className={cx("navbar-nav", "ml-auto")}>
            <li className={cx("nav-item")}>
              <Link to="/" className="nav-link">
                <span data-toggle="collapse" data-target="#navbarResponsive">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">
                <span data-toggle="collapse" data-target="#navbarResponsive">
                  Courses
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <span data-toggle="collapse" data-target="#navbarResponsive">
                  Contact Us
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <span data-toggle="collapse" data-target="#navbarResponsive">
                  About Us
                </span>
              </Link>
            </li>
          </ul>
        </center>
      </div>
    </nav>
  );
};

export default Header;
