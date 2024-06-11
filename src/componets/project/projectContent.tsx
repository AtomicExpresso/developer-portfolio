'use client'
import { useState } from "react"
import { ResultsType } from "@/typeings/types"

export default function ProjectContent({results}: {results: ResultsType}){
  const [tabs, setTabs] = useState('description');

  const ActiveStyle = {
    fontWeight: "800",
    fontSize: "20px",
    borderBottom: "solid 3px blue"
  }

  const DefaultStyle = {
    fontWeight: "400",
    fontSize: "20px",
    borderBottom: "none"
  }
  
  return (
    <div className="item-project-description">
      <div className="item-project-tabs-container">
        <div className="item-project-tabs">
          <button style={tabs === 'description' ? ActiveStyle : DefaultStyle} onClick={() => setTabs('description')}>
            Description
          </button>
          <button style={tabs === 'features' ? ActiveStyle : DefaultStyle} onClick={() => setTabs('features')}>Features</button>
          <button style={tabs === 'tech-stack' ? ActiveStyle : DefaultStyle} onClick={() => setTabs('tech-stack')}>Tech</button>
        </div>
        <div className="item-project-tabs-content">
          {tabs === 'description' ? 
            <div>
              <h2>📝Description</h2>
              <hr></hr>
              {results.description.map((desc, index) => {
                return (
                  <div key={index}>
                    <p>{desc.para}</p>
                  </div>
                )
              })}
            </div>
          : null}
          {tabs === 'features' ? 
            <div>
              <h2>⚙️Features</h2>
              <hr></hr>
              {results.features.map((item, index) => {
                return (
                  <div className="item-project-feature" key={index}>
                    <h3>- {item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </div>
          : null}
          {tabs === 'tech-stack' ? 
            <div>
              <h2>☕Tech-Stack</h2>
              <hr></hr>
              <h4>{results.Lang}</h4>
            </div>
          : null}
        </div>
      </div>
    </div>
  )
}