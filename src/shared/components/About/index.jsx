/* eslint-disable indent */
import React, { useRef } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import aboutImg from '../../../assets/img/about.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBarsProgress, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { motion, useInView } from 'framer-motion'

const About = () => {
    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })
    return (
        <>
            <section className="about section" id='about' ref={ref}>
                <h2 className='section-title' data-heading='My Intro'>About Me</h2>

                <div className='about-container container grid'>
                    <motion.img
                        src={aboutImg}
                        alt=""
                        loading='lazy'
                        className='about-img'
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 2, delay: 2 }}
                    />

                    <div className='about-data'>
                        <motion.h3
                            className='about-heading'
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 2 }}
                        >Hi, I&apos;m Dhruv Parmar, based in India</motion.h3>
                        <motion.p
                            className="about-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 3 }}
                        >
                            Experienced ReactJs Developer with over 2.5 years of expertise in building high-performance websites, web applications, and software from scratch.
                        </motion.p>

                        <motion.p
                            className="about-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 3.5 }}
                        >
                            I specialize in creating seamless and efficient digital experiences with a strong focus on performance optimization, modern designs, and SEO best practices. My skill set allows me to craft scalable solutions that not only meet client requirements but also include advanced feature integrations for future expansions.
                        </motion.p>

                        <motion.p
                            className="about-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 4 }}
                        >
                            Whether you&apos;re looking for a cutting-edge web application or a well-optimized, aesthetically appealing website, I ensure functionality, speed, and user satisfaction at every step.
                        </motion.p>

                        <motion.div
                            className='about-info'
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 2, delay: 3 }}
                        >
                            <div className='about-box'>
                                <FontAwesomeIcon icon={faAward} className='about-icon' />
                                <h3 className='about-title'>Experience</h3>
                                <span className="about-subtitle">2.5 Years</span>
                            </div>
                            <div className='about-box'>
                                <FontAwesomeIcon icon={faBarsProgress} className='about-icon' />
                                <h3 className='about-title'>Completed</h3>
                                <span className="about-subtitle">20+ Projects</span>
                            </div>
                            <div className='about-box'>
                                <FontAwesomeIcon icon={faHeadset} className='about-icon' />
                                <h3 className='about-title'>Support</h3>
                                <span className="about-subtitle">Online 24/7</span>
                            </div>
                        </motion.div>

                        <motion.a
                            href="#contact"
                            className='button'
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0, delay: 3 }}
                        >
                            <FaPaperPlane className='button-icon' /> Hire Me
                        </motion.a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
