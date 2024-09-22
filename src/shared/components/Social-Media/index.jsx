import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'

const SocialMedia = () => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('theme-mode') === 'true'
  })

  console.log('mode :>> ', mode)

  const handleClick = () => {
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
  return (
    <>
      <div className='top-header'>
        <div className="social">
          <span className="social-follow">Follow Me</span>
          <div className="social-links">
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
        <div className='theme-mode'>
          <Form>
            <Button type='button' variant='primary' className='modeBtn' onClick={() => handleClick()}>
              {mode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default SocialMedia
