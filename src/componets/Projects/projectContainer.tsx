import React from 'react'
import PersonalWebsiteTn from '../../assets/images/thumbnails/personal-website.webp';
import EconmProjectTn from '../../assets/images/thumbnails/ecomproject.webp';
import MovieBoxTn from '../../assets/images/thumbnails/moviebox.webp';

import Image from 'next/image';

import projectInfo from '../../../public/projectItemContent.json'
import Link from 'next/link';

//Same as before, used to fetch proper images since nextjs dosent support dynamic images
function GrabImage(Img: string){
  switch(Img){
    case "PersonalWebsiteTn":
      return PersonalWebsiteTn;
    break;
    case "MovieBox":
      return MovieBoxTn;
    break;
    default:
      return MovieBoxTn;
    break;
  }
}

function ProjectContainer(){
  const ConstructProjectItem = ({project}: any) => {
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
    <div className="project-container">
      {projectInfo.results.map((project, index) => {
        return (
          <div key={index}>
            <ConstructProjectItem project={project}/>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectContainer