'use client'

import React from "react";
import { useState } from "react";
import Logo from '../../../public/vercel.svg'
import Bars from '../../assets/images/icons/functionalIcon/bars-solid.svg';
import DarkModeDay from '../../assets/images/functional/darkmode-switch-light.svg';
import DarkModeNight from '../../assets/images/functional/darkmode-switch-dark.svg';
import SunBtn from '../../assets/images/functional/sun-button.svg';
import MoonBtn from '../../assets/images/functional/moon-button.svg';
import Image from "next/image";
import Link from "next/link";

// interface NavbarProps {
//   darkModeFn: () => void;
//   stateVar: boolean;
// }

function Navbar() {
  const [openMNav, SetOpenMNav] = useState(false);

  const isMobileNavOpen = () => {
    SetOpenMNav(prevState => !prevState);
  }

  const activeStyle: React.CSSProperties = {
    color: '#0d6efd', // Active color for nav links
  };

  return (
      <div className="nav-bar">
      <div className="nav-row">
        <a href="/" className="nav-title"><Image src={Logo} draggable='false' alt="Navigation logo"></Image></a>
        <a href="/" className="nav-title"><h1>Atomic</h1></a>
      </div>
      <nav className="non-mobile-nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
      <nav className="mobile-navigation">
        <div className="mobile-nav">
          <Image src={Bars} onClick={isMobileNavOpen} alt='Mobile navigation menu'></Image>
          {openMNav && 
            <div className="mobile-nav-menu">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/blog" >Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          }
        </div>
      </nav>
      </div>
    );
}

export default Navbar