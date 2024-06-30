import React from 'react'
import ProjectIcon from '../../assets/images/icons/decor/paintbrush-solid.svg';
import PersonalWebsiteThumbnail from '../../assets/images/thumbnails/personal-website.webp';
import MovieBoxTn from '../../assets/images/thumbnails/moviebox.webp';
import projectInfo from '../../../public/projectItemContent.json';
import Link from 'next/link';
import Image from 'next/image';

function GrabImage(ImageName: string){
  switch(ImageName){
    case "Personal Website":
      return PersonalWebsiteThumbnail;
    break;
    case "MovieBox":
      return MovieBoxTn;
    break;
    case "Personal Website":
      return PersonalWebsiteThumbnail;
    break;
    default:
      return MovieBoxTn;
    break;
  }
}

function HomeProjects(){
  //Only include the first 3 elements from project info
  const newArr = [...projectInfo.results].slice(0, 3)

  const BuildProject = newArr.map(item => {
    return (
      <div key={item.id} className={`project-item project-item-${item.id}`} data-front-content={item.name} data-back-content={item.previewDesc}>
      <div className="project-front" draggable='false'>
        <Image alt={item.name} src={GrabImage(item.name)}></Image>
      </div>
      <div className="project-back">
        <h1>{item.name}</h1>
        {item.previewDesc}
        <Link href={`/project/[id]`} as={`/project/${item.ProjectLink}`}>
            <button className="btn btn-primary">View</button>
        </Link>
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
      <p>Heres a list of my best projects ive developed and worked on</p>
      <hr></hr>
      <div className="project-list-container">
        {BuildProject}
      </div>
    </div>
  )
}

export default HomeProjects