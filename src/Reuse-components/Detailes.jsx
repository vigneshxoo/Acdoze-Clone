import React from 'react';
import './details.css'
import Slider from 'react-slick';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbSquareLetterSFilled } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import { TiSocialGooglePlus } from "react-icons/ti";
export const Detailes = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <>
      <div className='last-slick-arrowl' onClick={onClick}>
     <i>  <GoChevronRight /></i>
      </div>
        
      </>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <>
      <div className='last-slick-arrowr' onClick={onClick}>
      <i><GoChevronLeft /></i>
      </div>
  
        
      </>
    )
  }
    return (
        <div style={{position:'relative'}}>
            <div className='last' >
                <div className='fix-last' style={{position:"relative",zIndex:"0"}}>
                    <div className='last-content '>
                        <h2 className='last-h2'> Let's talk about what we can build together</h2>
                        <p className='last-p'>Whatever may be your requirement - be it a simple website design, a complex data driven web application development, an ecommerce website, a native or cross platform mobile app development, a logo and brand identity design, a video production or a full fledged digital marketing campaign - we have a solution for you.</p>
                        <button>Contact us now for a free quote</button>
                    </div>

                </div>
              
                 <div className='gogle-slick'>
                    <div className='sll-last'>
                        <Slider {...settings}>
                            <div className='last-slick'>
                                <h3>Mumbai</h3>
                                <div className='last-underline'></div>
                                <p className='mumbai'>1st flor,urmi corprate park solars(D)opp.L&t Gate no .6 powai, mumbai-400072</p>
                                <p className='maps'>google maps</p>
                            </div>
                            <div className='last-slick'>
                                <h3>Bangalur</h3>
                                <div className='last-underline'></div>
                                <p className='mumbai'>
                                    #12, 100 Feet Road <br />
                                    Banaswadi,<br />
                                    Bangalore 5600432</p>
                                <p className='maps'>google maps</p>
                            </div>
                            <div className='last-slick'>
                                <h3>Delhi NCR</h3>
                                <div className='last-underline'></div>
                                <p className='mumbai'>
                                    1101 - 11th Floor JMD Megapolis, Sector-48  Gurgaon, Delhi NCR - India</p>
                                <p className='maps'>google maps</p>
                            </div>
                            <div className='last-slick'>
                                <h3>Calicut (SEZ Unit)</h3>
                                <div className='last-underline'></div>
                                <p className='mumbai'>
                                    UL CyberPark  (SEZ) <br />
                                    Nellikode (PO) Kerala <br />India -673 016</p>
                                <p className='maps'>google maps</p>
                            </div>
                            <div className='last-slick'>
                                <h3>Calicut </h3>
                                <div className='last-underline none'></div>
                                <p className='mumbai'>
                                    Westhill, Kozhikodeb <br />
                                    Kerala - 673005 <br />
                                    India</p>
                                <p className='maps'>google maps</p>
                            </div>

                        </Slider>
                    </div>

                </div> 

            </div>
            <div className='nav-menu'>
                <div className="menu">
                    <div className="menu-items1">
                      
                        <ul className='menu-bar'>
                        <h3 className='d-head'>Navigation</h3>
                            <li>Home</li>
                            <li>About</li>
                            <li>Awrds</li>
                            <li>Works</li>
                            <li>services</li>
                            <li>careers</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                        <ul className='menu-bar'>
                            <h3 className='d-head'>Services</h3>
                            <li>Web Devlopment</li>
                            <li>Ux Design</li>
                            <li>Mobile apps</li>
                            <li>Digital markrting</li>
                            <li>Branding</li>
                            <li>Inetrface Design</li>
                            <li>Emerging Technologhy Services</li>
                            <li>Ul Solutions</li>
                        </ul>
                        
                    </div>
                    <div className='contact-us'>
                        
                            
                        <p>Contact us</p>
                        <div className='contact-plus'>
                          <MdOutlineMailOutline/> 
                        <TbSquareLetterSFilled />
                       <IoCallSharp />

                        </div>
                        <div>
                            <FaFacebook />
                            <TfiTwitter />
                            
                            <IoLogoLinkedin />
                            <TiSocialGooglePlus />
                        </div>

                    </div>
                    <div className='new-lwteer'>
                        <input type="" /><label htmlFor=""> Subscribe Now</label>
                        <p>Enter your email ID above to subscribe to our newsletter.</p>
                        <div>
                            <p>16 InterNational Awrds</p>

                        </div>
                        <div>
                            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/bing-ads.png" alt="" />
                            <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/google-partner.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
