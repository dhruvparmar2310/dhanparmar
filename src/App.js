import React from 'react'
import Sidebar from './shared/components/Sidebar'
import SocialMedia from './shared/components/Social-Media'
import { FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import logo from './assets/img/home-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import About from './shared/components/About'
import Qualification from './shared/components/Qualification'
import Skills from './shared/components/Skills'
import Work from './shared/components/Work'

function App () {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <section className='home' id='home'>
          <div className='home-container container grid'>
            <SocialMedia />

            <img src={logo} alt='' className='hero' />

            <div className='data'>
              <h1 className='title'>Hi, I&apos;am Dhruv</h1>
              <h3 className='subtitle'>ReactJs Developer | Front End Developer</h3>
              <p className='description'>High level of expirenece in Web Design and Development Knownledge, producing quality work.</p>

              <a href="#about" className='button'><FontAwesomeIcon icon={faUser} className='button-icon' /> More About Me</a>
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
        <Skills />
        <Work />
      </main>
    </>
  )
}

export default App
