import React from 'react';
import AboutIcon from '../../assets/images/icons/decor/user-solid.svg';
import Image from 'next/image';

/* <div className="icon-list">
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
</div> */

function AboutContent(){
  return(
    <div className="about-me-page">
      <div className="about-content">
        <div className="about-title">
          <Image src={AboutIcon} alt="About me icon"></Image>
          <h1>About Me</h1>
        </div>
        <hr></hr>
        <div className="about-text">
          <p>
            I&#39;m a university student and passionate full-stack software developer with a specialization in Python and various libaries, complemented by a strong foundation in general software development. My journey began with front-end technologies like React, Nextjs, CSS, and SCSS, and soon expanded into back-end, desktop applications, and game development.
          </p>
          <p>
            I&#39;ve worked on a variety of programming projects, from web applications and mobile apps to video games and desktop applications. I&#39;m proficient in Python, JavaScript, PostgreSQL, and C++, and I enjoy learning new tools and technologies to improve my work. Throughout each project, I take a methodical approach to programming ensuring I write clean, effective and well-documented code that&#39;s easy to maintain and scales well for future growth.
          </p>
          <p>
            I enjoy working on projects, where I can focus on every aspect of development, from planning to final implementation. Whether it&#39;s experimenting with new ideas or tackling complex challenges, I&#39;m always looking for ways to improve my skills and build something meaningful.
          </p>
        </div>
      </div>
      </div>
  )
}

export default AboutContent