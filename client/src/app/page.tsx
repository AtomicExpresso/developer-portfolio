import React from 'react'
import { HomeHero } from "../componets/Home/homeHero";
import HomeInfo from "../componets/Home/homeInfo";
import HomeSkills from "../componets/Home/homeSkills";
import HomeProjects from "../componets/Home/homeProjects";
import { Metadata } from 'next';
import './styles/home-globals.scss'

export const metadata: Metadata = {
  title: "Pumped dev",
  description: "Welcome to my porfilo! here you can view some of my public projects, blog, and more. Feel free to get in touch if you have any questions!",
};

function HomePage() {
  return (
    <div>
      <HomeHero></HomeHero>
      <HomeInfo></HomeInfo>
      <HomeSkills></HomeSkills>
      <HomeProjects></HomeProjects>
    </div>
  )
}

export default HomePage