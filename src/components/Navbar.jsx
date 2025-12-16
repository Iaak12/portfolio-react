import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import React from 'react'

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6 '>
        <div className="flex flex-shrink-0 items-center">
            {/* <img className="mx-2 w-10" src={logo} alt="logo"></img> */}
            <h1 className="mx-2 w-10 text-3xl">Ak</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/ayaz-khan-11a971229/"><FaLinkedin/></a>
           <a href="https://github.com/Iaak12"><FaGithub/></a> 
           <a href="https://www.instagram.com/iayaz12/"> <FaInstagram/></a>
           <a href="https://x.com/i/flow/login?redirect_after_login=%2FAyazKhan_12"> <FaSquareXTwitter/></a>

        </div>
  </nav>
}

export default Navbar