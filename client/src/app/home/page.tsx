import React from 'react'
import { HomeHero } from "../../componets/Home/homeHero";
import HomeInfo from "../../componets/Home/homeInfo";
import HomeSkills from "../../componets/Home/homeSkills";
import HomeProjects from "../../componets/Home/homeProjects";

function HomePage(){
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