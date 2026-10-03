/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useRef } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import aboutImg from '../../../assets/img/profile-3.jpeg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

gsap.registerPlugin(ScrollTrigger)

const ABOUT_TEXT = [
  'Senior Software Engineer with 3+ years of experience building high-performance, scalable, and maintainable web applications with React.js and Next.js. I follow SOLID principles and component-driven architecture, and I have led React and Webpack training sessions to help my team grow.',

  'I use AI tools such as ChatGPT, Claude, and Cursor daily, with structured prompting, to deliver faster without compromising code quality. Outside of work, I study cybersecurity to understand how systems work and to build with security in mind.'
]

const About = ({ pageReady }) => {
  const sectionRef = useRef(null)
  const sectionTitleRef = useRef(null)
  const imgRef = useRef(null)
  const dataRef = useRef(null)
  const descRefs = useRef([])
  const buttonRef = useRef(null)

  useLayoutEffect(() => {
    // Do not initialize About animations
    // while the loader is still active.
    if (!pageReady) return

    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      })

      gsap.from(sectionTitleRef.current, {
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      })

      // Paragraph fade-in (the whole <p> block)
      gsap.from(descRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power2.out'
      })

      // Word-by-word highlight, scrubbed with scroll.
      // One trigger covers BOTH paragraphs, so the words light up
      // in reading order as the whole text block moves up the screen.
      const words = gsap.utils.toArray('.about-word', dataRef.current)

      if (words.length) {
        const DIM = 0.1 // opacity of words that are not revealed yet
        const SOFT = 10 // how many words fade at the "reveal edge"

        // Words before the edge are bright, words after it are dim,
        // and the few words at the edge fade smoothly in between.
        const paint = (progress) => {
          const pos = progress * (words.length + SOFT)

          words.forEach((word, i) => {
            const t = gsap.utils.clamp(0, 1, (pos - i) / SOFT)
            word.style.opacity = DIM + (1 - DIM) * t
          })
        }

        // Start fully dim before the first paint
        paint(0)

        ScrollTrigger.create({
          trigger: dataRef.current,
          start: 'top 90%', // block top reaches 80% of the viewport
          end: 'bottom 80%', // block bottom reaches the middle of the viewport
          onUpdate: (self) => paint(self.progress),
          onRefresh: (self) => paint(self.progress)
          // markers: true // uncomment to debug start/end lines
        })
      }

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          clearProps: 'opacity,transform', // hand control back to your CSS (hover effects etc.)
          scrollTrigger: {
            trigger: dataRef.current,
            start: 'bottom 80%', // same point where the words finish lighting up
            toggleActions: 'play none none none',
            once: true
            // markers: true
          }
        }
      )

      // Recalculate positions now that every trigger exists
      ScrollTrigger.refresh()
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [pageReady])

  return (
    <section
      className="about section"
      id="about"
      ref={sectionRef}
    >
      <Helmet>
        <title>Dhruv Parmar | Senior Software Engineer</title>

        <meta
          name="description"
          content="Dhruv Parmar, Senior Software Engineer with 3+ years of experience building high-performance, SEO-optimized React and Next.js web applications."
        />

        <meta
          name="keywords"
          content="Dhruv Parmar, Dhruv Parmar React Developer, Dhruv Parmar Next.js Developer, React Developer, Next.js Developer, Frontend Developer, Frontend Portfolio, SEO Optimized Web Developer, jswithdhruv, dhan parmar, Dhruv Parmar Ahmedabad, Software Developer Dhruv Parmar"
        />

        <meta name="author" content="Dhruv Parmar" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://dhanparmar.netlify.app/" />
        <meta property="og:title" content="About Dhruv Parmar | Senior Software Engineer" />

        <meta property="og:description" content="Frontend specialist crafting responsive, SEO-friendly web apps using React and Next.js." />

        <meta property="og:url" content="https://dhanparmar.netlify.app/" /> <meta property="og:site_name" content="Dhruv Parmar" /> <meta property="og:image" content="https://dhanparmar.netlify.app/main-logo-2.png" />
        <meta property="og:image:alt" content="Dhruv Parmar | Senior Software Engineer" /> <meta property="og:image:width" content="1200" /> <meta property="og:image:height" content="630" /> <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        {/* ========================= TWITTER / X SHARE ========================== */} <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content="Dhruv Parmar | Senior Software Engineer" /> <meta name="twitter:description" content="Senior Software Engineer specializing in React and Next.js, building high-performance, responsive and SEO-optimized web applications." /> <meta name="twitter:image" content="https://dhanparmar.netlify.app/main-logo-2.png" /> <meta name="twitter:image:alt" content="Dhruv Parmar | Senior Software Engineer" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org", 
              "@type": "Person", 
              "name": "Dhruv Parmar", 
              "url": "https://dhanparmar.netlify.app/", 
              "jobTitle": "Senior Software Engineer", 
              "description": "Senior Software Engineer specializing in React and Next.js, building high-performance and SEO-optimized web applications.", 
              "image": "https://dhanparmar.netlify.app/main-logo-2.png", 
              "sameAs": [ 
                "https://www.linkedin.com/in/dhruv-parmar-484636227/", 
                "https://github.com/dhruvparmar2310"
              ], 
              "knowsAbout": [ "React.js", "Next.js", "JavaScript", "Frontend Development", "Web Development", "SEO", "GraphQL", "React Query", "Redux Toolkit" ]
            }
          `}
        </script>
      </Helmet>

      <h2
        className="section-title"
        data-heading="About"
        ref={sectionTitleRef}
      >
        My Intro
      </h2>

      <div className="about-container container">
        <Row>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="about-data" ref={dataRef}>
              {ABOUT_TEXT.map((text, i) => {
                const words = text.split(' ')

                return (
                  <p
                    key={text.slice(0, 15)}
                    className="about-description"
                    ref={(el) => {
                      descRefs.current[i] = el
                    }}
                  >
                    {words.map((word, index) => (
                      <React.Fragment key={`${word}-${index}`}>
                        <span className="about-word">{word}</span>
                        {index !== words.length - 1 && ' '}
                      </React.Fragment>
                    ))}
                  </p>
                )
              })}

              <a
                href="#contact"
                className="button"
                ref={buttonRef}
              >
                <FaPaperPlane className="button-icon" />
                Let&apos;s Connect
              </a>
            </div>
          </Col>

          <Col
            xl={6}
            lg={6}
            md={12}
            sm={12}
            className="mt-lg-0 mt-4"
          >
            <div className="img-content">
              <div className="img-card">
                <img
                  src={aboutImg}
                  alt="About Dhruv"
                  loading="lazy"
                  className="about-img"
                  ref={imgRef}
                />

                <h3 className="gradient-text myself-name">
                  Dhruv Parmar
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default About
