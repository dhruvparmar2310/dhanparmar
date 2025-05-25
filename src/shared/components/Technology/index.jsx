/* eslint-disable no-unused-vars */
import { useInView } from 'framer-motion'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
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
import WebpackLogo from '../../../assets/img/tech/webpack.png'
import ReactRouterLogo from '../../../assets/img/tech/react-router.png'
import GitLogo from '../../../assets/img/tech/git_icon.png'
import GithubLogo from '../../../assets/img/tech/github.png'
import VueLogo from '../../../assets/img/tech/vue.png'
import CanvaLogo from '../../../assets/img/tech/canva.png'
import ExpressLogo from '../../../assets/img/tech/Express.png'
import JenkinsLogo from '../../../assets/img/tech/jenkins.png'
import JiraLogo from '../../../assets/img/tech/jira.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Technology = () => {
  const technologyCardsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-card', {
        scrollTrigger: {
          trigger: technologyCardsRef.current,
          start: 'top 80%'
        },
        opacity: 0,
        y: 50, // a little more distance for ghost effect
        duration: 2, // slower
        stagger: 0.4, // slower appearance one-by-one
        ease: 'power3.out' // smooth, ghost-like easing
      })
    }, technologyCardsRef)

    return () => ctx.revert()
  }, [])

  return (<>
    <section className="technology section" id='technology' ref={technologyCardsRef}>
      <h2 className='section-title' data-heading='Technologies I Use'>Tech Stack</h2>

      <div className='technology-container container'>
        <div className='inner-content'>
          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={ReactLogo} alt='React Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>ReactJs</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={NextJsLogo} alt='NextJs Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>NextJs</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={VueLogo} alt='VueJs Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>VueJs</p>
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
              <img src={ReactRouterLogo} alt='React Router Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>React Router</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={ExpressLogo} alt='ExpressJs Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>ExpressJs</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={ReduxLogo} alt='Redux Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Redux</p>

          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={GitLogo} alt='Git Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Git</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={GithubLogo} alt='Github Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Github</p>
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
            <p className='tech-name'>Canva</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={JenkinsLogo} alt='Jenkins Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Jenkins</p>
          </div>

          <div className='tech-card'>
            <div className='tech-icon'>
              <img src={JiraLogo} alt='Jira Logo' className='img-fluid' />
            </div>
            <p className='tech-name'>Jira</p>
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default Technology
