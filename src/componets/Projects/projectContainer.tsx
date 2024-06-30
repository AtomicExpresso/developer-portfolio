import React from 'react'
import PersonalWebsiteTn from '../../assets/images/thumbnails/personal-website.webp';
import EconmProjectTn from '../../assets/images/thumbnails/ecomproject.webp';
import MovieBoxTn from '../../assets/images/thumbnails/moviebox.webp';

import Image from 'next/image';

import projectInfo from '../../../public/projectItemContent.json'
import Link from 'next/link';

function GrabImg(Img: string){
  switch(Img){
    case "Personal Website":
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
  const ConstructProjectItem = projectInfo.results.map((item, index) => {
    return (
      <div className="project-page-item" key={index}>
        <Image src={GrabImg(item.name)} draggable='false' alt={`${item.name}`}></Image>
        <h1>{item.name}</h1>
        <h2>{item.Lang}</h2>
        <p>{item.previewDesc}</p>
        <div className='project-item-btn'>
          <Link href={`/project/[id]`} as={`/project/${item.ProjectLink}`}>
            <button className="btn btn-primary">View</button>
          </Link>
        </div>
      </div>
    )
  })

  return (
    <div className="project-container">
      {ConstructProjectItem}
    </div>
  )
}

export default ProjectContainer