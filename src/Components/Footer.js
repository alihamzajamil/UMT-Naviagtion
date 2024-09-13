import React  from "react";


import logo from "../assets/img/logo.png"
import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
    <img src={logo} alt="logo" height={100} width={100} />

    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Copyright © 2024 UMT Navigator —
      <NavLink to='/' className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">All rights reserved. </NavLink>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <div className="contact-info flex">
            
        </div>
    </span>
  </div>
</footer>
        
        </>
    )
}