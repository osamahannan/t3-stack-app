import React, { useState } from 'react';
import MenuBarMobile from './MenuBarMobile';
import SideBar from './SideBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSideBar = () => {
    setShowSidebar(prev => !prev)
  }

  return (
    <div className="min-h-full">
      <div className="flex h-screen flex-col md:flex-row">
        <MenuBarMobile setter={toggleSideBar} />
        <SideBar show={showSidebar} setter={toggleSideBar} />
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
