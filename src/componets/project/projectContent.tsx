'use client'
import { useState } from "react"
import { ResultsType } from "@/typeings/types"
import { redirect } from "next/dist/server/api-utils";

export default function ProjectContent({results}: {results: any}){
  const [tabs, setTabs] = useState('description');
  const [readMore, setReadMore] = useState(false)

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
          <button 
            style={tabs === 'description' ? ActiveStyle : DefaultStyle} 
            onClick={() => {setTabs('description'), setReadMore(false)}}>
            Description
          </button>
          <button 
            style={tabs === 'features' ? ActiveStyle : DefaultStyle} 
            onClick={() => setTabs('features')}>
            Features
          </button>
          <button 
            style={tabs === 'tech-stack' ? ActiveStyle : DefaultStyle} 
            onClick={() => setTabs('tech-stack')}>
            Tech
          </button>
        </div>
        <div className="item-project-tabs-content">
          {tabs === 'description' ? 
            <div>
              <h2>📝Description</h2>
              <hr></hr>
              {results.description[0].length > 300 ? 
                <div>
                  <div>
                    {readMore ?
                      <div>
                        {results.description[0].split("|").map((paragragh: string) => { // "|" represents the end of a paragraph in the json description string
                          return (
                            <p>{paragragh}</p>
                          )
                        })
                        }
                      </div>
                    : 
                      <p>
                        {results.description[0].slice(0, 300)}....
                      </p>
                    }
                  </div>
                  <div className="project-readmore-btn">
                    <button onClick={() => setReadMore(prevState => !prevState)}>
                      <p>{readMore ? 'Read Less' : 'Read More'}</p>
                    </button>
                  </div>
                </div>
              :
                <div>
                  <p>
                    {results.description[0]}
                  </p>
                </div>
              }
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
            <div className="project-page-tech-stack">
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