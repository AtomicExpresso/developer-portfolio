import React from 'react';
import AboutIcon from '../../assets/images/icons/decor/user-solid.svg';
import Image from 'next/image';

const Paragraphs = [
  {
    id: 1,
    Para: '👋 Hello there! Im Pumped Pixel, a dedicated full-stack developer with a love for turning innovative ideas into reality. i am constantly seeking new challenges and opportunities to expand my skills'
  },
  {
    id: 2,
    Para: "I'm a 20 year old university student. I've spent countless hours diving into web development and programming, using a variety of frame works, libaires, and languages. I have profficent knowledge both in front-end and back-end development using tools like React, Bootstrap, Nextjs, Mongo db, Node, Express, etc. I'm always eager to expand my skills and tackle new challenges head-on."
  },
  {
    id: 3,
    Para: "Apart from programming, i also like going for walks, reading a good book, and cooking"
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