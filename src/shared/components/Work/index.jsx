/* eslint-disable no-unused-vars */
import { faArrowRight, faArrowUpRightFromSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import img1 from '../../../assets/img/project/ijopt-preview.png'
import img2 from '../../../assets/img/project/physiozine-preview.png'
import img3 from '../../../assets/img/project/rummyrani-preview.png'
import img4 from '../../../assets/img/project/gorummy-preview.png'
import img5 from '../../../assets/img/project/bhagavadgita-preview.png'
import img6 from '../../../assets/img/project/maakrupa-preview.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const workContainerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-card', {
        scrollTrigger: {
          trigger: workContainerRef.current,
          start: 'top 80%'
        },
        opacity: 0,
        y: 50, // a little more distance for ghost effect
        duration: 2, // slower
        stagger: 0.4, // slower appearance one-by-one
        ease: 'power3.out' // smooth, ghost-like easing
      })
    }, workContainerRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className='work section' id='work'>
        <h2 data-heading='Work Highlights' className='section-title'>Recent Works</h2>

        <div ref={workContainerRef} className='work-container container grid'>
          {/* Work Cards */}
          {[
            { img: img1, title: 'Indian Journal of Physical Therapy', link: 'https://ijopt.co.in/' },
            { img: img2, title: 'PhysioZine', link: 'https://physiozine.vercel.app/' },
            { img: img3, title: 'Rummy Rani', link: 'https://rummyrani.co.in/' },
            { img: img4, title: 'GO Rummy', link: 'https://rummy246.in/' },
            { img: img5, title: 'BhagavadGita - As It Is', link: 'https://bhagavad-gita-zeta.vercel.app/' },
            { img: img6, title: 'MaaKrupa', link: 'https://dhruvparmar2310.github.io/MaaKrupa/index.html' }
          ].map((item, index) => (
            <div className='work-card' key={index}>
              <div className='work-card-header'>
                <img src={item.img} alt="" className='work-img img-fluid' />
              </div>
              <div className="work-card-body">
                <h2 className=''>{item.title}</h2>
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
