import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SlHome } from 'react-icons/sl'
import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs'
import { FaTshirt, FaRedhat } from 'react-icons/fa'
import { BsListTask } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { AiOutlineProject } from "react-icons/ai";


// import logo from '@/img/logo.svg'

interface SideBarCompProps {
  show: boolean;
  setter: (val: boolean) => void;
}

const SideBarComp: React.FC<SideBarCompProps> = ({ show, setter }) => {
  const router = useRouter();

  // Define our base class
  const className = "bg-gray-800 w-[300px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0" : " ml-[-300px] md:ml-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass = router.pathname === route ? "text-white" : "text-white/50 hover:text-white";

    return (
      <Link
        href={route}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
          {icon}
        </div>
        <div>{name}</div>
      </Link>
    )
  }

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter(oldVal => !oldVal);
      }}
    />
  )

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="p-2 flex">
          <Link href="/">
            <div className="py-4 px-6 text-white flex items-center justify-between">
              <h2 className="text-xl font-semibold">Dashboard</h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <MenuItem
            name="Home"
            route="/"
            icon={<SlHome />}
          />
          <MenuItem
            name="Profile"
            route="/profile"
            icon={<ImProfile />}
          />
          <MenuItem
            name="Project Tracking"
            route="/projectTracking"
            icon={<AiOutlineProject />}
          />
          <MenuItem
            name="Tasks"
            route="/tasks"
            icon={<BsListTask />}
          />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  )
}

export default SideBarComp