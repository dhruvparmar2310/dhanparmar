import React, { useEffect, useRef } from 'react'
import img6 from '../../../assets/img/gallery/img-6.jpg'
import img8 from '../../../assets/img/gallery/img-8.jpeg'
import img9 from '../../../assets/img/gallery/img-9.jpeg'
import img10 from '../../../assets/img/gallery/img-10.jpg'
import img12 from '../../../assets/img/gallery/img-12.jpg'
import img5 from '../../../assets/img/gallery/img-5.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: img9, label: 'Ride Legacy' },
  { src: img12, label: 'Karma Reflection' },
  { src: img6, label: "Nature's Golden Embrace" },
  { src: img5, label: 'Silent Strength' },
  { src: img8, label: 'JSX of Success' },
  { src: img10, label: 'Night Chronicles' }
]

const Gallery = () => {
  const containerRef = useRef(null)
  const descriptionRef = useRef(null)
  useEffect(() => {
    const items = containerRef.current.querySelectorAll('.item')
    const description = descriptionRef.current

    gsap.fromTo(description,
      {
        opacity: 0,
        y: 40,
        filter: 'blur(10px)'
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: description,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    )

    items.forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          y: 80,
          filter: 'blur(20px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 2,
          ease: 'slow(0.7, 0.7, false)',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
  }, [])
  return (
    <section className='gallery-section section' id="clicks">
      <h2 data-heading="Captured Moments" className="section-title">Gallery</h2>

      <div className='container' ref={containerRef}>
        <p ref={descriptionRef}>Frames that speak without words</p>
        <div className='gallery'>
          {images.map(({ src, label }, index) => (
            <div className='item' key={index}>
              <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
              <div className="hover-popup">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
