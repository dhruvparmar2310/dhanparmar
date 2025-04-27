import React, { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IoLogoInstagram, IoMdMail } from 'react-icons/io'
import logo from './assets/img/home-img-3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import About from './shared/components/About'
import Qualification from './shared/components/Qualification'
import Work from './shared/components/Work'
import Services from './shared/components/Services'
import ContactUs from './shared/components/Contact'
import Technology from './shared/components/Technology'
import Header from './shared/components/Header'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FluidCursor from './shared/components/FluidCursor'
import FlipWords from './shared/components/FlipWords'

gsap.registerPlugin(ScrollTrigger)

function App () {
  const [text, setText] = useState('')
  const fullText = "Hi, I'm Dhruv"
  const typingSpeed = 100 // Speed of typing in ms

  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    // Apply global scroll animation
    ScrollTrigger.defaults({
      toggleActions: 'play none none none',
      ease: 'power1.out'
    })

    // Optional: Smooth fade-in on scroll
    gsap.utils.toArray('.fade-up').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: false
          }
        }
      )
    })

    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) {
        clearInterval(timer)
      }
    }, typingSpeed)

    // GSAP Animation
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
      .fromTo(btnRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })

    // Animate my-info content
    tl.fromTo('.my-info .info-item',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }, // Adds stagger effect to each info item
      '-=0.5' // Delay the my-info animation to start after the button animation
    )

    // const el = rotatingRef.current

    // Set initial text and background
    // el.innerText = rotatingTexts[0].text
    // el.style.backgroundColor = rotatingTexts[0].bg

    // gsap.set(el, {
    //   transformPerspective: 1000,
    //   transformStyle: 'preserve-3d'
    // })
    // const updateText = () => {
    //   // Animate out
    //   gsap.to(el, {
    //     rotationX: 90,
    //     autoAlpha: 0,
    //     filter: 'blur(3px)',
    //     duration: 0.6,
    //     ease: 'power2.in',
    //     onComplete: () => {
    //       rotateTextIndex.current = (rotateTextIndex.current + 1) % rotatingTexts.length
    //       el.innerText = rotatingTexts[rotateTextIndex.current].text
    //       el.style.backgroundColor = rotatingTexts[rotateTextIndex.current].bg

    //       // Reset rotation for next flip
    //       gsap.set(el, { rotationX: -90 })

    //       // Animate in
    //       gsap.to(el, {
    //         rotationX: 0,
    //         autoAlpha: 1,
    //         filter: 'blur(0px)',
    //         duration: 0.6,
    //         ease: 'power2.out'
    //       })
    //     }
    //   })
    // }

    // const interval = setInterval(updateText, 2500) // every 2s
    return () => {
      clearInterval(timer)
      // clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Header />
      <main className='main'>
        <section className='home' id='home'>
          <FluidCursor />
          <div className='home-container container grid'>

            <img src={logo} alt='' loading='lazy' className='home-img' />

            <div className='data'>
              <h1 className='title fade-up gradient-text' ref={titleRef}>
                {text}
                <span className='custom-cursor'></span>
              </h1>
              <h3 className='subtitle' ref={subtitleRef}>
              React.js Developer | <span className='relative inline-block'>
              <FlipWords
                words={[
                  'NextJs',
                  'GraphQL',
                  'Data Fetching',
                  'Version Control',
                  'SEO',
                  'Optimized',
                  'Scalable'
                ]}
                duration={3000} // Change word every 2 seconds
              />
              </span>
              {/* <span className="rotating-text" ref={rotatingRef}></span> */}
              </h3>
              <p className='description' ref={descRef}>
              Crafting seamless and efficient web experiences with modern technologies.
              </p>
              <a href="#about" className='button' ref={btnRef}>
                <FontAwesomeIcon icon={faUser} className='button-icon' /> More About Me
              </a>
            </div>

            {/* Your my-info section remains unchanged */}
            <div className='my-info'>
              <div className='info-item'>
                <FaWhatsapp className='info-icon' />
                <div>
                  <h3 className='info-title'>Whatsapp</h3>
                  <span className='info-subtitle' onClick={() => window.open('https://wa.me/9586627577')}>958-662-7577</span>
                </div>
              </div>

              <div className='info-item'>
                <IoMdMail className='info-icon' />
                <div>
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
        {/* <Skills /> */}
        <Work />
        <Services />
        <ContactUs />

        <footer className='footer'>
          <div className='footer-bg'>
            <div className='footer-container container'>
              <p className='footer-copy'>Copyright &#169; 2024. All right reserved.</p>
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
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
