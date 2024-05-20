'use client'

import React, { useState, useEffect } from 'react'; 
import upArrow from '../../assets/images/icons/functionalIcon/angle-up-solid.svg';
import Image from 'next/image';
  
const ScrollButton = () => {
  const [visible, setVisible] = useState(false); 
  
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='scroll-btn' onClick={scrollToTop} style={{ display: visible ? 'flex' : 'none' }}>
      <Image src={upArrow} draggable="false" alt="Scroll to top" />
    </div>
  ); 
};

export default ScrollButton;