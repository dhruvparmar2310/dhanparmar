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
import CursorLogo from '../../../assets/img/tech/cursor-ai-logo.png'
import ClaudeLogo from '../../../assets/img/tech/claude-code.png'
import AntigravityLogo from '../../../assets/img/tech/antigravity-logo.png'
import NodeLogo from '../../../assets/img/tech/node-logo.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Technology = () => {
  const technologyCardsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-category-group', {
        scrollTrigger: {
          trigger: technologyCardsRef.current,
          start: 'top 80%'
        },
        opacity: 0,
        y: 40,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }, technologyCardsRef)

    return () => ctx.revert()
  }, [])

  const frontendTech = [
    { name: 'ReactJs', img: ReactLogo },
    { name: 'NextJs', img: NextJsLogo },
    // { name: 'VueJs', img: VueLogo },
    { name: 'React Query', img: ReactQueryLogo },
    { name: 'GraphQL', img: GraphQLLogo },
    { name: 'React Router', img: ReactRouterLogo },
    { name: 'Redux', img: ReduxLogo },
    { name: 'Tailwind CSS', img: TailwindLogo },
    { name: 'Bootstrap', img: BootstrapLogo },
    { name: 'Sass', img: SassLogo },
    { name: 'Webpack', img: WebpackLogo }
  ]

  const backendTech = [
    { name: 'NodeJs', img: NodeLogo },
    { name: 'ExpressJs', img: ExpressLogo },
    { name: 'Socket IO', img: SocketLogo }
  ]

  const toolsDevOps = [
    { name: 'Git', img: GitLogo },
    { name: 'Github', img: GithubLogo },
    { name: 'Jenkins', img: JenkinsLogo },
    { name: 'Jira', img: JiraLogo }
    // { name: 'Figma', img: FigmaLogo },
    // { name: 'Canva', img: CanvaLogo }
    // { name: 'Figma', img: FigmaLogo }
  ]

  const aiTools = [
    { name: 'Cursor AI', img: CursorLogo },
    { name: 'Claude Code', img: ClaudeLogo },
    // { name: 'ChatGPT', img: FigmaLogo },
    { name: 'Antigravity', img: AntigravityLogo }
  ]

  return (<>
    <section className="technology section" id='technology' ref={technologyCardsRef}>
      <h2 className='section-title' data-heading='Technologies I Use'>Tech Stack</h2>

      <div className='technology-container container'>

        {/* Frontend Section */}
        <div className='tech-category-group frontend-group'>
          <h3 className='tech-category-title'>Frontend</h3>
          <div className='inner-content'>
            {frontendTech.map((tech, idx) => (
              <div className='tech-card' key={idx}>
                <div className='tech-icon'>
                  <img src={tech.img} alt={`${tech.name} Logo`} className='img-fluid' />
                </div>
                <p className='tech-name'>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='tech-bottom-grid'>
          {/* Backend Section */}
          <div className='tech-category-group'>
            <h3 className='tech-category-title'>Backend</h3>
            <div className='inner-content'>
              {backendTech.map((tech, idx) => (
                <div className='tech-card' key={idx}>
                  <div className='tech-icon'>
                    <img src={tech.img} alt={`${tech.name} Logo`} className='img-fluid' />
                  </div>
                  <p className='tech-name'>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & DevOps Section */}
          <div className='tech-category-group'>
            <h3 className='tech-category-title'>Tools & DevOps</h3>
            <div className='inner-content'>
              {toolsDevOps.map((tech, idx) => (
                <div className='tech-card' key={idx}>
                  <div className='tech-icon'>
                    <img src={tech.img} alt={`${tech.name} Logo`} className='img-fluid' />
                  </div>
                  <p className='tech-name'>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools Section */}
          <div className='tech-category-group'>
            <h3 className='tech-category-title'>AI Tools</h3>
            <div className='inner-content'>
              {aiTools.map((tech, idx) => (
                <div className='tech-card' key={idx}>
                  <div className='tech-icon'>
                    <img src={tech.img} alt={`${tech.name} Logo`} className='img-fluid' />
                  </div>
                  <p className='tech-name'>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  </>)
}

export default Technology
