import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import aboutImg from '../../../assets/img/about.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBarsProgress, faHeadset } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
        <>
            <section className="about section" id='about'>
                <h2 className='section-title' data-heading='My Intro'>About Me</h2>

                <div className='about-container container grid'>
                    <img src={aboutImg} alt="" className='about-img' />

                    <div className='about-data'>
                        <h3 className='about-heading'>Hi, I&apos;m Dhruv Parmar, based in India</h3>
                        <p className="about-description">
                            Experienced ReactJs Developer with 1.5 Years of hands-on expertise, dedicated to creating seamless and innovative web applications.
                        </p>

                        <div className='about-info'>
                            <div className='about-box'>
                                <FontAwesomeIcon icon={faAward} className='about-icon' />
                                <h3 className='about-title'>Experience</h3>
                                <span className="about-subtitle">1.5 Years</span>
                            </div>
                            <div className='about-box'>
                                <FontAwesomeIcon icon={faBarsProgress} className='about-icon' />
                                <h3 className='about-title'>Completed</h3>
                                <span className="about-subtitle">5+ Projects</span>
                            </div>
                            <div className='about-box'>
                                <FontAwesomeIcon icon={faHeadset} className='about-icon' />
                                <h3 className='about-title'>Support</h3>
                                <span className="about-subtitle">Online 24/7</span>
                            </div>
                        </div>

                        <a href="#contact" className='button'>
                            <FaPaperPlane className='button-icon' /> Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </>
  )
}

export default About
