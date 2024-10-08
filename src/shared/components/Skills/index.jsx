import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { FaAngleDown, FaReact } from 'react-icons/fa'

const Skills = () => {
  const [buttonToggle, setButtonToggle] = useState({
    frontEnd: true,
    react: false,
    database: false
  })
  return (
    <>
      <section className='skills section' id='skills'>
        <h2 data-heading='My Abilities' className='section-title'>My Experience</h2>

        <div className='skills-container container grid'>
          <div className='skills-tabs'>
            <div className={`skills-header ${buttonToggle?.frontEnd && 'skills-active'}`} data-target='#frontend' onClick={() => setButtonToggle({ frontEnd: true })}>
              <FontAwesomeIcon icon={faCode} className='skills-icon' />

              <div className=''>
                <h1 className="skills-title">Front End Developer</h1>
                <span className="skills-substitle">More than 5 Year</span>
              </div>
              <FaAngleDown className='skills-arrow' />
            </div>
            <div className={`skills-header ${buttonToggle?.react && 'skills-active'}`} data-target='#react' onClick={() => setButtonToggle({ react: true })}>
              <FaReact className='skills-icon react' size='43px' />

              <div className=''>
                <h1 className="skills-title">ReactJs Developer</h1>
                <span className="skills-substitle">More than 1 Year</span>
              </div>
              <FaAngleDown className='skills-arrow' />
            </div>
            <div className={`skills-header ${buttonToggle?.database && 'skills-active'}`} data-target='#database' onClick={() => setButtonToggle({ database: true })}>
              <FontAwesomeIcon icon={faDatabase} className='skills-icon mx-2' />

              <div className=''>
                <h1 className="skills-title mx-2">DataBase</h1>
                <span className="skills-substitle mx-2">More than 1 Year</span>
              </div>
              <FaAngleDown className='skills-arrow' />
            </div>
          </div>

          <div className='skills-content'>
            {buttonToggle?.frontEnd &&
              <div className='skills-group skills-active' data-content id='frontend'>
                <div className='skills-list grid'>
                  <div className='skills-data'>
                    <div className='skills-titles'>
                      <h3 className='skills-name'>HTML</h3>
                      <span className='skills-number'>95%</span>
                    </div>

                    <div className='skills-bar'>
                      <span className='skills-percentage' style={{ width: '95%' }}></span>
                    </div>
                  </div>
                  <div className='skills-data'>
                    <div className='skills-titles'>
                      <h3 className='skills-name'>CSS</h3>
                      <span className='skills-number'>80%</span>
                    </div>

                    <div className='skills-bar'>
                      <span className='skills-percentage' style={{ width: '80%' }}></span>
                    </div>
                  </div>
                  <div className='skills-data'>
                    <div className='skills-titles'>
                      <h3 className='skills-name'>JavaScript</h3>
                      <span className='skills-number'>75%</span>
                    </div>

                    <div className='skills-bar'>
                      <span className='skills-percentage' style={{ width: '75%' }}></span>
                    </div>
                  </div>
                  <div className='skills-data'>
                    <div className='skills-titles'>
                      <h3 className='skills-name'>Bootstrap</h3>
                      <span className='skills-number'>95%</span>
                    </div>

                    <div className='skills-bar'>
                      <span className='skills-percentage' style={{ width: '95%' }}></span>
                    </div>
                  </div>
                </div>
              </div>
            }

            {buttonToggle?.react &&
              <div className='skills-group' data-content id='react'>
                <div className='skills-list grid'>
                  <div className='skills-data'>
                    <div className='skills-titles'>
                      <h3 className='skills-name'>ReactJs</h3>
                      <span className='skills-number'>90%</span>
                    </div>

                    <div className='skills-bar'>
                      <span className='skills-percentage' style={{ width: '90%' }}></span>
                    </div>
                  </div>
                  <div className='skills-data'>
                    <div className='skills-titles'>
                      <h3 className='skills-name'>NextJs</h3>
                      <span className='skills-number'>80%</span>
                    </div>

                    <div className='skills-bar'>
                      <span className='skills-percentage' style={{ width: '80%' }}></span>
                    </div>
                  </div>
                  <div className='skills-data'>
                    <div className='skills-titles'>
                      <h3 className='skills-name'>Redux</h3>
                      <span className='skills-number'>85%</span>
                    </div>

                    <div className='skills-bar'>
                      <span className='skills-percentage' style={{ width: '85%' }}></span>
                    </div>
                  </div>
                  <div className='skills-data'>
                    <div className='skills-titles'>
                      <h3 className='skills-name'>React Query</h3>
                      <span className='skills-number'>95%</span>
                    </div>

                    <div className='skills-bar'>
                      <span className='skills-percentage' style={{ width: '95%' }}></span>
                    </div>
                  </div>
                </div>
              </div>
            }

            {buttonToggle?.database &&
              <div className='skills-group' data-content id='database'>
                <div className='skills-list grid'>
                  <div className='skills-data'>
                    <div className='skills-titles'>
                      <h3 className='skills-name'>MS SQL</h3>
                      <span className='skills-number'>90%</span>
                    </div>

                    <div className='skills-bar'>
                      <span className='skills-percentage' style={{ width: '90%' }}></span>
                    </div>
                  </div>
                  <div className='skills-data'>
                    <div className='skills-titles'>
                      <h3 className='skills-name'>Mongo DB</h3>
                      <span className='skills-number'>80%</span>
                    </div>

                    <div className='skills-bar'>
                      <span className='skills-percentage' style={{ width: '80%' }}></span>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
