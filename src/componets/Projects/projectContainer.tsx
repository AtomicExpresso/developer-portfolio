import React from 'react'
import TwitterCloneTn from '../../assets/images/thumbnails/twitter-clone.webp';
import PersonalWebsiteTn from '../../assets/images/thumbnails/personal-website.webp';
import EconmProjectTn from '../../assets/images/thumbnails/ecomproject.webp';
import MovieBoxTn from '../../assets/images/thumbnails/moviebox.webp';

import Image from 'next/image';

import projectInfo from '../../../public/projectItemContent.json'
import Link from 'next/link';

function GrabImg(Img: string){
  switch(Img){
    case "Twitter Clone":
      return TwitterCloneTn;
    break;
    case "Personal Website":
      return PersonalWebsiteTn;
    break;
    case "E-comerance website":
      return EconmProjectTn;
    break;
    case "MovieBox":
      return MovieBoxTn;
    break;
    default:
      return TwitterCloneTn;
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
          <Link href={`/project/${item.ProjectLink}`} as={`/project/${item.ProjectLink}`}>
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