import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { Conten1t } from '../Conten1t'
import Slider from 'react-slick';
import './blog.css'
export const Blog = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className='alive'>
                <div className='blog-ar-lf'>
                    <GoArrowLeft className='aroow-blogl' onClick={onClick} />
                </div>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className='alive' >
                <div className='blog-ar-fi'>
                    <GoArrowRight onClick={onClick} className='aroow-blogr' />
                </div>
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='blog-margin'>
            <div className='blog-cont'>
                <Conten1t content={"Welcome to Acodez blog!"} />
            </div>


            <div className='bloging-p'>
                <p>Explore the latest trends and find our updates on all you need to know about <br /> what is happening in the world of web and technology.

                </p>
            </div>
            <div className="blog-container">
                <Slider {...settings}>
                    <div>
                        <div>
                            <div className='flx-blog'>
                                <img src="https://cdn.acodez.in/wp-content/uploads/bfi_thumb/Feature-image_01-3-zq65dlfdwn27lpr7y4ftog.jpg" alt="" />
                                <div>

                                    <span className='after'>Posted on Jun 25, 2024</span><p className='blog-p'>
                                        The Future of Software Engineering with AI Agents</p>
                                </div>
                            </div>
                            <div className='flx-blog'>

                                <img src="https://cdn.acodez.in/wp-content/uploads/bfi_thumb/Feature-image_01-1-zpuol9j8j9qct9j22ar474.jpg" alt="" />
                                <div >

                                    <span className='afterone'>
                                        Posted on Jun 20, 2024</span>
                                    <p className='blog-p'> 
                                        How Emotional Intelligence is Transforming <br /> Conversational AI</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div>
                        <div>
                            <div className='flx-blog'>
                                <img src="https://cdn.acodez.in/wp-content/uploads/bfi_thumb/Feature-image_01-zp9soznpehm7qq2b25cu0w.jpg" alt="" />
                                <div>

                                    <span className='span3'>Posted on Jun 11, 2024</span><p className='blog-p'>
                                        What is Spatial Computing and Why is It Considered to Redefine­ the­ Digital Landscape  </p>
                                </div>
                            </div>
                            <div className='flx-blog'>

                                <img src="https://cdn.acodez.in/wp-content/uploads/bfi_thumb/Feature-image_01-zn2tl5enabjtdzqbrp4z5s.jpg" alt="" />
                                <div >

                                    <span className='afterone'>
                                        Posted on May 09, 2024
                                    </span>
                                    <p className='blog-p'> Highest Paying Tech Jobs</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div>
                            <div>
                                <div className='flx-blog'>
                                    <img src="https://cdn.acodez.in/wp-content/uploads/bfi_thumb/Feature-image-2-zmhtso76oghaupsycf3im8.jpg" alt="" />
                                    <div>

                                        <span className='digital'>Posted on Apr 30, </span><p className='blog-p'>


                                            Search Google or Type a URL: Which is Better?</p>
                                    </div>
                                </div>
                                <div className='flx-blog'>

                                    <img src="https://cdn.acodez.in/wp-content/uploads/bfi_thumb/Feature-image-1-zm1yzn2dez4b97ahugmccg.jpg" alt="" />
                                    <div >

                                        <span className='digital'>
                                            Posted on Apr 22, 2024</span>
                                        <p className='blog-p'>

                                            YouTube Analytics: 15 Metrics to Track Performance</p>,
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flx-blog'>
                                <img src="https://cdn.acodez.in/wp-content/uploads/bfi_thumb/Feature-image-zj5e7zadbewzzm3n5xyk8w.jpg" alt="" />
                                <div>

                                    <span className='after'>Posted on Mar 08, 2024 </span><p className='blog-p'>
                                        Benefits of Using Agile Methodology in Software Development</p>
                                </div>
                            </div>
                            <div className='flx-blog'>

                                <img src="https://cdn.acodez.in/wp-content/uploads/bfi_thumb/Feature-image_How-r-zip4ihuzju4wtrvxhvdeyo.jpg" alt="" />
                                <div >

                                    <span className='digital'>
                                        Posted on Mar 01, 2024</span>
                                    <p className='blog-p'>Barnacle SEO: What is It and How to Drive Traffic Without Ranking</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </Slider>
                <button className='blog-btn'>Read all Blogs</button>

            </div>
        </div>





    )
}

