import React from 'react'
import './contries.css'
import { BiWorld } from "react-icons/bi";
import { PiNotepadBold } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import Slider from 'react-slick';

export const Contries = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div style={{ position: 'relative' }}>
            <div className='outer'>
                <div className='inner-img'>
                    <div className='flex-w'>
                        <div className='colom'>
                            <div>
                                <p className='num'><span><BiWorld className='wicon' /></span>80+</p>
                                <p className='fpp'>countries saved</p>
                            </div>
                            <div>
                                <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/aco-icon-1.png" alt="" />
                            </div>

                        </div>
                        <div className='colom'>
                            <div>
                                <p className='num'><span><PiNotepadBold className='wicon' /></span>1000+</p>
                                <p className='fpp'>Projects completed</p>
                            </div>
                            <div>
                                <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/projects-icon.png" alt="" />
                            </div>
                        </div>
                        <div className='colom'>
                            <div>
                                <p className='num'><span><FaTrophy className='wicon' /></span>16</p>
                                <p className='fpp'>Internatonal Awrds</p>
                            </div>
                            <div>
                                <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/awards-icon.png" alt="" />
                            </div>
                        </div>
                        <div className='colom'>
                            <div >
                                <p className='num'><span><IoLocationSharp className='wicon' /></span>6</p>
                                <p className='fpp'>office Locations</p>
                            </div>
                            <div>
                                <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/location-icon.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='slider-pg'>
                    <Slider {...settings}>
                        

                     
                    
                        <div className='flx-rdimgs' style={{overflow:'hidden'}}>
                            <div className='rd-img'>
                                <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/hiroyasu-tsuchiya.jpg" alt="" />
                                <p className='rd-p'>Thank you very much for creating a fantastic corporate website for us. I deeply appreciate
                                your efforts and guidance, without which, this wouldn't have been possible.</p>
                                <div className='sp'>
                                    <span>Hiroyasu Tsuchiya </span>
                                    <p>Corporate Branding Division, Anchor by Panasonic</p>
                                </div>
                            </div>
                           
                        </div>
                        <div >
                            <div className='rd-img'>
                                <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/tsm-pic.jpg" alt="" />
                                <p className='rd-p'>I was really convinced with the previous works they've done and hence I contacted them,
                            eventhough I'm from Paris and they're in India...And I really liked the design they've done
                            for me too... I strongly recommend Acodez to anyone who's looking for quality stuffs.</p>
                            <div className='sp'>
                                <span>simo Bennis</span>
                                <p>seducation nauturelle PNL France</p>
                            </div>
                            </div>
                        </div>

                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
