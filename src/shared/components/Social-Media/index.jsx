import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'

const SocialMedia = () => {
  return (
        <>
            <div className="social">
                <span className="social-follow">Follow Me</span>
                <div className="social-links">
                    <a href='https://www.facebook.com/' target='_blank' className='social-link' rel="noreferrer">
                        <FaFacebookSquare />
                    </a>
                    <a href='https://www.instagram.com/' target='_blank' className='social-link' rel="noreferrer">
                        <IoLogoInstagram />
                    </a>
                </div>
            </div>
        </>
  )
}

export default SocialMedia
