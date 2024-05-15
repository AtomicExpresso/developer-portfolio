import React from 'react';
import AboutIcon from '../../assets/images/icons/decor/user-solid.svg';
import Image from 'next/image';

const Paragraphs = [
  {
    id: 1,
    Para: '👋 Hello there! Im Atomic, a dedicated front-end developer with a love for turning innovative ideas into reality. i am constantly seeking new challenges and opportunities to expand my skills'
  },
  {
    id: 2,
    Para: "I'm a 19 year old computer science student, I've spent countless hours diving into programming languages, mastering frameworks, and exploring the latest technologies. From front-end technologies like HTML, SCSS, and React to back-end frameworks like Node.js, I'm always eager to expand my skills and tackle new challenges head-on."
  },
  {
    id: 3,
    Para: "Apart from programming, i also like going for walks, hiking in nature, reading a good book and cooking."
  }
]

function AboutContent(){
  const ConstructAboutPara = Paragraphs.map(item => {
    return(

      <p key={item.id}>{item.Para}</p>
    )
  })

  return(
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
  )
}

export default AboutContent