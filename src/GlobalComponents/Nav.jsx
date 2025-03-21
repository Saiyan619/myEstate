import { UserButton, useUser } from '@clerk/clerk-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  const {user} = useUser()
  return (
    <div className="navbar bg-base-100 ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to={`/${user?.id}`}><a>Dashboard</a></Link></li>
                        <li><Link to="/post-house"><a>Post a House</a></Link></li>
                        <li><Link to="/house"><a>Find More Houses</a></Link></li>
        </ul>
        </div>
        <Link to="/"> <a className="btn btn-ghost text-xl font-bold">MyEstate</a></Link>
     
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link to={`/${user?.id}`} ><a>Dashboard</a></Link></li>
          <li><Link to="/post-house"><a>Post a House</a></Link></li>
          <li><Link to="/house"><a>Find More Houses</a></Link></li>
      </ul>
    </div>
    <div className="navbar-end">
          <div className="w-10 rounded-full">
           <UserButton />
        </div>
    </div>
  </div>
  )
}

export default Nav
