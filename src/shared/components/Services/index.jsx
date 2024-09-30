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

            <span className='services-button' onClick={() => setModal({ open: true, title: 'Web Developing', desc: 'Develop an performance base & secure Website', points: ['I develop high-performance and secure websites using modern frontend technologies such as React.js and Next.js.', 'React.js, a powerful JavaScript library built by Meta, enhances dynamic UI rendering for faster, seamless user experiences.', 'My expertise includes creating scalable, SEO-optimized, and responsive web solutions, leveraging Virtual DOM for efficient UI updates.', 'I have experience building websites for diverse industries, focusing on speed, reliability, and cutting-edge technologies.'] })}>
              View More <FontAwesomeIcon icon={faArrowRight} className='button-icon' />
            </span>
          </div>

          <div className='service-content'>
            <div>
              <MdWork className='services-icon' />
              <h3 className='services-title'>Free <br /> Lancer</h3>
            </div>

            <span className='services-button' onClick={() => setModal({ open: true, title: 'FreeLancing Work', desc: 'Photo Editing | Video Editing | Website | Web Application', points: ['I offer photo and video editing services, ensuring high-quality results tailored to your needs.', 'I design modern business cards and logos, creating a strong visual identity for your brand.', 'I develop static websites with sleek, contemporary design concepts that leave a lasting impression.', 'I specialize in dynamic websites, including e-commerce and business platforms, with customized features based on your requirements.', 'I guarantee that my work will not only showcase my skills but also deliver valuable and satisfactory results.'] })}>
              View More <FontAwesomeIcon icon={faArrowRight} className='button-icon' />
            </span>
          </div>

          <div className='service-content'>
            <div>
              <FontAwesomeIcon icon={faCode} className='services-icon' />
              <h3 className='services-title'>Web <br /> Designer</h3>
            </div>

            <span className='services-button' onClick={() => setModal({
              open: true, title: 'Web Designing', desc: 'Design Morden Website with SEO friendly.', points: ['I design modern, SEO-friendly websites from scratch using the Bootstrap framework, ensuring high performance and sleek aesthetics.', 'I create tailored designs for portfolios, e-commerce platforms, business websites, and more.', 'I can incorporate additional features and functionalities based on your provided documentation and specific needs.', 'All websites are fully responsive, optimized to provide seamless user experiences across all devices.']
            })}>
              View More < FontAwesomeIcon icon={faArrowRight} className='button-icon' />
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
      </section >
    </>
  )
}

export default Services
