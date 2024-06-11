'use client'
import React from 'react'
import ProfilePic from '../../assets/images/profile-pic.webp';
import Twitter from '../../assets/images/icons/twitter.svg';
import Youtube from '../../assets/images/icons/youtube.svg';
import Instagram from '../../assets/images/icons/instagram.svg';
import Discord from '../../assets/images/icons/discord.svg';
import WhiteWave from '../../assets/images/decorations/banner-wave-white.svg';
import Image from 'next/image';
import { ReactTyped } from "react-typed";

function HomeHero() {
  return (
    <div className="hero-container">
      <div className='hero-group'>
        <div className="hero-col-1">
          <h1>Hello 👋, I&apos;m <span>Pumped</span></h1>
          <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
            <h2>I&apos;m a</h2>
            <h2>
              <ReactTyped strings={["Front-end developer", "UI/UX Designer"]} typeSpeed={100} backSpeed={50} loop />
            </h2>
          </div>
          <p>front-end developer, dedicated to transforming innovative concepts into functional and user-friendly web applications</p>

          <div className="hero-social-links">
            <a href='https://twitter.com/pumped212'><Image src={Twitter} alt='Twitter' draggable='false'></Image></a>
            <a href="#"><Image src={Youtube} alt='Youtube' draggable='false'></Image></a>
            <a href="#"><Image src={Instagram} alt='Instagram' draggable='false'></Image></a>
            <a href="#"><Image src={Discord} alt='Discord' draggable='false'></Image></a>
          </div>
          <a href='/projects'><button className="btn btn-primary">View Projects</button></a>
        </div>
        <div className="hero-col-2">
          <Image src={ProfilePic} draggable='false' alt="Profile picture"></Image>
        </div>
      </div>
      <div className="wave-componet">
        <Image src={WhiteWave} className='page-wave' draggable='false' alt="Page wave"></Image>
      </div>
    </div>
  );
}

export { HomeHero };