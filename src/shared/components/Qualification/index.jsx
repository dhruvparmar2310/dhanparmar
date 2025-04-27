import { faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdOutlineFileDownload } from 'react-icons/md'
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Container, Row, Col, Button } from 'react-bootstrap'
import resume from '../../../assets/data/Dhruv_Parmar.pdf'

gsap.registerPlugin(ScrollTrigger)

const Qualification = () => {
  const cardRefs = useRef([])
  const sectionRef = useRef(null)
  const sectionTitleRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionTitleRef.current, {
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: 'top 90%'
        },
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      })
    }, sectionRef)

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'center bottom',
            toggleActions: 'play none none none'
          }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="qualification" className="qualification-section section" ref={sectionRef}>
      <Container>
        <h2 className="section-title" data-heading="My Journey" ref={sectionTitleRef}>Qualification</h2>

        <Row className="g-4">
          <Col md={6}>
            <div
              className="glass-card"
              ref={(el) => (cardRefs.current[0] = el)}
            >
              <h3 className="card-title">
                <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                Education
              </h3>
              <p className="card-heading">Darshan University, Rajkot</p>
              <p className="card-text">Bachelor’s of Engineering (B.E.)</p>
              <p className="card-date">2019 - 2023</p>
            </div>
          </Col>

          <Col md={6}>
            <div
              className="glass-card"
              ref={(el) => (cardRefs.current[1] = el)}
            >
              <h3 className="card-title">
                <FontAwesomeIcon icon={faAward} className="icon" />
                Experience
              </h3>
              <p className="card-heading">Yudiz Solutions Ltd., Ahmedabad</p>
              <p className="card-text">Jr. Web Developer (ReactJs Developer)</p>
              <p className="card-date">2023 - Present</p>
              <hr />
              <p className="card-text">Internship Trainee</p>
              <p className="card-date">2022 - 2023</p>
            </div>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <a href={resume} download="Dhruv_Parmar" rel="noreferrer">
            <Button variant="primary" className="resume-btn">
              <MdOutlineFileDownload className="me-2" />
              Download Resume
            </Button>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Qualification
