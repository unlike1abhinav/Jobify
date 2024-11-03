import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <li>Home</li>
      </nav>
      <Outlet/>
    </div>
  )
}

export default HomeLayout
