import { faArrowRight, faCheckCircle, faClose, faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { FaTerminal } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

const Services = () => {
  const [modal, setModal] = useState({ open: false })
  return (
        <>
            <section className="services container section" id='services'>
                <h2 data-heading='Services' className='section-title'>What I Offer</h2>

                <div className='services-container container grid'>
                    <div className='service-content'>
                        <div>
                            <FaTerminal className='services-icon' />
                            <h3 className='services-title'>Web <br /> Developer</h3>
                        </div>

                        <span className='services-button' onClick={() => setModal({ open: true, title: 'Web Developing', desc: 'Develop an performance base & secure Website', points: ['I can develop Website using Morden Front End Technology called ReactJs and NextJs.', 'ReactJs is basically a JavaScript Library, built & maintained by Facebook in 2013.', "In recent year, more than 1000's of project where made in Reactjs, such as NetFlix, Instagram, Facebook, etc.", 'Speeds up the loading of websites and apps by utilizing Virtual DOM, allowing dynamic UI parts to update without forcing the user to reload the page. '] })}>
                            View More <FontAwesomeIcon icon={faArrowRight} className='button-icon' />
                        </span>
                    </div>

                    <div className='service-content'>
                        <div>
                            <MdWork className='services-icon' />
                            <h3 className='services-title'>Free <br /> Lancer</h3>
                        </div>

                        <span className='services-button' onClick={() => setModal({ open: true, title: 'FreeLancing Work', desc: 'Photo Editing | Video Editing | Website | Web Application', points: ['I can do normal photo editing, as well as video editing.', 'I can also make a morden business card with logo design.', 'I can also make Static Websites with Morden design concept.', 'I can also work for Dynamic Websites like E-Commerce, Business Website as per the requirement features.', 'Can give Guarantee, outfit of my skills showcase will be valuable as well as satisfactory.'] })}>
                            View More <FontAwesomeIcon icon={faArrowRight} className='button-icon' />
                        </span>
                    </div>

                    <div className='service-content'>
                        <div>
                            <FontAwesomeIcon icon={faCode} className='services-icon' />
                            <h3 className='services-title'>Web <br /> Designer</h3>
                        </div>

                        <span className='services-button' onClick={() => setModal({ open: true, title: 'Web Designing', desc: 'Design Morden Website with SEO friendly.', points: ['Design morden website using bootstrap framework from the scratch.', 'Design your website for Portfolio, E-Commerce, Business Website, etc.', 'I can add more functionality with your provided documents.', 'Design your website to be reponsive in any devices.'] })}>
                            View More <FontAwesomeIcon icon={faArrowRight} className='button-icon' />
                        </span>
                    </div>
                </div>

                {modal?.open &&
                    <div className='services-modal' onBlur={() => setModal({ open: false })}>
                        <div className='modal-content'>
                            <span className='modal-close' onClick={() => setModal({ open: false })}>
                                <FontAwesomeIcon icon={faClose} />
                            </span>

                            <h3 className='modal-title'>{modal?.title}</h3>
                            <p className='modal-description'>{modal?.desc}</p>

                            <ul className='modal-services grid'>
                                {modal?.points?.map((point, index) => (
                                    <li className='modal-service' key={index}>
                                        <span className='modal-icon'>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                        <p className='modal-info'>{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
            </section>
        </>
  )
}

export default Services
