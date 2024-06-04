import React from 'react';
import Twitter from '../../assets/images/icons/twitter.svg';
import Youtube from '../../assets/images/icons/youtube.svg';
import Instagram from '../../assets/images/icons/instagram.svg';
import Discord from '../../assets/images/icons/discord.svg';
import Image from 'next/image';

function Footer(){
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-col-2">
          <h2>Pumped Pixel</h2>
          <p>a dedicated front-end developer with a drive for turning innovative ideas into reality</p>
        </div>
        <div className="footer-col-2">
          <h2>Socials</h2>
          <div className="footer-social-links">
           <a href='https://twitter.com/pumped212'><Image src={Twitter} alt='Twitter' draggable='false'></Image></a>
           <a href='#'><Image src={Youtube} alt='Youtube' draggable='false'></Image></a>
           <a href='#'><Image src={Instagram} alt='Instagram' draggable='false'></Image></a>
           <a href='#'><Image src={Discord} alt='Discord' draggable='false'></Image></a>
          </div>
        </div>
        </div>
        <hr></hr>
        <div className="footer-row-2">
          <p>© Copyright 2024 | Made by <span><a href='https://github.com/AtomicExpresso'>Pumpedpixel</a></span></p>
        </div>
    </div>
  )
}

export default Footer