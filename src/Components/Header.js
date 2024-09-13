import React from "react";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header id="nav" className="text-black body-font fixed w-full top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex flex-wrap p-5 items-center">
        {/* Logo */}
        <div className="flex title-font font-medium items-center text-gray-900 w-1/4">
          <a href="/" className="flex items-center">
            <img src={logo} alt="logo" height={80} width={80} />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex flex-wrap items-center justify-center w-1/2">
          <NavLink to='/' className="mx-4 text-black hover:text-gray-900" activeClassName="text-gray-900">Home</NavLink>
          <NavLink to='/navigator' className="mx-4 text-black hover:text-gray-900" activeClassName="text-gray-900">UMT Navigator</NavLink>
          <NavLink to='/about' className="mx-4 text-black hover:text-gray-900" activeClassName="text-gray-900">ABOUT</NavLink>
          <NavLink to='/contact-us' className="mx-4 text-black hover:text-gray-900" activeClassName="text-gray-900">CONTACT US</NavLink>
        
        </nav>

        {/* Sign Up/Login Buttons */}
        <div className="flex flex-wrap items-center justify-end w-1/4">
          <NavLink to='/login' className="mx-2 text-black hover:text-gray-900">Login</NavLink>
          <NavLink to='/signup'>
            <button className="inline-flex  bg-gray-200 border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded text-sm mx-2">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
