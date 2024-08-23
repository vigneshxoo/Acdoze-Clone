import React, { Component } from "react";
import Slider from "react-slick";
import './slick.css'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
 


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <p className="arrow-left" ><GoArrowRight onClick={onClick} className="icon" /></p>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>

      <p className="arrow-right"><GoArrowLeft onClick={onClick} className="icon" /></p>
    </>
  )
}

function CustomArrows() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider-containered">

      <Slider {...settings}>
        <div className="box-slider">

          <div className="scondbox-slider">

            <p>An out-of-the-box conceptual web design and development for a healthy snack brand in India. Won 2 international awards</p>
            <button>view more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/02.jpg" alt="" />
          </div>
        </div>
        {/* 1 */}

        <div className="box-slider">

          <div className="scondbox-slider" >
            <p>A UX oriented custom web development for Rybbon, part of Blackhawk Network, the global leader in branded payment solutions</p>
            <button >view more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/01.png" alt="" />
          </div>
        </div>
        {/* 2 */}

        <div className="box-slider">

          <div className="scondbox-slider">
            <p>
              A custom-designed and developed website project for SELC, a leading career college based in Australia, with over 35 years of experience

            </p>
            <button>view more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/10.jpg" alt="" />
          </div>
        </div>
        {/* 3 */}
        <div className="box-slider">

          <div className="scondbox-slider">
            <p>
              A fully custom web design for India's leading
              Onboarding Due Diligence, Entity Resolution &
              Address Verification company.

            </p>
            <button>view more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/09.jpg" alt="" />
          </div>
        </div>
        {/* 4 */}
        <div className="box-slider">

          <div className="scondbox-slider">
            <p>
              A custom designed and developed, content-
              rich website with 20,000+ pages for Amrita
              University, a top-ranked University in India
            </p>
            <button>view more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/08.jpg" alt="" />
          </div>
        </div>
        {/* 5 */}
        <div className="box-slider">

          <div className="scondbox-slider">
            <p>
              UX design and development for Renit Money, an Axis Bank Brand. We also developed the brand Identity design.

            </p>
            <button>view more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/07.jpg" alt="" />
          </div>
        </div>
        {/* 6 */}
        <div className="box-slider">

          <div className="scondbox-slider">
            <p>
              A conceptual and custom illustrated website designed & developed for a Data Analytics, Al and ML company in the US
            </p>
            <button>view more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/02.jpg" alt="" />
          </div>
        </div>
        {/* 7 */}
        <div className="box-slider">

          <div className="scondbox-slider">
            <p>
              A conceptual and custom
              illustrated website designed &
              developed for a Data Analytics,
              Al and ML company in the US.
            </p>
            <button>view more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/04.jpg" alt="" />
          </div>
        </div>
        {/* 8 */}
        <div className="box-slider">

          <div className="scondbox-slider">
            <p>
              A funky and interactive ecommerce website for an Auto Accessories brand in US. An International award-winning work

            </p>
            <button>viwe more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/06.png" alt="" />
          </div>
        </div>
        {/* 9 */}
        <div className="box-slider">

          <div className="scondbox-slider">
            <p>
              An unconventional ecommerce website with parallax design for a chemical-free cosmetic brand in US.
            </p>
            <button>viwe more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/05.png" alt="" />

          </div>
        </div>
        {/* 10 */}
        <div className="box-slider">

          <div className="scondbox-slider">
            <p>
              A conceptual, custom illustrated website with SVG animation for a Block Chain based product company in Australia
            </p>
            <button>viwe more</button>
          </div>
          <div className="first-slider">
            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/03.png" alt="" />
          </div>


        </div>





      </Slider>
    </div>

  );
}

export default CustomArrows;
