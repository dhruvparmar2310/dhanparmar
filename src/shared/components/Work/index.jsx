import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import img1 from '../../../assets/img/my-portfolio.png'
import img2 from '../../../assets/img/thephysiobrothers.png'
import img3 from '../../../assets/img/bhagavad-gita.png'
import img4 from '../../../assets/img/resturant-app.png'
import img5 from '../../../assets/img/coffee-shop.png'
import img6 from '../../../assets/img/resturant-design.png'
import img7 from '../../../assets/img/MaaKrupa.png'
import img8 from '../../../assets/img/MediBazar+.png'

const Work = () => {
  const [buttonToggle, setButtonToggle] = useState({
    all: true,
    web: false,
    tech: false,
    design: false
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
          <span className={`work-item ${buttonToggle?.design && 'active-work'}`} onClick={() => setButtonToggle({ design: true })}>Design</span>
        </div>

        {buttonToggle?.all &&
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
                <img src={img3} alt="" className='work-img' />
                <h3 className='work-title'>BhagavadGita - As It Is</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'BhagavadGita - As It Is', desc: "BhagavadGita - The Song of Life. It includes the Introduction about the Hindu Holly Book - 'Bhagavad Gita', about Lord Krishna, Adhyay's, beautiful wallpapers of Lord Krishna, quotes, listen Bhajan's.", date: '29 May, 2023', technology: 'NextJs, Bootstrap', domain: 'https://bhagavad-gita-zeta.vercel.app/', img: img3, role: 'FrontEnd + BackEnd' })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>

              <div className='work-card'>
                <img src={img4} alt="" className='work-img' />
                <h3 className='work-title'>Resturant App</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - App', title: 'Resturant App', desc: 'This app is made in Redux. In this app user can select menu by category, add to cart order, add any extra items, checkout order details, can change app language to Hindi language.', date: '29 Nov, 2022', technology: 'ReactJs, Redux, Bootstrap', domain: 'https://dhruv-restaurant-app.netlify.app/', img: img4 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
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

              <div className='work-card'>
                <img src={img7} alt="" className='work-img' />
                <h3 className='work-title'>MaaKrupa</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'MaaKrupa Hardware & Machine Tools', desc: "This website is made for my Father's Business. Our Business is to sell all types of Hardware and Machinery, such as Power Tools, Hand Tool, Welding Rods, Abbrasives, etc.", date: '19 Sept, 2021', technology: 'HTML, CSS, Bootstrap', domain: 'https://dhruvparmar2310.github.io/MaaKrupa/index.html', img: img7 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>

              <div className='work-card'>
                <img src={img8} alt="" className='work-img' />
                <h3 className='work-title'>MediBazar+</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'MediBazar+', desc: "I've specially designed this website as an online buying medicine 24/7 from anywhere and anytime. From this website Customer can read articles, buy Covid-19 products, take free Doctor Consultancy, Buy Healcare Products, Medicines, etc.", date: '01 July, 2021', technology: 'HTML, CSS, Bootstrap, .Net, MS SQL', domain: 'https://dhruvparmar2310.github.io/MediBazar/', img: img8, role: 'FrontEnd + BackEnd' })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>
            </div>
          </>
        }

        {buttonToggle?.web &&
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
                <img src={img3} alt="" className='work-img' />
                <h3 className='work-title'>BhagavadGita - As It Is</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'BhagavadGita - As It Is', desc: "BhagavadGita - The Song of Life. It includes the Introduction about the Hindu Holly Book - 'Bhagavad Gita', about Lord Krishna, Adhyay's, beautiful wallpapers of Lord Krishna, quotes, listen Bhajan's.", date: '29 May, 2023', technology: 'NextJs, Bootstrap', domain: 'https://bhagavad-gita-zeta.vercel.app/', img: img3 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>

              <div className='work-card'>
                <img src={img7} alt="" className='work-img' />
                <h3 className='work-title'>MaaKrupa</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'MaaKrupa Hardware & Machine Tools', desc: "This website is made for my Father's Business. Our Business is to sell all types of Hardware and Machinery, such as Power Tools, Hand Tool, Welding Rods, Abbrasives, etc.", date: '19 Sept, 2021', technology: 'HTML, CSS, Bootstrap', domain: 'https://dhruvparmar2310.github.io/MaaKrupa/index.html', img: img7 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>

              <div className='work-card'>
                <img src={img8} alt="" className='work-img' />
                <h3 className='work-title'>MediBazar+</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'MediBazar+', desc: "I've specially designed this website as an online buying medicine 24/7 from anywhere and anytime. From this website Customer can read articles, buy Covid-19 products, take free Doctor Consultancy, Buy Healcare Products, Medicines, etc.", date: '01 July, 2021', technology: 'HTML, CSS, Bootstrap, .Net, MS SQL', domain: 'https://dhruvparmar2310.github.io/MediBazar/', img: img8, role: 'FrontEnd + BackEnd' })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>
            </div>
          </>
        }

        {buttonToggle?.tech &&
          <>
            <div className='work-container container grid'>
              <div className='work-card'>
                <img src={img1} alt="" className='work-img' />
                <h3 className='work-title'>My Portfolio</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'My Portfolio Design', desc: "I've designed my portfolio website from the scratch in ReactJs Technology. You can see the modern Sass design.", date: '10 Jan, 2024', technology: 'ReactJs, Sass, Bootstrap', domain: 'https://dhanparmar.netlify.app', img: img1 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>

              <div className='work-card'>
                <img src={img3} alt="" className='work-img' />
                <h3 className='work-title'>BhagavadGita - As It Is</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - Design', title: 'BhagavadGita - As It Is', desc: "BhagavadGita - The Song of Life. It includes the Introduction about the Hindu Holly Book - 'Bhagavad Gita', about Lord Krishna, Adhyay's, beautiful wallpapers of Lord Krishna, quotes, listen Bhajan's.", date: '29 May, 2023', technology: 'NextJs, Bootstrap', domain: 'https://bhagavad-gita-zeta.vercel.app/', img: img3 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>

              <div className='work-card'>
                <img src={img4} alt="" className='work-img' />
                <h3 className='work-title'>Resturant App</h3>
                <span className='work-button' onClick={() => setModal({ open: true, subtitle: 'Featured - App', title: 'Resturant App', desc: 'This app is made in Redux. In this app user can select menu by category, add to cart order, add any extra items, checkout order details, can change app language to Hindi language.', date: '29 Nov, 2022', technology: 'ReactJs, Redux, Bootstrap', domain: 'https://dhruv-restaurant-app.netlify.app/', img: img4 })}>Demo <FontAwesomeIcon icon={faArrowRight} className='button-icon' /></span>
              </div>
            </div>
          </>
        }

        {buttonToggle?.design &&
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
        }

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
      </section>
    </>
  )
}

export default Work
