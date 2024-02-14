import React from 'react'
import Link from 'next/link'
import { FiMenu as Icon } from 'react-icons/fi'

interface MenuBarMobileProps {
  setter: () => void;
}

const MenuBarMobile: React.FC<MenuBarMobileProps> = ({ setter }) => {
  return (
    <nav className="md:hidden z-20 sticky justify-between top-0 left-0 right-0 h-[60px] bg-gray-800 flex [&>*]:my-auto px-2">
      <Link href="/">
        <div className="py-4 px-6 text-white flex items-center justify-between">
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
      </Link>
      <button
        className="text-4xl flex text-white"
        onClick={setter}
      >
        <Icon />
      </button>
    </nav>
  )
}

export default MenuBarMobile