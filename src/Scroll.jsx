import React from 'react'
import CustomArrows from './Reuse-components/Slick'
import { Conten1t } from './Conten1t'
import './App.css'




export const Scroll = () => {

  return (
    <div  style={{ display: 'flex',gap:'20px', width:"100%",  }}>


<CustomArrows />

     
      

      <div >
        <Conten1t content={"Web design"} />
        <p className='p'>We do not just web design, but out-of-the <br /> box digital experiences that takes your business to the next level!</p>
        <p className='pp'>Conceptual Websites

          Corporate Websites

          Experience Design (XD)</p>
      </div>



    </div>

  )
}
