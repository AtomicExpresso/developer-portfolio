import React from 'react'
import TwitterCloneTn from '../../assets/images/thumbnails/twitter-clone.webp';
import PersonalWebsiteTn from '../../assets/images/thumbnails/personal-website.webp';
import EconmProjectTn from '../../assets/images/thumbnails/ecomproject.webp';
import Image from 'next/image';

import projectInfo from '../../../public/projectInfo.json'

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
    default:
      return TwitterCloneTn;
    break;
  }
}

function ProjectContainer(){
  const ConstructProjectItem = projectInfo.projects.map((item, index) => {
    return (
      <div className="project-page-item" key={index}>
        <Image src={GrabImg(item.Heading)} draggable='false' alt={`${item.Heading}`}></Image>
        <h1>{item.Heading}</h1>
        <h2>{item.Lang}</h2>
        <p>{item.Desc}</p>
        <div className='project-item-btn'>
          <a href={item.PreviewLink}>
            <button className="btn btn-primary">Live View</button>
          </a>
          <a href={item.SourceLink}>
            <button className="btn btn-success">Source Code</button>
          </a>
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