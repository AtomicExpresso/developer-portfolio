import React from 'react-dom'
import ReactBar from '../../assets/images/icons/bars/react-bar.svg';
import JavascriptBar from '../../assets/images/icons/bars/javascript-bar.svg';
import SassBar from '../../assets/images/icons/bars/scss-bar.svg';
import TauriBar from '../../assets/images/icons/bars/tauri-bar.svg';
import ReactNativeBar from '../../assets/images/icons/bars/reactnative-bar.svg';
import TypeScriptBar from '../../assets/images/icons/bars/TypeScript-bar.svg';
import Image from 'next/image';

function ProjectsTile(){
  const ConstructProjectFilter = ({Img, Title}: {Img: string ,Title: string}) => {
    return (
      <div className="project-filter-item">
        <Image src={Img} alt={`${Title}`} draggable='false'></Image>
      </div>
    )
  }

  return (
    <div className="projects-page-title">
      <h1>My Project's</h1>
      <p>Here's a list of my projects. Built using a wide range of languages, frameworks and libaries. Each project is responsive and supports desktop & mobile</p>
      <hr></hr>
      <div className="project-filter">
        <ConstructProjectFilter
          Img={ReactBar}
          Title='React'
        />
        <ConstructProjectFilter
          Img={JavascriptBar}
          Title='Vanillia Javascript'
        />
        <ConstructProjectFilter
          Img={TypeScriptBar}
          Title='TypeScript'
        />
        <ConstructProjectFilter
          Img={SassBar}
          Title='Sass / Scss'
        />
        <ConstructProjectFilter
          Img={TauriBar}
          Title='Tauri'
        />
      </div>
    </div>
  )
}

export default ProjectsTile;