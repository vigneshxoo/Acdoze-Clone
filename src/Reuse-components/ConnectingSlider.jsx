import React from 'react'
import { Conten1t } from '../Conten1t'
import { BigText } from './BigText'
import { Link, Outlet } from 'react-router-dom'
import './Conctingslider.css'


export const ConnectingSlider = () => {
  return (
    <div className='bc'>
    <div className='dev' >
        <div  className='devv'>
            
            
            <Conten1t content={"Web Development"}/>
            <div style={{margin:"45px"}}>

           
            <BigText bigtex={"We ensure that all our web development and mobile application development projects are not only engineered using the most cutting edge technologies, but also they're created through a human-centred design process."}/>
            </div>
        </div>
        <ul className='connect-ul' >
            <li><Link className='link' to={'/'}>Web Application</Link></li>
            <li><Link className='link' to={'scond'}>Mobile App</Link></li>
            <li><Link className='link' to={'three'}>CMS Websites</Link></li>
            <li><Link className='link' to={'fourth'}>E Commerce Website</Link></li>
            <div>
            
           
            
            <Outlet />
        </div>  
        </ul>
       
       
    </div>
    </div>
  )
}
