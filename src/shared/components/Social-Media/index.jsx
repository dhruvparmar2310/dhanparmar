import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'

const SocialMedia = () => {
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
        {/* <div className='theme-mode'>
          <Form>
            <Button type='button' variant='primary' className='modeBtn' onClick={() => handleClick()}>
              {mode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </Button>
          </Form>
        </div> */}
      </div>
    </>
  )
}

export default SocialMedia
