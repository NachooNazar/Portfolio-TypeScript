import React from 'react'
import '../layout.css'
import { prop } from '../../App'

const Resume = ({resumeData}:prop) => {

    const style = {
        font: "15px 'opensans-bold', sans-serif",
        color: '#313131',
        ' text-transform': 'uppercase',
        'letter-spacing': '2px',
        'font-weight': 'normal',
        position: 'relative',
        top: '-36px',
      };

  return (
    <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
       

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item) => {
                  return (
                    <li>
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Resume