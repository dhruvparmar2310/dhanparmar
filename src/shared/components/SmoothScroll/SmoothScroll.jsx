/* eslint-disable react/prop-types */
import React from 'react'
import { ReactLenis } from 'lenis/react'

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      // options={{
      //     lerp: 0.1,
      //     duration: 1.2,
      //     smoothWheel: true,
      //     wheelMultiplier: 1,
      //     touchMultiplier: 2,
      //     infinite: false,
      // }}
      options={{
        lerp: 0.1,
        duration: 1.8,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
