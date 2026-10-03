/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const LOADING_MESSAGES = [
  'THE SHADOW AWAKENS...',
  'THE LEGACY RISES...',
  'THE SPIRIT OF THE KING AWAKENS...',
  'THE POWER WITHIN RISES...',
  'THE KINGDOM AWAITS...',
  'THE TIME HAS COME...',
  'ENTER THE WORLD OF DHRUV PARMAR...'
]
const Loader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const loaderRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  useEffect(() => {
    const totalDuration = 15000
    const intervalTime = 50
    const increment = 100 / (totalDuration / intervalTime)

    let currentProgress = 0

    const timer = setInterval(() => {
      currentProgress += increment

      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(timer)
        setProgress(100)
        setMessageIndex(LOADING_MESSAGES.length - 1)

        setTimeout(() => {
          // Trigger system vibration if supported by the browser/device
          if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate([100, 50, 100])
          }

          const tl = gsap.timeline({
            onComplete: () => {
              if (onLoaded) onLoaded()
            }
          })

          tl.to(contentRef.current, {
            scale: 1.02,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in'
          }).to(
            loaderRef.current,
            {
              opacity: 0,
              duration: 0.8,
              ease: 'power2.inOut'
            },
            '-=0.2'
          )
        }, 400)
      } else {
        setProgress(Math.floor(currentProgress))
        const msgIdx = Math.min(
          Math.floor((currentProgress / 100) * LOADING_MESSAGES.length),
          LOADING_MESSAGES.length - 1
        )
        setMessageIndex(msgIdx)
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onLoaded])

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      loaderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 }
    ).fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=0.2'
    )
  }, [])

  const getDynamicStatus = () => {
    if (progress < 40) return 'GETTING READY'
    if (progress < 90) return 'ALMOST THERE'
    return 'DONE'
  }

  return (
    <div ref={loaderRef} className="loader-overlay">
      <div className="loader-ambient-glow" />
      <div className="loader-grid-overlay" />

      <div className="loader-content" ref={contentRef}>
        <div className="loader-top-bar">
          <span className="loader-badge">SECURE ACCESS</span>
          <span className="loader-counter">{progress}%</span>
        </div>

        <div className="loader-center-stage">
          <div className="loader-title-group">
            <h1 className="loader-heading">DHRUV PARMAR</h1>
            <p className="loader-subheading">INTERACTIVE PORTFOLIO EXPERIENCE</p>
          </div>

          <div className="loader-status-container">
            <span className="loader-status-text" key={messageIndex}>{LOADING_MESSAGES[messageIndex]}</span>
          </div>
        </div>

        <div className="loader-bottom-bar">
          <div className="loader-progress-track">
            <div className="loader-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="loader-footer-meta">
            <span>LOADING...</span>
            <span className="loader-dynamic-status">{getDynamicStatus()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
