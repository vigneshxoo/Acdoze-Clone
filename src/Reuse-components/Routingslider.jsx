import React from 'react'
import Slider from 'react-slick';
import { RoutingScroll } from './RoutingScroll';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import './routingscroll.css'

export const Routingslider = () => {
    const settings = {
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
            <div>
                <GoArrowRight onClick={onClick}className='iconarrow-right' />
            </div>

        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div>
                <GoArrowLeft onClick={onClick} className="iconarrow-left" />
            </div>
        );
    }
    return (
        <div className='back'>
            <div className="slider-containerx">
                <Slider {...settings}>
                    <div>
                        <RoutingScroll view={"view more"} content={" A MERN Stack development project for SaaS Product with monthly subscription model."} slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Web-Applications/elegantreport.jpg"} />
                    </div>
                    <div>
                        <RoutingScroll view={"view more"} slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Web-Applications/lemo.jpg"} content={"Web portal in PHP, Laravel framework and Angular JS for a company in Afghanistan."} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Web-Applications/realestate.jpg"} content={"A real estate web portal in PHP, Laravel framework for a company in Norway."} view={"view more"} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Web-Applications/trueparking.jpg"} img={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Web-Applications/trueparking.jpg"} content={"A MEAN Stack Web Application for a Parking company in US."} view={"view more"} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Web-Applications/elegantreport.jpg"} content={"A MERN Stack development project for SaaS Product with monthly subscription model."} view={"view more"} />
                    </div>
                </Slider>
            </div>

        </div>
    )
}
// slider 2
export function Scond(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div>
                <GoArrowLeft onClick={onClick} className="iconarrow-left" />
            </div>
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div>
                <GoArrowRight onClick={onClick}className='iconarrow-right' />
            </div>

        );
    }
    return(
        <div className='back'>
             <div className="slider-containerx button">
                <Slider {...settings}>
                    <div>
                        <RoutingScroll view={"view more"} content={" A Ionic framework mobile app in Android for online test preparationfor competitive exams.."} slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Mobile-Apps/ARC.jpg"} />
                    </div>
                    <div>
                        <RoutingScroll view={"view more"} slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Mobile-Apps/Hermespay.jpg"} content={"A mobile wallet App in Android and iOS for a client in Nigeria, with online and offline payment processing and encryption."} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Mobile-Apps/Mytutuion.jpg"} content={"A hybrid mobile app in React Native for a virtual learning company. Enabled with high-end encryption of videos."} view={"view more"} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Mobile-Apps/story.jpg"}  content={"A fully custom illustrated motivational story app in Android Native."} view={"view more"} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Mobile-Apps/virtual-village.jpg"} content={"A hybrid mobile app in Ionic for Android and iOS for a CAD drawingcreation consultant in US."} view={"view more"} />
                    </div>
                </Slider>
            </div>
            
        </div>
    )
}

//  silder 3


export function Three(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div>
                <GoArrowLeft onClick={onClick} className="iconarrow-left" />
            </div>
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div>
                <GoArrowRight onClick={onClick}className='iconarrow-right' />
            </div>

        );
    }
    return(
        <div className='back'>
             
            <div className="slider-containerx">
                <Slider {...settings}>
                    <div>
                        <RoutingScroll view={"view more"} content={" A news portal for a leading news group in Nepal."} slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/brannan.jpg"} />
                    </div>
                    <div>
                        <RoutingScroll view={"view more"} slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/cleverprep.jpg"} content={"A website for competitive exam test learning &amp; preparation"} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/greymatters.jpg"} content={"Corporate website for a leading investment fund based in US."} view={"view more"} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/iresearch.jpg"}  content={"Corporate web for a leading market research company"} view={"view more"} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/zilair.jpg"} content={"A Corporate website in Wordpress for a leading luxury helicopter service in Seychelles"} view={"view more"} />
                    </div>
                    {/* <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/maz%20conzultans.jpg"} content={"Wordpress custom website for a leading architect in UAE"} view={"view more"} />
                    </div> */}
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/marquise.jpg"} content={"A custom Web design and development for a food company in Singapor."} view={"view more"} />
                    </div>
                </Slider>
            </div>

        </div>

       
        
    )
}
/// fourth slider
export function Fourth(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div>
                <GoArrowLeft onClick={onClick} className="iconarrow-left" />
            </div>
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div>
                <GoArrowRight onClick={onClick}className='iconarrow-right' />
            </div>

        );
    }
    return(
        <div className='back'>
             <div className="slider-containerx">
                <Slider {...settings}>
                    <div>
                        <RoutingScroll view={"view more"} content={" An award-winning ecommerce website with a funky and interactive  design."} slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/awm.jpg"} />
                    </div>
                    <div>
                        <RoutingScroll view={"view more"} slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/Chymey.jpg"} content={"A custom designed and developed Ecommerce website in Woocommerce"} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/clp.jpg"} content={"An unconventional Ecommerce website with an interactive parallax design."} view={"view more"} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/Kit-and-Kabool.jpg"}  content={"A custom build Magento 2.0 Ecommerce website<."} view={"view more"} />
                    </div>
                    <div>
                        <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/Lavivo.jpg"} content={"A custom ecommerce website in Woocommerce."} view={"view more"} />
                    </div>
                    <div>
                    <RoutingScroll slimg={"https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/Rhitrition.jpg"} content={"A custom developed ecommerce website in Woocommerce for a leading private nutrition clinic in UK.."} view={"view more"} />
                    </div>
                   
                </Slider>
            </div>
            </div>

        

        
    )
}
