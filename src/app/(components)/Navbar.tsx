"use client"
import React from "react";
import { FC } from "react";

import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { useState } from "react";
// import logo from '../logo.jpg'
const Navbar:FC = ()=> {
  const  [MenuOpen, setMenuOpen] = useState(false)

  const handleNav = () =>{
    setMenuOpen(!MenuOpen);

  }
    return(
  <>
  
<nav className=" w-full h-24 shadow-xl bg-[#0077b6]  sticky top-0 z-50">
<div className="flex justify-between items-center h-full w-full px-4 mx-auto ">
<div className="">
  <Link href='/'>
{/* <Image src={logo} alt="logo" width={205} height={75}  /> */}
<h1>MARSH Tech</h1>
</Link>
</div>
  <div>
    <ul className="hidden sm:flex gap-4 uppercase">
      <Link href="/">
      <li className="  hover:border-b-[#5fccff] hover:border-b-2 text-white  ">Home</li>
      </Link>
      <Link href="/OurServices">
      <li className="  hover:border-b-[#5fccff] hover:border-b-2 text-white">Services</li>
      </Link>
      
      <Link href="/About us">
      <li className="  hover:border-b-[#9cc3d5ff] hover:border-b-2 text-white">About</li>
      </Link>
      
      <Link href="/Contact us">
      <li className="  hover:border-b-[#9cc3d5ff] hover:border-b-2 text-white">Contact </li>
      </Link>
    </ul>
  </div>

  <div className="hidden sm:flex">
  <button className="text-white px-4 py-2 outline-[#0087c5] rounded " style={{ boxShadow: "inset 0px 10px 20px rgba(0, 135, 200, 1)" }}>Sign up</button>

    <button className="text-white px-4 py-2 outline-[#0087c5] rounded">Login</button>
  </div>
  <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
  <AiOutlineMenu size={25} />
  </div>
</div>

{/* Responsive Navbar */}
<div className={MenuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#9cc3d5ff] p-10 ease-in duration-500 z-50"
: "fixed left-[-100%] top-0 p-10 duration-500 z-50"

}>
  <div className="flex w-full items-center justify-end">
<div onClick={handleNav} className="cursor-pointer">
<AiOutlineClose size={25}/>
</div>
  </div>
  <div>
    <ul className="flex-col p-2 text-sm">
      <Link href="/">
      <li className=" p-4 cursor-pointer">Home</li>
      </Link>
      <Link href="/OurServices">
      <li className=" p-4 cursor-pointer ">Services</li>
      </Link>
      
      <Link href="/About us">
      <li className=" p-4 cursor-pointer ">About us</li>
      </Link>
      
      <Link href="/Contact us">
      <li className="p-4 cursor-pointer  ">Contact us</li>
      </Link>
    </ul>
    <div className="flex flex-row items-center justify-around pt-10">
<Link href={"/"}>
  <AiOutlineInstagram size={20}/>
</Link>
<Link href={"/"}>
  <AiOutlineFacebook size={20}/>
</Link>
<Link href={"/"}>
  <AiOutlineLinkedin size={20}/>
</Link>
<Link href={"/"}>
  <AiOutlineTwitter size={20}/>
</Link>
    </div>
  </div>
</div>
</nav>

  </>
    )
}
export default Navbar;