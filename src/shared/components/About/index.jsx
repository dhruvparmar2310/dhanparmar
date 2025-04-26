/* eslint-disable indent */
import React, { useLayoutEffect, useRef } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import aboutImg from '../../../assets/img/profile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBarsProgress, faHeadset } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const sectionRef = useRef(null)
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
                    start: 'center bottom' // Trigger when image is halfway into view
                },
                x: 60,
                opacity: 0,
                duration: 1.8,
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
                    trigger: headingRef.current,
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
            <h2 className="section-title" data-heading="About">My Intro</h2>

            <div className="about-container container grid">
                <div className="about-data">
                    <h3 className="about-heading gradient-text" ref={headingRef}>
                        Hi, I&apos;m Dhruv Parmar, based in India
                    </h3>

                    {[
                        'I craft high-performance, scalable, and modern web applications using React.js, Next.js, Redux, GraphQL, and React Query. My expertise lies in transforming ideas into seamless digital experiences that are fast, optimized, and SEO-friendly.',
                        "Whether it's building from scratch or scaling existing systems, I prioritize clean code, reusable components, and pixel-perfect UIs with a strong focus on user-centric design and performance optimization.",
                        'I focus on building accessible, responsive, and maintainable web interfaces that not only meet user expectations but also scale effortlessly with growing product demands.'
                    ].map((text, i) => (
                        <p
                            key={i}
                            className="about-description"
                            ref={(el) => (descRefs.current[i] = el)}
                        >
                            {text}
                        </p>
                    ))}

                    <div className="about-info">
                        {[
                            { icon: faAward, title: 'Experience', subtitle: 'React.js & Front-End' },
                            { icon: faBarsProgress, title: 'Completed', subtitle: '20+ Projects' },
                            { icon: faHeadset, title: 'Support', subtitle: 'Online 24/7' }
                        ].map((box, i) => (
                            <div className="about-box" key={i} ref={(el) => (infoBoxRefs.current[i] = el)}>
                                <FontAwesomeIcon icon={box.icon} className="about-icon" />
                                <h3 className="about-title">{box.title}</h3>
                                <span className="about-subtitle">{box.subtitle}</span>
                            </div>
                        ))}
                    </div>

                    <a href="#contact" className="button" ref={buttonRef}>
                        <FaPaperPlane className="button-icon" /> Let&apos;s Connect
                    </a>
                </div>
                <div className='img-content'>
                    <img
                        src={aboutImg}
                        alt="About Dhruv"
                        loading="lazy"
                        className="about-img"
                        ref={imgRef}
                    />
                </div>
            </div>
        </section>
    )
}

export default About
