import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <MainLayout>
        <h2 className="mt-3">Home</h2>
        <hr />
        <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/register" className="btn btn-success">
            Register
          </NavLink>&nbsp;
          <NavLink to="/login" className="btn btn-success">
            Login
          </NavLink>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
