'use client'

import React from 'react'
import ProjectIcon from '../../assets/images/icons/decor/paintbrush-solid.svg';
import PersonalWebsiteThumbnail from '../../assets/images/thumbnails/personal-website.webp';
import MovieBoxTn from '../../assets/images/thumbnails/moviebox.webp';
import projectInfo from '../../../public/projectItemContent.json';
import Link from 'next/link';
import Image from 'next/image';

//Fetchs the proper image from the json doc, had to do this because nextjs dosent have a way to allow for dynamic images
function GrabImage(ImageName: string){
  switch(ImageName){
    case "PersonalWebsiteTn":
      return PersonalWebsiteThumbnail;
    break;
    case "MovieBox":
      return MovieBoxTn;
    break;
    default:
      return MovieBoxTn;
    break;
  }
}

// {project.Lang.split(" • ").map((item: any, index: number) => {
//   return (
//     <div key={index} className='home-project-item-skill'>
//       <h2>{item}</h2>
//     </div>
//   )
// })
// }

//Projects page, fectches info from json doc and details projects i developed
function HomeProjects(){
  //Only include the first 3 elements from project info
  const projectInfoArray = [...projectInfo.results].slice(0, 3)

  const BuildProject = ({project}: any) => {
    return (
      <div className="project-page-item">
        <Image src={GrabImage(project.poster_path)} draggable='false' alt={`${project.name}`}></Image>
        <h1>{project.name}</h1>
        <div className='home-project-item-techstack'>
          {project.Lang.split(" • ").map((item: any, index: number) => {
              return (
                <div key={index} className='home-project-item-skill'>
                  <h2>{item}</h2>
                </div>
              )
            })
          }
        </div>
        <p>{project.previewDesc}</p>
        <div className='project-item-btn'>
          <Link href={`/project/[id]`} as={`/project/${project.ProjectLink}`}>
            <button className="btn btn-primary">View</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="home-projects">
      <div className='project-title'>
        <Image src={ProjectIcon} draggable='false' alt="Projects icon"></Image>
        <h1>My Projects</h1>
      </div>
      <p>Heres a list of my best projects ive developed and worked on</p>
      <hr></hr>
      <div className="project-list-container">
        {projectInfoArray.map((project, index) => {
          return (
            <div key={index} className='home-project-item-outer-container'>
              <BuildProject project={project}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomeProjects