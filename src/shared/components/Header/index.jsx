import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import logo from '../../../assets/img/logo-purple-trans.png'
import useMediaQuery from '../../hooks/useMediaQuery'
// import { CiLight } from 'react-icons/ci'
import { MdLightMode } from 'react-icons/md'
import gsap from 'gsap'

const Header = () => {
  const [currentSection, setCurrentSection] = useState('home')
  const [show, setShow] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const width = useMediaQuery('(max-width: 1024px)')
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('theme-mode') === 'true'
  })

  const handleModeClick = () => {
    setMode(prevMode => !prevMode)
  }

  useEffect(() => {
    if (show && width) {
      console.log('here')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [width, show])

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

      const scrollPosition = window.scrollY + 120
      console.log('scrollPosition:', scrollPosition)
      console.log('clicksSection:', clicksSection?.offsetTop)
      console.log('contactSection:', contactSection?.offsetTop)

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
      // if (scrollPosition >= 30) {
      //   setScrolled(true)
      // } else {
      //   setScrolled(false)
      // }
      setScrolled(window.scrollY >= 30)
    }

    window?.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const roll = (label) => (
    <span className='rolling-text' aria-label={label}>
      <span className='roll-top' aria-hidden='true'>
        {label.split('').map((ch, i) => (
          <span className='char' key={i}>{ch === ' ' ? '\u00A0' : ch}</span>
        ))}
      </span>
      <span className='roll-bottom' aria-hidden='true'>
        {label.split('').map((ch, i) => (
          <span className='char' key={i}>{ch === ' ' ? '\u00A0' : ch}</span>
        ))}
      </span>
    </span>
  )

  useEffect(() => {
    const cleanups = []

    const ctx = gsap.context(() => {
      document.querySelectorAll('.nav-item').forEach((item) => {
        const top = item.querySelectorAll('.roll-top .char')
        const bottom = item.querySelectorAll('.roll-bottom .char')
        if (!top.length) return // skips the theme button item

        gsap.set(bottom, { yPercent: 100 })

        const tl = gsap
          .timeline({ paused: true })
          .to(top, { yPercent: -100, duration: 0.4, ease: 'power3.inOut', stagger: 0.02 }, 0)
          .to(bottom, { yPercent: 0, duration: 0.4, ease: 'power3.inOut', stagger: 0.02 }, 0)

        const play = () => tl.play()
        const reverse = () => tl.reverse()

        item.addEventListener('mouseenter', play)
        item.addEventListener('mouseleave', reverse)
        cleanups.push(() => {
          item.removeEventListener('mouseenter', play)
          item.removeEventListener('mouseleave', reverse)
        })
      })
    })

    return () => {
      cleanups.forEach((fn) => fn())
      ctx.revert()
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
                  <span className={`nav-link ${currentSection === 'about' && 'active'}`} onClick={(e) => handleClick(e, 'about')}>{roll('About')}</span>
                </li>
                <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'technology' && 'active'}`} onClick={(e) => handleClick(e, 'technology')}>{roll('Technology')}</span>
                </li>
                <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'work' && 'active'}`} onClick={(e) => handleClick(e, 'work')}>{roll('Projects')}</span>
                </li>
                {/* <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'services' && 'active'}`} onClick={(e) => handleClick(e, 'services')}>Services</span>
                </li> */}
                <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'clicks' && 'active'}`} onClick={(e) => handleClick(e, 'clicks')}>{roll('Gallery')}</span>
                </li>
                <li className='nav-item'>
                  <span className={`nav-link ${currentSection === 'contact' && 'active'}`} onClick={(e) => handleClick(e, 'contact')}>{roll('Contact')}</span>
                </li>
                <li className='nav-item'>
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
            <Button type='button' variant='primary' className={`modeBtn ${mode ? 'light-mode' : 'dark-mode'}`} onClick={handleModeClick}>
              {/* {mode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />} */}
              {mode ? <MdLightMode /> : <MdLightMode />}
            </Button>
          </div>

          {/* <div className='nav-close' id='nav-close' onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faTimes} />
          </div> */}
        </nav>
      </header>
    </>
  )
}

export default Header
