'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import projectItemContent from '../../../public/projectItemContent.json';

import ProjectTitle from "./projectTitle";
import ProjectContent from "./projectContent";
import ProjectShowcase from "./projectShowcase";

import TwitterCloneTn from '@/assets/images/thumbnails/twitter-clone.webp';
import PersonalWebsiteThumbnail from '../../assets/images/thumbnails/personal-website.webp';
import EconmProjectTn from '../../assets/images/thumbnails/ecomproject.webp';
import MovieBoxTn from '../../assets/images/thumbnails/moviebox.webp';

function GrabImage(ImageName: string){
  switch(ImageName){
    case "Twitter Clone":
      return TwitterCloneTn;
    break;
    case "Personal Website":
      return PersonalWebsiteThumbnail;
    break;
    case "MovieBox":
      return MovieBoxTn;
    break;
    case "Personal Website":
      return PersonalWebsiteThumbnail;
    break;
    case "E-comerance website":
      return EconmProjectTn;
    break;
    default:
      return MovieBoxTn;
    break;
  }
}

export default function ProjectComp(){
  const path = usePathname();
  const id = path.split('/')[2]; //Gets the ID from the current url
  const results = projectItemContent.results[Number(id)];

  return (
    <div className="item-project-container">
      <ProjectTitle results={results}/>
      <hr></hr>
      <ProjectContent results={results}/>
    </div>
  )
}