import React from 'react'
import BootStrapIcon from '../../assets/images/icons/bars/bootstrap-bar.svg';
import HtmlIcon from '../../assets/images/icons/bars/html-bar.svg';
import CssIcon from '../../assets/images/icons/bars/css-bar.svg';
import JavaScriptIcon from '../../assets/images/icons/bars/javascript-bar.svg';
import ReactIcon from '../../assets/images/icons/bars/react-bar.svg';
import ScssIcon from '../../assets/images/icons/bars/scss-bar.svg';
import ViteIcon from '../../assets/images/icons/bars/vite-bar.svg';
import WebpackIcon from '../../assets/images/icons/bars/webpack-bar.svg';
import ProfileIcon from '../../assets/images/icons/decor/user-solid.svg';
import TauriBar from '../../assets/images/icons/bars/tauri-bar.svg';
import ReactNativeBar from '../../assets/images/icons/bars/reactnative-bar.svg';
import TypescriptBar from '../../assets/images/icons/bars/TypeScript-bar.svg';
import Image from 'next/image';

function HomeInfo() {

  return (
    <div className="home-info">
      <div className='info-title'>
        <Image src={ProfileIcon} draggable="false" alt="Profile icon"></Image>
        <h1>About Me</h1>
      </div>
      <hr></hr>
      <p>👋 Hello there! I'm Atomic, a dedicated front-end developer with a love for turning innovative ideas into reality. I mostly work in web development, however im also looking to expanding my skill set into other areas aswell.</p>
      <a href='/about'><button className="btn btn-primary">About Me</button></a>
      <div className="icon-list">
        <Image src={HtmlIcon} alt="html 5" draggable='false'></Image>
        <Image src={CssIcon} alt="css 3" draggable='false'></Image>
        <Image src={JavaScriptIcon} alt="javascript" draggable='false'></Image>
        <Image src={BootStrapIcon} alt="bootstrap" draggable='false'></Image>
        <Image src={ReactIcon} alt="react" draggable='false'></Image>
        <Image src={ScssIcon} alt="scss" draggable='false'></Image>
        <Image src={ViteIcon} alt="vite" draggable='false'></Image>
        <Image src={ReactNativeBar} alt="React Native" draggable='false'></Image>
        <Image src={TypescriptBar} alt="Typescript" draggable='false'></Image>
        <Image src={TauriBar} alt="Tauri" draggable='false'></Image>
        <Image src={WebpackIcon} alt="webpack" draggable='false'></Image>
      </div>
    </div>
  )
};

export default HomeInfo