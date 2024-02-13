// components/Layout.tsx

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MenuBarMobile from './MenuBarMobile';
import SideBarComp from './SideBarComp';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [showSidebar, setShowSidebar] = useState(false)

  console.log("isSidebarOpen =", showSidebar)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    // <div className="flex h-screen flex-col sm:flex-row">
    //   <Sidebar isSidebarOpen={isSidebarOpen} />
    //   <div className="bg-gray-800 text-white flex w-full justify-between items-center h-14 sm:hidden sticky top-0 left-0">
    //     <div className="py-4 px-6 flex items-center justify-between">
    //       <h2 className="text-xl font-semibold">Dashboard</h2>
    //     </div>
    //     <div className="flex justify-end px-4">
    //       <button onClick={toggleSidebar}>
    //         <FontAwesomeIcon icon={faBars} className="text-white" />
    //       </button>
    //     </div>
    //   </div>
    //   <div className="flex-1 bg-gray-100 p-4 overflow-auto">
    //     {children}
    //   </div>
    // </div>
    <div className="min-h-full">
      <div className="flex h-screen flex-col md:flex-row">
        <MenuBarMobile setter={setShowSidebar} />
        <SideBarComp show={showSidebar} setter={setShowSidebar} />
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
