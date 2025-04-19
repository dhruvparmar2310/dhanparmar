/* eslint-disable no-unused-vars */
import { useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import ReactLogo from '../../../assets/img/tech/react.png'
import ReactQueryLogo from '../../../assets/img/tech/react-query.png'
import GraphQLLogo from '../../../assets/img/tech/graphql.png'
import ReduxLogo from '../../../assets/img/tech/redux.png'
import BootstrapLogo from '../../../assets/img/tech/bootstrap-logo.png'
import SassLogo from '../../../assets/img/tech/Sass-Logo.png'
import TailwindLogo from '../../../assets/img/tech/Tailwind_CSS.png'
import FigmaLogo from '../../../assets/img/tech/figma-logo.png'
import NextJsLogo from '../../../assets/img/tech/nextjs-icon.png'
import SocketLogo from '../../../assets/img/tech/socket-io-icon.png'
import CanvaLogo from '../../../assets/img/tech/canva.png'
import JavascriptLogo from '../../../assets/img/tech/javascript.png'
import WebpackLogo from '../../../assets/img/tech/webpack.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Technology = () => {
  const techCardsRef = useRef(null)

  useEffect(() => {
    // // Register ScrollTrigger with GSAP
    // gsap.registerPlugin(ScrollTrigger)

    // // Create the animation for tech cards
    // gsap.fromTo(
    //   '.tech-card',
    //   {
    //     opacity: 0,
    //     y: 50
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.3,
    //     ease: 'power3.out',
    //     stagger: 0.1, // Stagger the animation for each tech card
    //     scrollTrigger: {
    //       trigger: '.technology',
    //       start: 'top 80%',
    //       toggleActions: 'play none none none' // Start animation when it enters the view
    //     }
    //   }
    // )
    const ctx = gsap.context(() => {
      gsap.from('.tech-card', {
        scrollTrigger: {
          trigger: techCardsRef.current,
          start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 1.5, // Slower reveal
        stagger: 0.3, // Delay between each card
        ease: 'power2.out' // Smooth easing
      })
    }, techCardsRef)

    return () => ctx.revert()
  }, [])

  return (<>
    <section className="technology section" id='technology' ref={techCardsRef}>
      <h2 className='section-title' data-heading='Technologies I Use'>Tech Stack</h2>

      <div className='technology-container container'>
        <div className='inner-content'>
          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={JavascriptLogo} alt='JavaScript Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>JavaScript</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={ReactLogo} alt='React Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>ReactJs</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={WebpackLogo} alt='Webpack Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Webpack</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={ReactQueryLogo} alt='React Query Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>React Query</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={GraphQLLogo} alt='Graph QL Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>GraphQL</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={NextJsLogo} alt='NextJs Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>NextJs</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={ReduxLogo} alt='Redux Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Redux</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={SocketLogo} alt='Socket IO Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Socket IO</p>

          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={BootstrapLogo} alt='Bootstrap Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Bootstrap</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={SassLogo} alt='Sass Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Sass</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={TailwindLogo} alt='Tailwind CSS Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Tailwind CSS</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={FigmaLogo} alt='Figma Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Figma</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={CanvaLogo} alt='Canva Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Cnava</p>
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default Technology
