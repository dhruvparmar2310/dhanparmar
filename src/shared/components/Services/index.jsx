import { faArrowRight, faCheckCircle, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
  return (
    <>
      <section className="services container" id='services'>
        <h2 data-heading='Services' className='section-title'>What I Offer</h2>

        <div className='services-container container grid'>
            <div className='service-content'>
                <div>
                    <i className='services-icon'> </i>
                    <h3 className='services-title'>Web <br /> Developer</h3>
                </div>

                <span className='services-button'>
                    View More <FontAwesomeIcon icon={faArrowRight} className='button-icon' />
                </span>

                <div className='services-modal'>
                    <div className='modal-content'>
                        <FontAwesomeIcon icon={faClose} className='modal-close' />

                        <h3 className='modal-title'>Web Developer</h3>
                        <p className='modal-description'>dfgfdgd sfddf g</p>

                        <ul className='modal-services grid'>
                            <li className='modal-service'>
                                <FontAwesomeIcon icon={faCheckCircle} className='modal-icon' />
                                <p className='modal-info'>I Develop the UI.</p>
                            </li>
                            <li className='modal-service'>
                                <FontAwesomeIcon icon={faCheckCircle} className='modal-icon' />
                                <p className='modal-info'>I Develop the UI.</p>
                            </li>
                            <li className='modal-service'>
                                <FontAwesomeIcon icon={faCheckCircle} className='modal-icon' />
                                <p className='modal-info'>I Develop the UI.</p>
                            </li>
                            <li className='modal-service'>
                                <FontAwesomeIcon icon={faCheckCircle} className='modal-icon' />
                                <p className='modal-info'>I Develop the UI.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='service-content'>
                <div>
                    <i className='services-icon'> </i>
                    <h3 className='services-title'>Free <br /> Lancer</h3>
                </div>

                <span className='services-button'>
                    View More <FontAwesomeIcon icon={faArrowRight} className='button-icon' />
                </span>
            </div>

            <div className='service-content'>
                <div>
                    <i className='services-icon'> </i>
                    <h3 className='services-title'>Web <br /> Designer</h3>
                </div>

                <span className='services-button'>
                    View More <FontAwesomeIcon icon={faArrowRight} className='button-icon' />
                </span>
            </div>
        </div>
      </section>
    </>
  )
}

export default Services
