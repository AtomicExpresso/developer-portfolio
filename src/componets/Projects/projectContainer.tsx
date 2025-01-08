import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { getSortedPostsData } from '@/lib/projects'

import PersonalWebsiteThumbnail from '@/assets/images/thumbnails/personal-website.webp';
import MovieBoxTn from '@/assets/images/thumbnails/moviebox.webp';
import TubeFetcher from '@/assets/images/thumbnails/tubefetcher.png';

//Fetchs the proper image from the json doc, had to do this because nextjs dosent have a way to allow for dynamic images
function GrabImage(ImageName: string){
  switch(ImageName){
    case "PersonalWebsiteTn":
      return PersonalWebsiteThumbnail;
    case "MovieBox":
      return MovieBoxTn;
    case "TubeFetcher":
      return TubeFetcher;
    default:
      return MovieBoxTn;
  }
}

function ProjectContainer(){
  const allPostsData = getSortedPostsData()

  return (
      <div className="project-container">
        {allPostsData.map(({ id, title, lang, preview, thumbnail }) => (
              <div key={id} className='blog-list-item'>
                <Image 
                  alt={title} 
                  src={GrabImage(thumbnail)}
                />
                <h2>{title}</h2>
                  <div className='blog-list-info-container'>
                    <h3>{lang}</h3>
                  </div>
                  <p>{preview}</p>
                <Link href={`/projects/project/[id]`} as={`/projects/project/${id}`}><button className='btn btn-primary'>View</button></Link>
              </div>
            ))}
      </div>
  )
}

export default ProjectContainer