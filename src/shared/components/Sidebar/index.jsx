import React from 'react'
import { FiShare2 } from 'react-icons/fi'

const Sidebar = () => {
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
                                <a href='/' className='nav-link active'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#about' className='nav-link'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#skills' className='nav-link'>Skills</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#work' className='nav-link'>Work</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#services' className='nav-link'>Services</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#contact' className='nav-link'>Contact</a>
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
