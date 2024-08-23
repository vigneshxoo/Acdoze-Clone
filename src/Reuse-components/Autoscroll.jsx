import React from 'react'
import Slider from 'react-slick';
import './reuse.css'

const Autoscroll = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div>
      <div className='center'>
        <div className="slider-containerr">
          <Slider {...settings}>
            <div>
              <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/clients/amrita.png" alt="" />
            </div>
            <div>
              <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/clients/quantifi.png" alt="" />
            </div>
            <div>
              <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/clients/datamark.png" alt="" />
            </div>
            <div>
              <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/clients/panasonic.png" alt="" />
            </div>
            <div>
              <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/clients/anchor.png" alt="" />
            </div>
            <div>
              <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/clients/cavincare.png" alt="" />
            </div>
            <div>
              <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/clients/axis-bank.png" alt="" />
            </div>
            <div>
              <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/clients/switzerland.png" alt="" />
            </div>
            <div>
              <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/clients/sobha.png" alt="" />
            </div>

          </Slider>
        </div>
      </div>


    </div>
  )
}

export default Autoscroll