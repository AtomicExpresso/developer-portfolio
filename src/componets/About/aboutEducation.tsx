export default function AboutEducation(){  
  const SchoolCards = (props: any) => {
    return (
      <div className="education-school-card">
        <h1>{props.name}</h1>
        <h3>{props.startYr} - {props.endYr}</h3>
        <h2>{props.study}</h2>
      </div>
    )
  }

  const AcademicAchievement = (props: any) => {
    return (
      <div className="education-achievment-card">
        {props.achievemnt.map((item: string) => {
          return (
            <h2>{item}</h2>
          )
        })
        }
      </div>
    )
  }
  
  return (
    <div className="about-education">
      <div>
        <h1>Education</h1>
      </div>
      <div className="about-education-timeline-container">
        <div className="about-education-timeline-text" id="about-education-timeline-text-right">
          <SchoolCards
            name="High School"
            startYr="2019"
            endYr="2023"
            study="Studied business & finance in addition to normal courses"
          />
          <AcademicAchievement
            achievemnt={['Deans List', '3.6 GPA']}
          />
          <SchoolCards
            name="College"
            startYr="2024"
            endYr="present"
            study="Double majoring in Computer Science & Data Analytics"
          />
        </div>
        <div className="about-education-timeline">
          <div className="about-education-timeline-line">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="about-education-timeline-text" id="about-education-timeline-text-left">
          <div style={{background: 'none', boxShadow: 'none'}}></div>
          <SchoolCards
            name="Junior College"
            startYr="Spring 2024"
            endYr="Spring 2024"
            study="Studied web development"
          />
          <div style={{background: 'none', boxShadow: 'none'}}></div>
        </div>
      </div>
    </div>
  )
}