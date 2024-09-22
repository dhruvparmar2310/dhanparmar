/* eslint-disable no-unused-vars */
import { useInView } from 'framer-motion'
import React, { useRef } from 'react'
import ReactLogo from '../../../assets/img/tech/react.png'
import ReactQueryLogo from '../../../assets/img/tech/react-query.png'
import GraphQLLogo from '../../../assets/img/tech/graphql.png'
import ReduxLogo from '../../../assets/img/tech/redux.png'
import BootstrapLogo from '../../../assets/img/tech/bootstrap-logo.png'
import SassLogo from '../../../assets/img/tech/Sass-Logo.png'
import TailwindLogo from '../../../assets/img/tech/Tailwind_CSS.png'
import FigmaLogo from '../../../assets/img/tech/figma-logo.png'
import MongoLogo from '../../../assets/img/tech/MongoDB-Logo.png'
import NextJsLogo from '../../../assets/img/tech/next-js-logo.png'

const Technology = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, { once: true })
  return (<>
    <section className="technology section" id='technology' ref={ref}>
      <h2 className='section-title' data-heading='Technologies I Use'>Tech Stack</h2>

      <div className='technology-container'>
        <div className='inner-content'>
          <span>
            <img src={ReactLogo} alt='React Logo' className='img-fluid' />
          </span>
          <span>
            <img src={ReactQueryLogo} alt='React Query Logo' className='img-fluid' />
          </span>
          <span>
            <img src={GraphQLLogo} alt='Graph QL Logo' className='img-fluid' />
          </span>
          <span>
            <img src={ReduxLogo} alt='Redux Logo' className='img-fluid' />
          </span>
          <span>
            <img src={NextJsLogo} alt='NextJs Logo' className='img-fluid' />
          </span>
          <span>
            <img src={MongoLogo} alt='MongoDB Logo' className='img-fluid' />
          </span>
        </div>
        <div className='inner-content'>
          <span>
            <img src={BootstrapLogo} alt='Bootstrap Logo' className='img-fluid' />
          </span>
          <span>
            <img src={SassLogo} alt='Sass Logo' className='img-fluid' />
          </span>
          <span>
            <img src={TailwindLogo} alt='Tailwind CSS Logo' className='img-fluid' />
          </span>
          <span>
            <img src={FigmaLogo} alt='Figma Logo' className='img-fluid' />
          </span>
        </div>
      </div>
    </section>
  </>)
}

export default Technology
