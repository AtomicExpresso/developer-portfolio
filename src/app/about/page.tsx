import React from 'react'
import AboutHero from "../../componets/About/aboutHero";
import AboutContent from "../../componets/About/aboutContent";
import { Metadata } from 'next';
import '../styles/about-globals.scss'

export const metadata: Metadata = {
  title: "About me",
  description: "About me page, goes over a brief description about me, an overview of my skills and education",
};

function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutContent />
    </div>
  )
}

export default AboutPage