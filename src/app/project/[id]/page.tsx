import ProjectComp from "@/componets/project/projectComp";
import "@/app/styles/project-item.scss";
import '@/app/styles/blog-globals.scss';


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

