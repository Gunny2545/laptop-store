import React from 'react'
import Navbar from '../shared/Navbar';

const MainLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        <div className="container">
            {children}
        </div>
    </>
  )
}

export default MainLayout