import React, { useEffect, useState } from 'react'
import { FiShare2 } from 'react-icons/fi'

const Sidebar = () => {
  const [currentSection, setCurrentSection] = useState('home')

  const handleClick = (e, data) => {
    e.preventDefault()
    const section = document.getElementById(data)

    if (data) {
      section.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection(data)
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <>
        <aside className='sidebar' id='sidebar'>
            <nav className='nav'>
                <div className='nav-logo'>
                    <a href='/' className='logo-text'>DP</a>
                </div>

                <div className='nav-menu'>
                    <div className='menu'>
                        <ul className='nav-list'>
                            <li className='nav-item'>
                                <span onClick={(e) => handleClick(e, 'home')} className={`nav-link ${currentSection === 'home' && 'active'}`}>Home</span>
                            </li>
                            <li className='nav-item'>
                                <span className={`nav-link ${currentSection === 'about' && 'active'}`} onClick={(e) => handleClick(e, 'about')}>About</span>
                            </li>
                            <li className='nav-item'>
                                <span className={`nav-link ${currentSection === 'skills' && 'active'}`} onClick={(e) => handleClick(e, 'skills')}>Skills</span>
                            </li>
                            <li className='nav-item'>
                                <span className={`nav-link ${currentSection === 'work' && 'active'}`} onClick={(e) => handleClick(e, 'work')}>Work</span>
                            </li>
                            <li className='nav-item'>
                                <span className={`nav-link ${currentSection === 'services' && 'active'}`} onClick={(e) => handleClick(e, 'services')}>Services</span>
                            </li>
                            <li className='nav-item'>
                                <span className={`nav-link ${currentSection === 'contact' && 'active'}`} onClick={(e) => handleClick(e, 'contact')}>Contact</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='btn-share'>
                    {/* <FontAwesomeIcon icon={faShareNodes} /> */}
                    <FiShare2 />
                </div>
            </nav>
        </aside>
    </>
  )
}

export default Sidebar
