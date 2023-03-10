import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="container">
        <NavLink className="nav-link" to="/">
          <h3 className="logo">ππΌππππ | πππππβ’</h3>
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink className="nav-link" to="/">
              ππ’π π
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
              π£π₯π’ππ¨ππ§
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="productDropdownId">
              <li>
                <NavLink className="dropdown-item" to="/product">
                  βΈ πππ£π§π’π£
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/mouse">
                  βΈ π π’π¨π¦π
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              ππ’π‘π§πππ§
            </NavLink>
          </li>
          <div className="login">
            <li>
              <NavLink className="nav-link" to="/login">
                π¦πππ‘ ππ‘
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/register">
                π¦πππ‘ π¨π£
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
