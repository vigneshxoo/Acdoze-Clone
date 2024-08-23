import React from 'react'
import './blog.css'

export const Cycle = () => {
  return (
    <div className="flip-top">
    <div data-aos="fade-right" data-aos-duration="5000" data-aos-once="false"  className='flip-img' style={{ position: 'absolute' }}>
      <div>
        <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/cycle-3.gif" alt="" />
      </div>
      <div data-aos="fade-left"data-aos-duration="5000" data-aos-once="false"  >
        <div className="flip-card" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3 className='acdoe'>ACCDIE</h3>
              <p className='our-mascot'>OUR MASCOT</p>
            </div>
            <div  className="flip-card-back">
              <h3 className='flip-content'>We love illustrations and Acodie, our mascot, is a cool showpiece of our creativity. The theme of this website is based on Acodie, wherein you could find Acodie in every page of this site - in various styles and emotions</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}
