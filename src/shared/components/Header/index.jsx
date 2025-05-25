import { faBars, faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import logo from '../../../assets/img/logo-purple-trans.png'

const Header = () => {
  const [currentSection, setCurrentSection] = useState('home')
  const [show, setShow] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('theme-mode') === 'true'
  })

  const handleModeClick = () => {
    setMode(prevMode => !prevMode)
  }

  useEffect(() => {
    if (mode) {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    }

    localStorage.setItem('theme-mode', mode)
  }, [mode])

  const handleClick = (e, data) => {
    e.preventDefault()
    const section = document.getElementById(data)

    if (data) {
      section.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection(data)
    }

    setShow(!show)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      //   const homeSection = document.getElementById('home')
      const aboutSection = document.getElementById('about')
      // const skillSection = document.getElementById('skills')
      const technologySection = document.getElementById('technology')
      const workSection = document.getElementById('work')
      // const servicesSection = document.getElementById('services')
      const clicksSection = document.getElementById('clicks')
      const contactSection = document.getElementById('contact')

      const scrollPosition = window.scrollY

      if (scrollPosition < aboutSection?.offsetTop) {
        setCurrentSection('home')
      } else if (scrollPosition >= aboutSection?.offsetTop && scrollPosition < technologySection?.offsetTop) {
        setCurrentSection('about')
        // } else if (scrollPosition >= skillSection?.offsetTop && scrollPosition < workSection?.offsetTop) {
        //   setCurrentSection('skills')
      } else if (scrollPosition >= technologySection?.offsetTop && scrollPosition < workSection?.offsetTop) {
        setCurrentSection('technology')
      } else if (scrollPosition >= workSection?.offsetTop && scrollPosition < clicksSection?.offsetTop) {
        setCurrentSection('work')
        // } else if (scrollPosition >= servicesSection?.offsetTop && scrollPosition < contactSection?.offsetTop) {
        //   setCurrentSection('services')
      } else if (scrollPosition >= clicksSection?.offsetTop && scrollPosition < contactSection?.offsetTop) {
        setCurrentSection('clicks')
      } else {
        setCurrentSection('contact')
      }

      // Add this to track scroll position
      if (scrollPosition >= 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window?.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <div className='mobile-nav-logo'>
        <a href='/' className='logo-text'>
          <img src={logo} alt='Dhruv Parmar' loading='lazy' />
        </a>
      </div>
      <div className='nav-toggle' id='nav-toggle' onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <header className={`header-content ${show ? 'show-header' : ''} ${scrolled ? 'scrolled' : ''}`} id='header'>
        <nav className='nav'>
          <div className='nav-logo'>
            <a href='/' className='logo-text'>
              <img src={logo} alt='Dhruv Parmar' loading='lazy' />
            </a>
          </div>

          <div className='nav-menu'>
            <div className='menu'>
              <ul className='nav-list'>
                {/* <li className='nav-item'>
                  <span onClick={(e) => handleClick(e, 'home')} className={`nav-link ${currentSection === 'home' && 'active'}`}>Home</span>
                </li> */}
                <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'about' && 'active'}`} onClick={(e) => handleClick(e, 'about')}>About</span>
                </li>
                <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'technology' && 'active'}`} onClick={(e) => handleClick(e, 'technology')}>Technology</span>
                </li>
                <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'work' && 'active'}`} onClick={(e) => handleClick(e, 'work')}>Projects</span>
                </li>
                {/* <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'services' && 'active'}`} onClick={(e) => handleClick(e, 'services')}>Services</span>
                </li> */}
                <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'clicks' && 'active'}`} onClick={(e) => handleClick(e, 'clicks')}>Gallery</span>
                </li>
                <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'contact' && 'active'}`} onClick={(e) => handleClick(e, 'contact')}>Contact</span>
                </li>
                <li>
                  <div className='theme-mode-mobile'>
                    <Button type='button' variant='primary' className='modeBtn' onClick={handleModeClick}>
                      {mode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='theme-mode'>
            <Button type='button' variant='primary' className='modeBtn' onClick={handleModeClick}>
              {mode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </Button>
          </div>

          <div className='nav-close' id='nav-close' onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
