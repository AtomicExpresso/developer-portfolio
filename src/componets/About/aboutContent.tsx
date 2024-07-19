import React from 'react';
import AboutIcon from '../../assets/images/icons/decor/user-solid.svg';
import Image from 'next/image';

const Paragraphs = [
  {
    Para: '👋 Hello there! Im Pumped, a dedicated full-stack developer with a love for turning innovative ideas into reality. i am constantly seeking new challenges and opportunities to expand my skills'
  },
  {
    Para: "I'm a university student and I've spent countless hours diving into web development and programming, using a variety of frame works, libaires, and languages. I have profficent knowledge both in front-end and back-end development using tools like React, Bootstrap, Nextjs, Mongo db, Node, Express, etc. I'm always eager to expand my skills and tackle new challenges head-on."
  },
  {
    Para: "Apart from programming, i also like going for walks, reading a good book, and cooking"
  }
]

function AboutContent(){
  const ConstructAboutPara = Paragraphs.map((item, index) => {
    return(
      <p key={index}>{item.Para}</p>
    )
  })

  return(
    <div className="about-me-page">
      <div className="about-content">
        <div className="about-title">
          <Image src={AboutIcon} alt="About me icon"></Image>
          <h1>About Me</h1>
        </div>
        <hr></hr>
        <div className="about-text">
          {ConstructAboutPara}
        </div>
      </div>
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
}

export default AboutContent