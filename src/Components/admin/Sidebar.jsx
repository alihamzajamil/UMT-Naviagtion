// import React from 'react';

// const Sidebar = () => {
//   return (
//     <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
//       <div className="p-6">
//         <a href="/" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
//         <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
//           <i className="fas fa-plus mr-3"></i> New Report
//         </button>
//       </div>
//       <nav className="text-white text-base font-semibold pt-3">
//         <a href="/" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
//           <i className="fas fa-tachometer-alt mr-3"></i>
//           Dashboard
//         </a>
//         <a href="/blank" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
//           <i className="fas fa-sticky-note mr-3"></i>
//           Blank Page
//         </a>
//         <a href="/tables" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
//           <i className="fas fa-table mr-3"></i>
//           Tables
//         </a>
//         <a href="/forms" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
//           <i className="fas fa-align-left mr-3"></i>
//           Forms
//         </a>
//         <a href="/tabs" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
//           <i className="fas fa-tablet-alt mr-3"></i>
//           Tabbed Content
//         </a>
//         <a href="/calendar" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
//           <i className="fas fa-calendar mr-3"></i>
//           Calendar
//         </a>
//       </nav>
//       <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
//         <i className="fas fa-arrow-circle-up mr-3"></i>
//         Upgrade to Pro!
//       </a>
//     </aside>
//   );
// };

// export default Sidebar;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUserPlus, FaLocationArrow, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <h1 className="text-lg font-semibold">Admin Panel</h1>
      </div>
      <nav className="mt-6">
        <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-700">
          <FaTachometerAlt className="mr-2" /> Dashboard
        </Link>
        <Link to="/add-user" className="flex items-center p-2 hover:bg-gray-700">
          <FaUserPlus className="mr-2" /> Add User
        </Link>
        <Link to="/add-location" className="flex items-center p-2 hover:bg-gray-700">
          <FaLocationArrow className="mr-2" /> Add Location
        </Link>
        <Link to="/settings" className="flex items-center p-2 hover:bg-gray-700">
          <FaCog className="mr-2" /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;



