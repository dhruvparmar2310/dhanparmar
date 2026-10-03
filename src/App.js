/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import { IoLogoInstagram, IoMdMail } from 'react-icons/io'
import logo from './assets/img/home-img-3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import About from './shared/components/About'
import Qualification from './shared/components/Qualification'
import Work from './shared/components/Work'
import ContactUs from './shared/components/Contact'
import Technology from './shared/components/Technology'
import Header from './shared/components/Header'
import Loader from './shared/components/Loader'
import FluidCursor from './shared/components/FluidCursor'
import FlipWords from './shared/components/FlipWords'
import Gallery from './shared/components/Gallery'
import { Helmet } from 'react-helmet'
import SmoothScroll from './shared/components/SmoothScroll/SmoothScroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App () {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [pageReady, setPageReady] = useState(false)

  const fullText = "Hi, I'm Dhruv"
  const typingSpeed = 100

  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descRef = useRef(null)
  const btnRef = useRef(null)

  /*
   * ----------------------------------------------------
   * FORCE PAGE TO TOP ON REFRESH
   * ----------------------------------------------------
   */
  useEffect(() => {
    // Prevent browser from restoring previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Immediately move page to top
    window.scrollTo(0, 0)

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto'
      }
    }
  }, [])

  /*
   * ----------------------------------------------------
   * HERO ANIMATION
   * ----------------------------------------------------
   *
   * This does NOT run while loader is active.
   */
  useEffect(() => {
    if (isLoading) return

    /*
     * ScrollTrigger defaults
     */
    ScrollTrigger.defaults({
      toggleActions: 'play none none none',
      ease: 'power1.out'
    })

    /*
     * Fade-up elements
     */
    gsap.utils.toArray('.fade-up').forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50
        },
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

    /*
     * ----------------------------------------------------
     * HERO TYPING EFFECT
     * ----------------------------------------------------
     */
    let index = 0

    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1))
      index++

      if (index === fullText.length) {
        clearInterval(timer)
      }
    }, typingSpeed)

    /*
     * ----------------------------------------------------
     * HERO GSAP TIMELINE
     * ----------------------------------------------------
     */
    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.out'
      }
    })

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1
      }
    )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 1
        },
        '-=0.5'
      )
      .fromTo(
        descRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 1
        },
        '-=0.5'
      )
      .fromTo(
        btnRef.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1
        }
      )

    /*
     * ----------------------------------------------------
     * HERO INFO ITEMS
     * ----------------------------------------------------
     */
    tl.fromTo(
      '.my-info .info-item',
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3
      },
      '-=0.5'
    )

    /*
     * ----------------------------------------------------
     * PAGE IS NOW READY
     * ----------------------------------------------------
     *
     * About component receives this value and starts
     * creating its ScrollTrigger animations.
     */
    setPageReady(true)

    /*
     * Give browser one frame to make the website visible
     * before refreshing ScrollTrigger positions.
     */
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    /*
     * CLEANUP
     */
    return () => {
      clearInterval(timer)

      tl.kill()
    }
  }, [isLoading])

  /*
   * ----------------------------------------------------
   * LOADER COMPLETE
   * ----------------------------------------------------
   */
  const handleLoaderComplete = () => {
    /*
     * Make sure we are at the very top before
     * showing the actual website.
     */
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })

    /*
     * Hide loader
     */
    setIsLoading(false)
  }

  const currentYear = new Date().getFullYear()
  return (
    <>
      {/* ------------------------------------------------
          SEO
      ------------------------------------------------ */}

      <Helmet>
        <title>Dhruv Parmar - Portfolio</title>

        <meta
          name="description"
          content="Welcome to Dhruv Parmar's portfolio. I'm a skilled React.js developer creating scalable, optimized, and SEO-friendly web applications."
        />

        <link
          rel="canonical"
          href="https://dhanparmar.netlify.app/"
        />
      </Helmet>

      {/* ------------------------------------------------
          LOADER
      ------------------------------------------------ */}

      {isLoading && (
        <Loader
          onLoaded={handleLoaderComplete}
        />
      )}

      {/* ------------------------------------------------
          WEBSITE
          Hidden while loader is active
      ------------------------------------------------ */}
      <div
        style={{
          visibility: isLoading ? 'hidden' : 'visible',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.4s ease'
        }}
      >
        <Header />
        <main className="main">
          <SmoothScroll>

            {/* =================================================
                HOME / HERO
            ================================================= */}
            <section
              className="home"
              id="home"
            >
              {/* <FluidCursor /> */}
              <div className="home-container container grid">
                <img
                  src={logo}
                  alt=""
                  loading="lazy"
                  className="home-img"
                />

                <div className="data">
                  <h1
                    className="title fade-up gradient-text"
                    ref={titleRef}
                  >
                    {text}
                    <span className="custom-cursor" />
                  </h1>

                  <h3
                    className="subtitle"
                    ref={subtitleRef}
                  >
                    {/* React.js Developer |{' '} */}
                    <span className="relative inline-block">
                      <FlipWords
                        words={[
                          'React.js Specialist',
                          'Next.js Developer',
                          'Frontend Architect',
                          'AI & Prompt Engineer',
                          'Cyber-security Learner',
                          'Performance Engineering'
                        ]}
                        duration={3000}
                      />
                    </span>
                  </h3>

                  <p
                    className="description"
                    ref={descRef}
                  >
                    Crafting fast, scalable web experiences with modern technologies and AI-driven workflows.
                  </p>

                  <a href="#about" className="button" ref={btnRef} >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="button-icon"
                    />
                    More About Me
                  </a>
                </div>

                {/* =================================================
                    CONTACT INFO
                ================================================= */}
                <div className="my-info">
                  {/* WhatsApp */}
                  <div className="info-item">
                    <FaWhatsapp className="info-icon" />
                    <div>
                      <h3 className="info-title"> Whatsapp </h3>

                      <span
                        className="info-subtitle"
                        onClick={() => window.open('https://wa.me/9586627577', '_blank')}
                      >
                        958-662-7577
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="info-item">
                    <IoMdMail className="info-icon" />
                    <div>
                      <h3 className="info-title"> Email </h3>

                      <span
                        className="info-subtitle"
                        onClick={() => {
                          window.location.href = 'mailto:dhanparmar23@gmail.com'
                        }}
                      >
                        dhanparmar23@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                ABOUT

                pageReady ensures About's GSAP animations
                initialize only after loader finishes.
            ================================================= */}
            <About
              pageReady={pageReady}
            />

            {/* =================================================
                OTHER SECTIONS
            ================================================= */}
            <Qualification />
            <Technology />
            <Work />
            <Gallery />
            <ContactUs />

            {/* =================================================
                FOOTER
            ================================================= */}
            <footer className="footer">
              <div className="footer-bg">
                <div className="footer-container container">
                  <p className="footer-copy">
                    Copyright &#169; {currentYear}. All right reserved.
                  </p>

                  <div className="footer-socials">
                    {/* LinkedIn */}
                    <a
                      href="https://in.linkedin.com/in/dhruv-parmar-484636227"
                      title="Dhruv Parmar | Linkedin"
                      target="_blank"
                      className="social-link"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>

                    {/* Personal Instagram */}
                    <a
                      href="https://www.instagram.com/dhan.parmar23/"
                      target="_blank"
                      title="Dhruv Parmar | Instagram"
                      className="social-link"
                      rel="noreferrer"
                    >
                      <IoLogoInstagram />
                    </a>

                    {/* JS with Dhruv Instagram */}
                    <a
                      href="https://www.instagram.com/jswithdhruv/"
                      target="_blank"
                      title="Js with Dhruv | Instagram"
                      className="social-link"
                      rel="noreferrer"
                    >
                      <RiJavascriptFill />
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/dhruvparmar2310"
                      target="_blank"
                      title="Dhruv Parmar | Github"
                      className="social-link"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </SmoothScroll>
        </main>
      </div>
    </>
  )
}

export default App
