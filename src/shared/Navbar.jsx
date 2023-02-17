import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="container">
        <h3 className="logo">𝙇𝘼𝙋𝙏𝙊𝙋 ✯ 𝙎𝙏𝙊𝙍𝙀™</h3>

        <ul className="nav-links">
          <li>
            <NavLink className="nav-link" to="/">
            Home
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
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <div className="login">
          <li> 
            <NavLink className="nav-link" to="/login">
              Sing In
            </NavLink>
          </li>
          <li> 
            <NavLink className="nav-link" to="/register">
              Sing Up
            </NavLink>
          </li>
          </div>
         
        </ul>
      </div>
    </nav>
  )
}

export default Navbar