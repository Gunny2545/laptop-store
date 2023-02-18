import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="container">
        <NavLink className="nav-link" to="/">
          <h3 className="logo">𝙇𝘼𝙋𝙏𝙊𝙋 | 𝙎𝙏𝙊𝙍𝙀™</h3>
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink className="nav-link" to="/">
              𝗛𝗢𝗠𝗘
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
              𝗣𝗥𝗢𝗗𝗨𝗖𝗧
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="productDropdownId">
              <li>
                <NavLink className="dropdown-item" to="/product">
                  ▸ 𝗟𝗔𝗣𝗧𝗢𝗣
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/mouse">
                  ▸ 𝗠𝗢𝗨𝗦𝗘
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              𝗖𝗢𝗡𝗧𝗔𝗖𝗧
            </NavLink>
          </li>
          <div className="login">
            <li>
              <NavLink className="nav-link" to="/login">
                𝗦𝗜𝗚𝗡 𝗜𝗡
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/register">
                𝗦𝗜𝗚𝗡 𝗨𝗣
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
