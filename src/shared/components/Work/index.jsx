/* eslint-disable no-unused-vars */
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import img1 from '../../../assets/img/physiotrends-logo.png'
import img2 from '../../../assets/img/physiobrothers.png'
import img3 from '../../../assets/img/bhagvadgita.png'
import img4 from '../../../assets/img/yoga-sanskriti.png'
import img5 from '../../../assets/img/coffee-shop.png'
import img6 from '../../../assets/img/resturant-design.png'
import img7 from '../../../assets/img/MaaKrupa.png'
import img8 from '../../../assets/img/Medibazar.png'
import { motion } from 'framer-motion'

const Work = () => {
  const [buttonToggle, setButtonToggle] = useState({
    all: true,
    web: false,
    tech: false
    // design: false
  })

  const [modal, setModal] = useState({ open: false })
  return (
    <>
      <section className='work section' id='work'>
        <h2 data-heading='My Portfolio' className='section-title'>Recent Works</h2>

        <div className='work-filters'>
          <span className={`work-item ${buttonToggle?.all && 'active-work'}`} onClick={() => setButtonToggle({ all: true })}>All</span>
          <span className={`work-item ${buttonToggle?.web && 'active-work'}`} onClick={() => setButtonToggle({ web: true })}>Web</span>
          <span className={`work-item ${buttonToggle?.tech && 'active-work'}`} onClick={() => setButtonToggle({ tech: true })}>Technology</span>
          {/* <span className={`work-item ${buttonToggle?.design && 'active-work'}`} onClick={() => setButtonToggle({ design: true })}>Design</span> */}
        </div>

        {buttonToggle?.all &&
          <>
            <div className='work-container container grid'>
              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img1} alt="" className='work-img img-fluid' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>PhysioTrends</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Development,',
                      title: 'Physiotrends',
                      desc: 'This platform was built using Next.js, allowing physiotherapists to directly publish their articles. It integrates modern web technologies, ensuring a user-friendly experience with features like article submission and enhanced content management.',
                      date: '9 Jun, 2024',
                      technology: 'NextJs, SEO, Google APIs',
                      role: 'FrontEnd + BackEnd',
                      domain: 'https://physiotrends.vercel.app',
                      img: img1
                    })}>Demo</span>
                </motion.div>
              </div>

              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img2} alt="" className='work-img img-fluid' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>ThePhysioBrothers</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design',
                      title: 'ThePhysioBrothers',
                      desc: 'ThePhysioBrothers is a comprehensive platform for physiotherapy, managed by renowned professionals Dr. Darshan Parmar and Dr. Sujay Makwana. The site features blogs, service bookings, and appointment scheduling, providing a seamless experience for users seeking physiotherapy expertise.',
                      date: '11 Sept, 2022',
                      technology: 'HTML, CSS, JavaScript, Bootstrap',
                      domain: 'https://thephysiobrothers.netlify.app/',
                      img: img2
                    })}>Demo</span>
                </motion.div>
              </div>

              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img3} alt="" className='work-img' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>BhagavadGita - As It Is</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design & Development',
                      title: 'BhagavadGita - As It Is',
                      desc: "BhagavadGita - The timeless 'Song of Life' offers an introduction to the sacred Hindu scripture, 'Bhagavad Gita.' This platform provides insights into Lord Krishna, chapters (Adhyayas), stunning wallpapers, inspirational quotes, and the ability to listen to devotional Bhajans.",
                      date: '29 May, 2023',
                      technology: 'NextJs, NextJs APIs, Bootstrap',
                      domain: 'https://bhagavad-gita-zeta.vercel.app/',
                      img: img3,
                      role: 'FrontEnd + BackEnd'
                    })}>Demo</span>
                </motion.div>
              </div>

              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img4} alt="" className='work-img' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>Yoga Sanskriti</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design',
                      title: 'Yoga Sanskriti',
                      desc: 'Yoga Sanskriti is a comprehensive platform built using React, where people can book online yoga classes, courses, physiotherapy sessions, and telerehabilitation services. Customers can also purchase subscription plans. The site is inspired by global and national organizations such as WHO, Ministry of Ayush, Indian Federation of Yoga, Gujarat State Yoga Board, and Fit India.',
                      date: '10 Feb, 2024',
                      technology: 'React.js, Bootstrap',
                      domain: 'https://yogasanskriti.netlify.app/',
                      img: img4
                    })}
                  >
                    Demo
                  </span>
                </motion.div>
              </div>

              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img7} alt="" className='work-img' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>MaaKrupa Hardware & Machine Tools</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design',
                      title: 'MaaKrupa Hardware & Machine Tools',
                      desc: "This website was developed for my father's business, which specializes in selling various hardware and machinery, including power tools, hand tools, hand drill machines, compressor machines, welding machines, welding rods, abrasives, and more.",
                      date: '19 Sept, 2021',
                      technology: 'HTML, CSS, Bootstrap',
                      domain: 'https://dhruvparmar2310.github.io/MaaKrupa/index.html',
                      img: img7
                    })}
                  >
                    Demo
                  </span>
                </motion.div>
              </div>

              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img8} alt="" className='work-img' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>MediBazar+</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design & Development',
                      title: 'MediBazar+',
                      desc: 'I designed MediBazar+ as an online E-Commerce platform where customers can purchase medicines 24/7, from anywhere, at any time. It offers a variety of services, including Covid-19 products, free doctor consultations, healthcare products, and much more.',
                      date: '01 July, 2021',
                      technology: 'HTML, CSS, Bootstrap, .NET, MS SQL',
                      domain: 'https://dhruvparmar2310.github.io/MediBazar/',
                      img: img8,
                      role: 'FrontEnd + BackEnd'
                    })}
                  >
                    Demo
                  </span>
                </motion.div>
              </div>
            </div>
          </>
        }

        {buttonToggle?.web &&
          <>
            <div className='work-container container grid'>
              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img2} alt="" className='work-img img-fluid' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>ThePhysioBrothers</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design',
                      title: 'ThePhysioBrothers',
                      desc: 'ThePhysioBrothers is a comprehensive platform for physiotherapy, managed by renowned professionals Dr. Darshan Parmar and Dr. Sujay Makwana. The site features blogs, service bookings, and appointment scheduling, providing a seamless experience for users seeking physiotherapy expertise.',
                      date: '11 Sept, 2022',
                      technology: 'HTML, CSS, JavaScript, Bootstrap',
                      domain: 'https://thephysiobrothers.netlify.app/',
                      img: img2
                    })}>Demo</span>
                </motion.div>
              </div>

              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img4} alt="" className='work-img' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>Yoga Sanskriti</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design',
                      title: 'Yoga Sanskriti',
                      desc: 'Yoga Sanskriti is a comprehensive platform built using React, where people can book online yoga classes, courses, physiotherapy sessions, and telerehabilitation services. Customers can also purchase subscription plans. The site is inspired by global and national organizations such as WHO, Ministry of Ayush, Indian Federation of Yoga, Gujarat State Yoga Board, and Fit India.',
                      date: '10 Feb, 2024',
                      technology: 'React.js, Bootstrap',
                      domain: 'https://yogasanskriti.netlify.app/',
                      img: img4
                    })}
                  >
                    Demo
                  </span>
                </motion.div>
              </div>

              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img7} alt="" className='work-img' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>MaaKrupa Hardware & Machine Tools</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design',
                      title: 'MaaKrupa Hardware & Machine Tools',
                      desc: "This website was developed for my father's business, which specializes in selling various hardware and machinery, including power tools, hand tools, hand drill machines, compressor machines, welding machines, welding rods, abrasives, and more.",
                      date: '19 Sept, 2021',
                      technology: 'HTML, CSS, Bootstrap',
                      domain: 'https://dhruvparmar2310.github.io/MaaKrupa/index.html',
                      img: img7
                    })}
                  >
                    Demo
                  </span>
                </motion.div>
              </div>
            </div>
          </>
        }

        {buttonToggle?.tech &&
          <>
            <div className='work-container container grid'>
              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img1} alt="" className='work-img img-fluid' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>PhysioTrends</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Development,',
                      title: 'Physiotrends',
                      desc: 'This platform was built using Next.js, allowing physiotherapists to directly publish their articles. It integrates modern web technologies, ensuring a user-friendly experience with features like article submission and enhanced content management.',
                      date: '9 Jun, 2024',
                      technology: 'NextJs, SEO, Google APIs',
                      role: 'FrontEnd + BackEnd',
                      domain: 'https://physiotrends.vercel.app',
                      img: img1
                    })}>Demo</span>
                </motion.div>
              </div>

              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img3} alt="" className='work-img' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>BhagavadGita - As It Is</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design & Development',
                      title: 'BhagavadGita - As It Is',
                      desc: "BhagavadGita - The timeless 'Song of Life' offers an introduction to the sacred Hindu scripture, 'Bhagavad Gita.' This platform provides insights into Lord Krishna, chapters (Adhyayas), stunning wallpapers, inspirational quotes, and the ability to listen to devotional Bhajans.",
                      date: '29 May, 2023',
                      technology: 'NextJs, NextJs APIs, Bootstrap',
                      domain: 'https://bhagavad-gita-zeta.vercel.app/',
                      img: img3,
                      role: 'FrontEnd + BackEnd'
                    })}>Demo</span>
                </motion.div>
              </div>

              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img4} alt="" className='work-img' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>Yoga Sanskriti</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design',
                      title: 'Yoga Sanskriti',
                      desc: 'Yoga Sanskriti is a comprehensive platform built using React, where people can book online yoga classes, courses, physiotherapy sessions, and telerehabilitation services. Customers can also purchase subscription plans. The site is inspired by global and national organizations such as WHO, Ministry of Ayush, Indian Federation of Yoga, Gujarat State Yoga Board, and Fit India.',
                      date: '10 Feb, 2024',
                      technology: 'React.js, Bootstrap',
                      domain: 'https://yogasanskriti.netlify.app/',
                      img: img4
                    })}
                  >
                    Demo
                  </span>
                </motion.div>
              </div>

              <div className='work-card'>
                <div className='work-card-header'>
                  <img src={img8} alt="" className='work-img' />
                </div>
                <motion.div
                  className="work-card-body"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className='work-title'>MediBazar+</h3>
                  <span
                    className='work-button'
                    onClick={() => setModal({
                      open: true,
                      subtitle: 'Featured Project - Web Design & Development',
                      title: 'MediBazar+',
                      desc: 'I designed MediBazar+ as an online E-Commerce platform where customers can purchase medicines 24/7, from anywhere, at any time. It offers a variety of services, including Covid-19 products, free doctor consultations, healthcare products, and much more.',
                      date: '01 July, 2021',
                      technology: 'HTML, CSS, Bootstrap, .NET, MS SQL',
                      domain: 'https://dhruvparmar2310.github.io/MediBazar/',
                      img: img8,
                      role: 'FrontEnd + BackEnd'
                    })}
                  >
                    Demo
                  </span>
                </motion.div>
              </div>
            </div>
          </>
        }

        {/* {buttonToggle?.design &&
          <>
            <div className='work-container container grid'>
              <div className='work-card'>
                <img src={img1} alt="" className='work-img' />
                <h3 className='work-title'>My Portfolio</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'My Portfolio Design', desc: "I've designed my portfolio website from the scratch in ReactJs Technology. You can see the modern Sass design.", date: '10 Jan, 2024', technology: 'ReactJs, Sass, Bootstrap', domain: 'https://dhanparmar.netlify.app', img: img1 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>

              <div className='work-card'>
                <img src={img2} alt="" className='work-img' />
                <h3 className='work-title'>ThePhysioBrothers</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'ThePhysioBrothers', desc: "ThePhysioBrothers - An online platform for physiotherphy, managed by the two Expert Doctor's such as, Dr. Darshan Parmar & Dr. Sujay Makwana. You can read blogs, take service, take appointment, etc.", date: '11 Sept, 2022', technology: 'HTML, CSS, JavaScript, Bootstrap', domain: 'https://thephysiobrothers.netlify.app/', img: img2 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>

              <div className='work-card'>
                <img src={img5} alt="" className='work-img' />
                <h3 className='work-title'>Coffee Shop</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'Coffee Shop', desc: "Online Coffee Shop - I've made this design from the Scratch using pure HTML and CSS concept.", date: '16 Aug, 2022', technology: 'HTML, CSS', domain: 'https://dhruvparmar2310.github.io/CoffeeShop/index.html', img: img5 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>

              <div className='work-card'>
                <img src={img6} alt="" className='work-img' />
                <h3 className='work-title'>Resturant Design</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'Fragrance of South - Resturant', desc: 'Fragrance of South - Resturant Website. I have made website in 2 days Design competition conducted by RAO Codefest, and my design got selected in it. I have made this website without any reference, in Bootstrap.', date: '24 April, 2022', technology: 'HTML, CSS, Bootstrap', domain: 'https://dhruvparmar2310.github.io/raocodefest2.0/', img: img6 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>
            </div>
          </>
        } */}

        {modal?.open &&
          <div className='portfolio-popup' onBlur={() => setModal({ open: false })}>
            <div className='popup-inner'>
              <div className="popup-content grid">
                <span className="popup-close" onClick={() => setModal({ open: false })}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>

                <div className='thumbnail'>
                  <img src={modal?.img} alt="" className='popup-img' />
                </div>
                <div className="popup-info">
                  <div className="popup-subtitle">{modal?.subtitle}</div>
                  <div className="popup-body">
                    <h3 className='details-title'>{modal?.title}</h3>
                    <p className='details-description'>{modal?.desc}</p>

                    <ul className='details-info'>
                      <li>Created - <span>{modal?.date}</span></li>
                      <li>Technology - <span>{modal?.technology}</span></li>
                      <li>Role - <span>{modal?.role || 'FrontEnd'}</span></li>
                      <li>View - <span><a href={modal?.domain} target='_blank' rel='noreferrer'>{modal?.domain}</a></span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </section >
    </>
  )
}

export default Work
