import React from 'react'
import Link from 'next/link'
import { FiMenu as Icon } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
// import logo from '@/img/logo.svg'

interface MenuBarMobileProps {
  setter: (val: boolean) => void;
}

const MenuBarMobile: React.FC<MenuBarMobileProps> = ({ setter }) => {
  return (
    <nav className="md:hidden z-20 sticky justify-between top-0 left-0 right-0 h-[60px] bg-gray-800 flex [&>*]:my-auto px-2">
      <Link href="/">
        {/*eslint-disable-next-line*/}
        {/* <img
          // src={logo.src}
          src=''
          alt="Company Logo"
          width={50}
          height={50}
        /> */}
        <div className="py-4 px-6 text-white flex items-center justify-between">
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
      </Link>
      <button
        className="text-4xl flex text-white"
        onClick={() => {
          setter(oldVal => !oldVal);
        }}
      >
        <Icon />
      </button>
      {/* <Link
        className="text-3xl flex text-white"
        href="/login"
      >
        <FaUser />
      </Link> */}
    </nav>
  )
}

export default MenuBarMobile