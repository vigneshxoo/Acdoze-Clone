import React from 'react'
import { Conten1t } from '../Conten1t'
import './Owr.css'


export const Ourworks = () => {
 
  return (
    <>
    <div>
        <div className="all-img">
           <p className='content'><Conten1t content={"Our Works"}/></p> 
            <div>
                <div className='imgs'>
                    <img className='first-img' src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/works/webdesign-kalayci-london.jpg" alt="" />
                    <img className='second-img' src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/works/webdesign-anchor.jpg" alt="" />
                    <img data-aos="zoom-in" src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/works/webdesign-axis.jpg" alt="" />
                    <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/works/webdesign-apml.jpg" alt="" />
                    <img  src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/works/webdesign-90plus.png" alt="" />
                    <div className='p-box'>
                    <p> <span>Obsessed with Quality!</span> <br/>
                    Yes, at Acodez, we're obsessed with quality. We rely on our portfolio to do business and always ensure that each of our web or mobile deliverable is unique and world class.</p>
                    </div>
                  
                <div className='hover-vid'>
                    <div >
                    <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/works/anchor-gif-3.gif" alt="Infinite Looping GIF" />
                    </div>
                    <div className='panasonic'>
                        <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/works/panasonic.jpg," alt="" />
                    </div>
                </div>
                </div>

            </div>
    
        </div>
       
    </div>
   
    </>
  )
}
