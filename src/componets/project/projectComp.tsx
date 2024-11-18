'use client'
import { usePathname } from "next/navigation";
import projectItemContent from '../../../public/projectItemContent.json';

import ProjectTitle from "./projectTitle";
import ProjectContent from "./projectContent";

export const metadata = {
  title: "A list of projects",
}

export default function ProjectComp(){
  const path = usePathname();
  const id = path.split('/')[2]; //Gets the ID from the current url
  const results = projectItemContent.results[Number(id)];

  return (
    <div className="blog-page-content">
      <ProjectTitle results={results}/>
      <hr></hr>
      <ProjectContent results={results}/>
    </div>
  )
}