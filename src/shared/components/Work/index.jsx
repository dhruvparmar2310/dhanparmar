/* eslint-disable no-unused-vars */
import { faArrowRight, faArrowUpRightFromSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import img1 from '../../../assets/img/project/ijopt.png'
import img2 from '../../../assets/img/project/physiozine.png'
import img3 from '../../../assets/img/project/rummyrani.png'
import img4 from '../../../assets/img/project/bhagvadgita.png'
import img5 from '../../../assets/img/project/MaaKrupa.png'
import img6 from '../../../assets/img/project/Medibazar.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const workContainerRef = useRef(null)

  useEffect(() => {
    const cards = workContainerRef.current.querySelectorAll('.work-card')

    gsap.set(cards, { opacity: 0, y: 50 }) // initial ghost position

    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 2, // slower (was 1 before, now 2 seconds)
        delay: index * 0.3, // slightly bigger gap between cards
        ease: 'power4.out', // super smooth easing
        scrollTrigger: {
          trigger: card,
          start: 'top 85%', // trigger earlier for softer effect
          toggleActions: 'play none none reverse'
        }
      })
    })
  }, [])

  return (
    <>
      <section className='work section' id='work'>
        <h2 data-heading='My Portfolio' className='section-title'>Recent Works</h2>

        <div ref={workContainerRef} className='work-container container grid'>
          {/* Work Cards */}
          {[
            { img: img1, title: 'Indian Journal of Physical Therapy', link: 'https://ijopt.co.in/' },
            { img: img2, title: 'PhysioZine', link: 'https://physiozine.vercel.app/' },
            { img: img3, title: 'Rummy Rani', link: 'https://rummyrani.co.in/' },
            { img: img4, title: 'BhagavadGita - As It Is', link: 'https://bhagavad-gita-zeta.vercel.app/' },
            { img: img5, title: 'MaaKrupa', link: 'https://dhruvparmar2310.github.io/MaaKrupa/index.html' },
            { img: img6, title: 'MediBazar+', link: 'https://medibazarplus.netlify.app/' }
          ].map((item, index) => (
            <div className='work-card' key={index}>
              <div className='work-card-header'>
                <img src={item.img} alt="" className='work-img img-fluid' />
              </div>
              <div className="work-card-body">
                <h2 className='gradient-text'>{item.title}</h2>
                <a href={item.link} target='_blank' className='button' rel="noreferrer">Explore <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' /></a>
              </div>
            </div>
          ))}
        </div>
      </section >
    </>
  )
}

export default Work
