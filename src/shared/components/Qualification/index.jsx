import { faAward, faGraduationCap, faBriefcase, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdOutlineFileDownload } from 'react-icons/md'
import React, { useState, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Container, Row, Col, Button } from 'react-bootstrap'
import resume from '../../../assets/data/Dhruv_Parmar.pdf'

gsap.registerPlugin(ScrollTrigger)

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('experience')
  const sectionRef = useRef(null)
  const sectionTitleRef = useRef(null)
  const contentRef = useRef(null)

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

    return () => ctx.revert()
  }, [])

  // Smooth entrance animation whenever activeTab changes
  useLayoutEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }
      )
    }
  }, [activeTab])

  return (
    <section id="qualification" className="qualification-section section" ref={sectionRef}>
      <Container>
        <span className="subheading text-center">My Journey</span>
        <h2 className="section-title text-center" ref={sectionTitleRef}>Qualification</h2>

        {/* Tab Buttons */}
        <div className="qualification-tabs">
          <button
            type="button"
            className={`qual-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <FontAwesomeIcon icon={faBriefcase} className="me-2" />
            Experience
          </button>
          <button
            type="button"
            className={`qual-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
            Education
          </button>
        </div>

        {/* Tab Content Wrapper */}
        <div ref={contentRef}>
          {activeTab === 'experience' && (
            <Row className="justify-content-center g-4">
              <Col lg={6} md={8}>
                <div className="glass-card active-card">
                  <div className="card-header-flex">
                    <div>
                      <span className="badge-role">Current Role</span>
                      <h3 className="card-heading">Universal Software</h3>
                      <p className="card-text">Sr. Software Developer</p>
                    </div>
                    <FontAwesomeIcon icon={faBriefcase} className="lg-icon" />
                  </div>
                  <div className="card-date-badge">
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> 2026 - Present
                  </div>
                </div>
              </Col>

              <Col lg={6} md={8}>
                <div className="glass-card">
                  <div className="card-header-flex">
                    <div>
                      <span className="badge-role text-muted-role">Previous</span>
                      <h3 className="card-heading">Yudiz Solutions Ltd., Ahmedabad</h3>
                      <p className="card-text">Sr. Software Developer</p>
                    </div>
                    <FontAwesomeIcon icon={faAward} className="lg-icon" />
                  </div>
                  <div className="card-date-badge">
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> 2022 - 2026
                  </div>
                  <hr />
                  <div className="sub-role">
                    <p className="card-text">Internship Trainee</p>
                    <p className="card-date">2022</p>
                  </div>
                </div>
              </Col>
            </Row>
          )}

          {activeTab === 'education' && (
            <Row className="justify-content-center g-4">
              <Col lg={6} md={8}>
                <div className="glass-card">
                  <div className="card-header-flex">
                    <div>
                      <span className="badge-role">Degree</span>
                      <h3 className="card-heading">Darshan University, Rajkot</h3>
                      <p className="card-text">Bachelor’s of Engineering (B.E.)</p>
                    </div>
                    <FontAwesomeIcon icon={faGraduationCap} className="lg-icon" />
                  </div>
                  <div className="card-date-badge">
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> 2019 - 2023
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </div>

        <div className="text-center mt-5">
          <a href={resume} download="Dhruv_Parmar" rel="noreferrer">
            <Button variant="primary" className="resume-btn button">
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
