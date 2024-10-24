'use client'
import React, {useState} from 'react';
import Link from "next/link";
import Sidebar from "../navebarProject/sidebar";

function Navebar(props) {
    const [showMenu,setMenue] = useState(false)
    const toggleClicked=()=>{
        setMenue(!showMenu)
    }
    return (
        <>
  <nav className={"flex justify-between items-center bg-gray-700 p-4"}>
      <div className={"text-white font-serif text-2xl cursor-pointer"}><Link href={"/"}> Website</Link></div>
      <div className={"flex flex-col sm:hidden "} onClick={toggleClicked}>
      <div className={"text-white text-2xl cursor-pointer w-[25px] h-[3px] bg-white m-1"}></div>
      <div className={"text-white text-2xl cursor-pointer w-[25px] h-[3px] bg-white m-1"}></div>
      <div className={"text-white text-2xl cursor-pointer w-[25px] h-[3px] bg-white m-1"}></div>
      </div>
      <ul className={`flex p-4 gap-4 ${showMenu?"sm:hidden":"flex md:flex-row sm:flex-col items-center bg-gray-700 p-4 absolute top-[60px] right-0 w-full"} `} >
          <li className={"relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}><Link href={"/"}>Home</Link></li>
          <li className={"relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}><Link href={"/components/navebarProject/pages/about"}>About</Link></li>
          <li className={"relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}><Link href={"/components/navebarProject/pages/services"}>Services</Link></li>
          <li className={"relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}><Link href={"/components/navebarProject/pages/contact"}>Contact</Link></li>
      </ul>
  </nav>

        </>
    );
}

export default Navebar;