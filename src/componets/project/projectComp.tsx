'use client'
import { usePathname } from "next/navigation";

import ProjectTitle from "./projectTitle";

export const metadata = {
  title: "A list of projects",
}

//Used for displaying project content
export default function ProjectComp(){
  const path = usePathname();
  const id = path.split('/')[2]; //Gets the ID from the current url

  return (
    <div className="blog-page-content">
      <hr></hr>
    </div>
  )
}