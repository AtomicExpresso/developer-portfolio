'use client'

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import ScreenWindowWidth from "./ScreenWidth";
import Bars from '../../assets/images/icons/functionalIcon/bars-solid.svg';
import SunBtn from '../../assets/images/functional/sun-button.svg';
import MoonBtn from '../../assets/images/functional/moon-button.svg';
import Image from "next/image";
import Link from "next/link";

// interface NavbarProps {
//   darkModeFn: () => void;
//   stateVar: boolean;
// }

//Navigation bar, has a dark mode toggle and links to other pages, aswell as a hamburger menu for mobile support
function Navbar() {
  const [openMNav, SetOpenMNav] = useState(false); //For mobile navigation
  const [darkMode, setDarkMode] = useState(false); //Darkmode theme

  const pathname = usePathname();
  const screenWidth = ScreenWindowWidth(700); //Screen-Width cap, check the function file for more details

  //Changes page theme based on darkmode state
  useEffect(() => {
    const root = document.getElementById('root');

    if(darkMode){
      root?.classList.add('night-mode') 
      root?.classList.remove('day-mode')
    } else {
      root?.classList.add('day-mode') 
      root?.classList.remove('night-mode')
    }

  }, [darkMode]);

  const switchTheme = () => {
    setDarkMode(prevState => !prevState)
  }

  const isMobileNavOpen = () => {
    SetOpenMNav(prevState => !prevState);
  }

  return (
      <div className="nav-bar">
      <div className="nav-row">
        <a href="/" className="nav-title">{screenWidth ? <h1>Felix</h1> : <h1>Felix</h1>}</a>
      </div>
      <nav className="non-mobile-nav">
        <ul>
          <li>
            <Link style={{color: pathname === '/' ? `#0d6efd` : ''}} href="/">Home</Link>
          </li>
          <li>
            <Link style={{color: pathname === '/projects' ? `#0d6efd` : ''}} href="/projects">Projects</Link>
          </li>
          <li>
            <Link style={{color: pathname === '/blog' ? `#0d6efd` : ''}} href="/blog">Blog</Link>
          </li>
          <li>
            <Link style={{color: pathname === '/contact' ? `#0d6efd` : ''}} href="/contact">Contact</Link>
          </li>
          <li>
            <Link style={{color: pathname === '/about' ? `#0d6efd` : ''}} href="/about">About</Link>
          </li>
          <li>
            <div className="dark-mode-toggle">
              <button onClick={switchTheme}>
                {darkMode ? 
                <div className="dark-mode-nighttime">
                  <Image draggable="false" alt="dark-mode" src={MoonBtn}></Image>
                </div> :
                <div className="dark-mode-daytime">
                  <Image draggable="false" alt="light-mode" src={SunBtn}></Image>
                </div>
                }
              </button>
            </div>
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