import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const AnimationLogo = (props) => {
  const svgRef = useRef(null)

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll('path')

    // Set initial dash properties for signature effect
    paths.forEach((path) => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = length
      path.style.strokeDashoffset = length
    })

    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })

    // Step 1: Animate the outer bracket/main structural paths first
    tl.to(paths[0], { strokeDashoffset: 0, duration: 1.5 }) // Background/Base
      .to(paths[1], { strokeDashoffset: 0, duration: 1 }, '-=1') // Outer structures

    // Step 2: Stagger the inner content paths to write sequentially
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 0.8,
      stagger: 0.05
    }, '-=0.5')
  }, [])

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width={397}
      height={153}
      {...props}
    >
      <path fill="#010001" stroke="#010001" strokeWidth="2" d="M0 0h397v153H0V0Z" />
      <path
        fill="#703ED5"
        stroke="#703ED5"
        strokeWidth="2"
        d="M117.863 45.14c4.7 2.92 7.04 5.66 9.14 10.86 1.1 8.42.5 16.66-4 24-2.75 2.81-2.75 2.81-6 5-.6.46-1.2.93-1.82 1.41-4.54 3.29-8.29 4.37-13.91 4.09-3.54-.78-5.17-2.65-7.27-5.5l-1-2h2V54h-3c-1.13-3.75-1.13-3.75 0-6 7.54-5.13 17.28-6.28 25.86-2.86Z"
      />
      {/* Apply stroke and strokeWidth across your remaining paths similarly */}
    </svg>
  )
}

export default AnimationLogo
