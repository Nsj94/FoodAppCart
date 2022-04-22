import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CartValueContext } from "../../components/ContextProvider";

function Navbar() {
  const { cart } = useContext(CartValueContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Logo
          </Link>
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  <i className="fa-solid fa-file-lines"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link ">
                  <i className="fa-solid fa-file-lines"></i>
                  Cart [{cart.length}]
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
