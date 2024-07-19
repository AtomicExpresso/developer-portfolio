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
      <div className='home-about-me-intro'>
          <p>👋 Hello there! I&apos;m Pumped, a dedicated full-stack developer with a love for turning innovative ideas into reality. I mostly work in web development, however im also looking to expanding my skill set into other areas aswell.</p>
          <a href='/about'>
            <button className="btn btn-primary">Read more</button>
          </a>
      </div>
      <hr></hr>
    </div>
  )
};

export default HomeInfo