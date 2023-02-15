import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <h2>Laptop Store</h2>
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                id="productDropdownId"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/product"
              >
                Product
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="productDropdownId">
                <li>
                  <NavLink className="dropdown-item" to="/product">
                  ▸ Laptop
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/mouse">
                  ▸ Mouse
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="dropdownId"
                data-bs-toggle="dropdown"
              >
                User
              </span>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/login">
                ▸ Login
                </NavLink>
                <NavLink className="dropdown-item" to="/register">
                ▸ Register
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
