
import './App.css';

import { Conten1t } from "./Conten1t";
import { BigText } from "./Reuse-components/BigText";
import { BoxContent } from "./Reuse-components/BoxContent";
import { SmallText } from "./Reuse-components/SmallText";
import { Header } from './Header';
import Scrollreveal from 'scrollreveal'
import { useEffect } from 'react';
import { TwoConnect } from './TwoConnect';
import CustomArrows from './Reuse-components/Slick';
import Autoscroll from './Reuse-components/Autoscroll';
import { Scroll } from './Scroll';
import { Ourworks } from './Reuse-components/Ourworks';



 const Appp=()=>{
  useEffect(()=>{
    Scrollreveal.reveal("reval",{
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: true,
    },[])

  })}





function App() {
  return (
    <div className="App">
      <Header />
      <div className='new-bg'>

      <Conten1t content={"About"} />
      <div data-aos="fade-up" data-aos-duration="1500" className='flex-text'>
        <div >
          <SmallText smalltex={"We are an international award-winning IT company with 6 offices across India, and offers web design, web  development and digital marketing services."} />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <BigText bigtex={'Acodez is rated as one of the top web agencies in India by various industry magazines and review sites. We have a right blend of award-winning designers, expert web developers and Google certified digital marketers which make us a unique one-stop solution for hundreds of our clients, spread across 80+ countries.'} />
        </div>
      </div>



      <div className="flex-box">
        <div  data-aos="fade-up"data-aos-duration="1500" data-aos-once="true" >
          <BoxContent img={'https://acodez.in/wp-content/themes/acodez-theme/images/new/software-development.svg'}
            heading={"Software Development"}
            boxcontent={"Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning, robust and scalable."}
            secondimg={'https://acodez.in/wp-content/themes/acodez-theme/images/new/software.svg'}
            secondboxContent={"> Web Application  DevelopmentAI & ML - Python, TensorFlowMEAN/MERN Stack DevelopmentBlockChain DevelopmentIoT ApplicationsBig Data Services"} />

        </div>
        <div className='Down-box'  data-aos="fade-up"data-aos-duration="1500" data-aos-once="true">

          <BoxContent img={"https://acodez.in/wp-content/themes/acodez-theme/images/new/ux-design.svg"}
            heading={"UX Design"}
            boxcontent={"Great online experiences happen only when a well planned UX strategy is visualized with top class design aesthetics; and we do it best."}
            secondboxContent={"UX ResearchInformation ArchitectureMood BoardsWire framingAInteraction designUX Testing"}
            button={"view"} />
        </div>
        <div  data-aos="fade-up"data-aos-duration="1500" data-aos-once="true">

          <BoxContent img={"https://acodez.in/wp-content/themes/acodez-theme/images/new/mobile.svg"}
            heading={"Mobile App"}
            boxcontent={"Our profound knowledge of mobile technologies & frameworks, help us create secure & scalable Mobile Apps with great UX."}
            secondboxContent={"Android App Development iOS App Development React Native Apps Ionic App Development Xamarin App Development Phone Gap Apps"}
            button={"view"} />

        </div>
        <div className='Down-box ' data-aos="fade-up"data-aos-duration="1500"data-aos-once="true" >


          <BoxContent boxcontent={"Technological expertise coupled with award-winning UX skills is what makes us the leading web development us build world class websites company in India - and helps and web applications."}
            heading={"Web Development"}
            button={"view"}
            img={"https://acodez.in/wp-content/themes/acodez-theme/images/new/web-application.svg"}
            secondboxContent={"CMS Development Ecommerce Development Node JS Development Angular Development React JS Development"} />

        </div>
        <div  data-aos="fade-up"data-aos-duration="1500" data-aos-once="true">

          <BoxContent heading={"Branding"}
            boxcontent={"Our highly creative team of designers always excels in creating unique brand identity and out-of-the-box designs that speaks on its own!"}
            button={"view"}
            secondboxContent={"Logo & Brand Identity Graphic Design Package Design Infographics Design Print Design Creative Copy Writing"}
            img={"https://acodez.in/wp-content/themes/acodez-theme/images/new/branding.svg"} />

        </div>
        <div className='Down-box '  data-aos="fade-up"data-aos-duration="1500" data-aos-once="true">
          <BoxContent heading={"Video Productions"}
            boxcontent={"We create awesome explainer videos of all types, that'd improve your brand story telling & user engagement which results in higher conversions"}
            button={"view"}
            img={"https://acodez.in/wp-content/themes/acodez-theme/images/new/video-production.svg"}
            secondboxContent={"Explainer Videos 2D Animated Videos  3D Animated Videos Whiteboard Animation Motion Graphics"} />

        </div>
        <div  data-aos="fade-up"data-aos-duration="1500" data-aos-once="true">
          <BoxContent button={"view"}
            heading={"Digital Marketing"}
            boxcontent={"We're a Google Partner and we offer unique digital marketing solutions that'd load your inbox with inquiries."}
            secondboxContent={"Inbound Marketing Search Engine Optimization(SEO) Social Media Marketing Search Engine Marketing(SEM) Email Marketing Analytics Consultation"}

            img={"https://acodez.in/wp-content/themes/acodez-theme/images/new/social-media.svg"} />


        </div>
      </div>
      </div>
     <TwoConnect/>
  
     <Ourworks/>
     <div style={{marginTop:"600px"}}>
     <Autoscroll/>
     </div>
     <div style={{marginTop:"100px"}}>
     <Scroll/>
     </div>
    
    
     




    </div>
  );
}

export default App;
