import ProjectComp from "@/componets/project/projectComp";
import "@/app/styles/project-item.scss";
import fs from 'fs';
import path from 'path';

type Params = {
  id: string;
};

export default function page({ params }: { params: Params }){
  return (
    <div>
      <ProjectComp/>
    </div>
  )
}

const getProjectsData = () => {
  const filePath = path.join(process.cwd(), 'public', 'projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

// Implement generateStaticParams
export async function generateStaticParams() {
  const projects = getProjectsData();

  // Map the projects to the necessary format
  const paths = projects.map((project: { id: string }) => ({
    params: { id: project.id }
  }));

  return paths;
}