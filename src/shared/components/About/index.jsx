/* eslint-disable indent */
import React, { useLayoutEffect, useRef } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import aboutImg from '../../../assets/img/profile.jpeg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Col, Row } from 'react-bootstrap'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const sectionRef = useRef(null)
    const sectionTitleRef = useRef(null)
    const imgRef = useRef(null)
    const headingRef = useRef(null)
    const descRefs = useRef([])
    const infoBoxRefs = useRef([])
    const buttonRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imgRef.current, {
                scrollTrigger: {
                    trigger: imgRef.current,
                    // start: 'center bottom' // Trigger when image is halfway into view
                    start: 'top 90%'
                },
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            })

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

            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 85%'
                },
                y: 40,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.out'
            })

            gsap.from(descRefs.current, {
                scrollTrigger: {
                    trigger: descRefs.current,
                    start: 'top 80%'
                },
                y: 40,
                opacity: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: 'power2.out'
            })

            infoBoxRefs.current.forEach((box, i) => {
                gsap.from(box, {
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 80%'
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.out',
                    delay: i * 0.2 // reveal one by one smoothly
                })
            })

            gsap.from(buttonRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 70%'
                },
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.out',
                delay: 0.5
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="about section" id="about" ref={sectionRef}>
            <h2 className="section-title" data-heading="About" ref={sectionTitleRef}>My Intro</h2>

            <div className="about-container container">
                <Row>
                    <Col xl={6} lg={6} md={6} sm={12}>
                        <div className="about-data">
                            {[
                                'I specialize in architecting high-performance, scalable web applications with React.js, Next.js, Redux, GraphQL and React Query for efficient data fetching, transforming ideas into seamless, SEO-friendly digital experiences.',
                                'Whether integrating advanced features or optimizing existing systems, I adhere to clean-code principles, reusable component patterns, all driven by a user centric design philosophy.',
                                'My work emphasizes accessibility, responsiveness and maintainability, ensuring that each interface delivers optimal performance today and scales gracefully to meet tomorrow’s demands.',
                                'After reviewing my work, you’ll see the happy faces of my clients. I design websites from the my vision, my portfolio is just one example and I’m confident you’ll love the results.'
                            ].map((text, i) => (
                                <p
                                    key={i}
                                    className="about-description"
                                    ref={(el) => (descRefs.current[i] = el)}
                                >
                                    {text}
                                </p>
                            ))}

                            <a href="#contact" className="button" ref={buttonRef}>
                                <FaPaperPlane className="button-icon" /> Let&apos;s Connect
                            </a>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12}>
                        <div className='img-content'>
                            <div className='img-card'>
                                <img
                                    src={aboutImg}
                                    alt="About Dhruv"
                                    loading="lazy"
                                    className="about-img"
                                    ref={imgRef}
                                />
                                <h3 className='gradient-text myself-name'>Dhruv Parmar</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default About
