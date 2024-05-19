import React from 'react'
import ProjectIcon from '../../assets/images/icons/decor/paintbrush-solid.svg';
import TwitterThumbnail from '../../assets/images/thumbnails/twitter-clone.webp';
import PersonalWebsiteThumbnail from '../../assets/images/thumbnails/personal-website.webp';
import EconmProjectTn from '../../assets/images/thumbnails/ecomproject.webp';
import projectInfo from '../../Data/json/misc/projectInfo.json';
import Image from 'next/image';

function GrabImage(ImageName: string){
  switch(ImageName){
    case "Twitter Clone":
      return TwitterThumbnail;
    break;
    case "Personal Website":
      return PersonalWebsiteThumbnail;
    break;
    case "Personal Website":
      return PersonalWebsiteThumbnail;
    break;
    case "E-comerance website":
      return EconmProjectTn;
    break;
    default:
      return TwitterThumbnail;
    break;
  }
}

function HomeProjects(){
  const BuildProject = projectInfo.projects.map(item => {
    return (
      <div key={item.id} className={`project-item project-item-${item.id}`} data-front-content={item.Heading} data-back-content={item.Desc}>
      <div className="project-front" draggable='false'><Image alt={item.Heading} src={GrabImage(item.Heading)}></Image></div>
      <div className="project-back">
        <h1>{item.Heading}</h1>
        {item.Desc}
        <a href={`${item.PreviewLink}`}><button className="btn btn-primary">View Project</button></a>
      </div>
    </div>
    )
  })

  return (
    <div className="home-projects">
      <div className='project-title'>
        <Image src={ProjectIcon} draggable='false' alt="Projects icon"></Image>
        <h1>My Projects</h1>
      </div>
      <p>Heres a list of my best projects i've developed and worked on</p>
      <hr></hr>
      <div className="project-list-container">
        {BuildProject}
      </div>
    </div>
  )
}

export default HomeProjects