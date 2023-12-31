import { faAward, faCalendarDays, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Qualification = () => {
  return (
        <>
            <section className="qualification section" id='qualification'>
                <h2 className='section-title' data-heading='My Journey'>Qualification</h2>

                <div className='qualification-container container grid'>
                    <div className="education">
                        <h3 className="qualification-title"><FontAwesomeIcon icon={faGraduationCap} className='' /> Education</h3>

                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-title">K.G. Dholakiya School, Rajkot</h3>
                                <p className="timeline-text">SSC</p>
                                <span className='timeline-date'>
                                    <FontAwesomeIcon icon={faCalendarDays} /> 2017
                                </span>
                            </div>
                        </div>

                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-title">Shree P.V. Modi School, Rajkot</h3>
                                <p className="timeline-text">HSC</p>
                                <span className='timeline-date'>
                                    <FontAwesomeIcon icon={faCalendarDays} /> 2019
                                </span>
                            </div>
                        </div>

                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-title">Darshan University, Rajkot</h3>
                                <p className="timeline-text">Bachelor&apos;s of Engineering (B.E.)</p>
                                <span className='timeline-date'>
                                    <FontAwesomeIcon icon={faCalendarDays} /> 2019 - 2023
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="experience">
                        <h3 className="qualification-title"><FontAwesomeIcon icon={faAward} /> Experience</h3>

                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-title">Yudiz Solutions Ltd., Ahmedabad</h3>
                                <p className="timeline-text">Jr. Web Developer (ReactJs Developer)</p>
                                <span className='timeline-date'>
                                    <FontAwesomeIcon icon={faCalendarDays} /> 2023 - Present
                                </span>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-title"></h3>
                                <p className="timeline-text">Internship Trainee</p>
                                <span className='timeline-date'>
                                    <FontAwesomeIcon icon={faCalendarDays} /> 2022 - 2023
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Qualification
