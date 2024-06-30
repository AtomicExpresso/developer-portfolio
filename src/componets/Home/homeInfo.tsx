import React from 'react'
import ProfileIcon from '../../assets/images/icons/decor/user-solid.svg';
import Image from 'next/image';

function HomeInfo() {

  return (
    <div className="home-info">
      <div className='info-title'>
        <Image src={ProfileIcon} draggable="false" alt="Profile icon"></Image>
        <h1>About Me</h1>
      </div>
      <hr></hr>
      <p>👋 Hello there! I&apos;m Pumped, a dedicated full-stack developer with a love for turning innovative ideas into reality. I mostly work in web development, however im also looking to expanding my skill set into other areas aswell.</p>
      <a href='/about'>
        <button className="btn btn-primary">About Me</button>
      </a>
      <div className="icon-list">
        <img 
          src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" 
          alt="html 5" 
          draggable='false'>
        </img>
        <img 
          src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" 
          alt="css 3" 
          draggable='false'>
        </img>
        <img 
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" 
          alt="javascript" 
          draggable='false'>
        </img>
        <img 
          src="https://img.shields.io/badge/Bootstrap-984aff?style=for-the-badge&logo=bootstrap&logoColor=white" 
          alt="bootstrap" 
          draggable='false'>
        </img>
        <img 
          src="https://img.shields.io/badge/react-black?logo=react&style=for-the-badge" 
          alt="react" 
          draggable='false'>
        </img>
        <img 
          src="https://img.shields.io/badge/Scss-e159ff?style=for-the-badge&logo=sass&logoColor=white" 
          alt="scss" 
          draggable='false'></img>
        <img 
          src="https://img.shields.io/badge/Vite-652afa?style=for-the-badge&logo=vite&logoColor=fcee1e" 
          alt="vite" 
          draggable='false'></img>
        <img 
          src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" 
          alt="Next js" 
          draggable='false'></img>
        <img 
          src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge" 
          alt="Typescript" 
          draggable='false'></img>
        <img 
          src="https://img.shields.io/badge/Webpack-00aeff?style=for-the-badge&logo=webpack&logoColor=white" 
          alt="webpack" 
          draggable='false'></img>
        <img 
          src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" 
          alt='node' 
          draggable="false"></img>
        <img 
          src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" 
          alt='express' 
          draggable="false"></img>
        <img 
          src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" 
          alt='mongodb' 
          draggable="false"></img>
      </div>
    </div>
  )
};

export default HomeInfo