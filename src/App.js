import React, { useEffect, useState } from 'react'
import Sidebar from './shared/components/Sidebar'
import SocialMedia from './shared/components/Social-Media'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IoLogoInstagram, IoMdMail } from 'react-icons/io'
import logo from './assets/img/home-img-3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import About from './shared/components/About'
import Qualification from './shared/components/Qualification'
import Skills from './shared/components/Skills'
import Work from './shared/components/Work'
import Services from './shared/components/Services'
import ContactUs from './shared/components/Contact'
import { motion } from 'framer-motion'
import Technology from './shared/components/Technology'

function App () {
  const [text, setText] = useState('')
  const fullText = "Hi, I'm Dhruv"
  const typingSpeed = 150 // Speed of typing in ms

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, typingSpeed)
    return () => clearInterval(timer)
  }, [])
  return (
    <>
      <Sidebar />
      <main className='main'>
        <section className='home' id='home'>
          <div className='home-container container grid'>
            <SocialMedia />

            <img src={logo} alt='' className='home-img' />

            <div className='data'>
              <motion.h1
                className='title'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
               {text}
                <motion.span
                  className='cursor'
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                >
                  |
                </motion.span>
              </motion.h1>
              <motion.h3
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 3 }}
                className='subtitle'
              >ReactJs Developer | Front End Developer</motion.h3>
              <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 3, delay: 1 }}
                className='description'
              >High level of expirenece in Web Design and Development Knownledge, producing quality work.</motion.p>

              <motion.a
                href="#about"
                className='button'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 2 }}
              >
                <FontAwesomeIcon icon={faUser} className='button-icon' /> More About Me
              </motion.a>
            </div>

            <div className='my-info'>
              <div className='info-item'>
                <FaWhatsapp className='info-icon' />

                <div className=''>
                  <h3 className='info-title'>Whatsapp</h3>
                  <span className='info-subtitle' onClick={() => window.open('https://wa.me/9586627577')}>958-662-7577</span>
                </div>
              </div>

              <div className='info-item'>
                <IoMdMail className='info-icon' />

                <div className=''>
                  <h3 className='info-title'>Email</h3>
                  <span className='info-subtitle' onClick={() => { window.location.href = 'mailto:dhanparmar23@gmail.com' }}>dhanparmar23@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Qualification />
        <Technology />
        <Skills />
        <Work />
        <Services />
        <ContactUs />

        <footer className='footer'>
          <div className='footer-bg'>
            <div className='footer-container container grid'>
              <div>
                <h1 className='footer-title'>Dhruv Parmar</h1>
                <span className='footer-subtitle'>Front End Developer</span>
              </div>

              <ul className='footer-links'>
                <li>
                  <a href="#services" className='footer-link'>Services</a>
                </li>
                <li>
                  <a href="#work" className='footer-link'>Work</a>
                </li>
                <li>
                  <a href="#contact" className='footer-link'>Contact</a>
                </li>
              </ul>

              <div className='footer-socials'>
                <a href='https://in.linkedin.com/in/dhruv-parmar-484636227' title='Dhruv Parmar | Linkedin' target='_blank' className='social-link' rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href='https://www.instagram.com/dhan.parmar23/' target='_blank' title='Dhruv Parmar | Instagram' className='social-link' rel="noreferrer">
                  <IoLogoInstagram />
                </a>
                <a href='https://github.com/dhruvparmar2310' target='_blank' title='Dhruv Parmar | Github' className='social-link' rel="noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>

            <p className='footer-copy'>Copyright &#169; 2024. All right reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
