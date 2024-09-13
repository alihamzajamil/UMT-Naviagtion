// import React from 'react';

// const AdminPanel = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold">Admin Panel</h1>
//       <p className="mt-4 text-lg">Welcome, Admin! Manage the UMT Navigator platform.</p>
//     </div>
//   );
// };

// export default AdminPanel;

// import React from 'react';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import MainContent from './MainContent';


// function AdminPanel() {
//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <MainContent />
//       </div>
//     </div>
//   );
// }

// export default AdminPanel;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import AddLocation from './AddLocation';
import Settings from './Settings';

function AdminPanel() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/add-location" element={<AddLocation />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Dashboard />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;




