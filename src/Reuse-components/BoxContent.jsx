import React from 'react'
import './reuse.css'

export const BoxContent = (props) => {
  return (
    <div>
        <div className="head">
        <div className='second-box'>
                <img className='white-img' src={props.img} alt="" />
                <div className='inner-content'>
                    <h2 className='second-heading' >{props.heading}</h2>
                    <div>
                        <p className='p'>{props.secondboxContent}</p>
                    </div>
                    <button className='view-button'>{props.button}</button>
                </div>
            </div>
            <div className='first-box'>
                <img className='white-img'  src={props.img} alt="" />
                <div className='inner-content'>
                    <h2 className='first-heading'>{props.heading}</h2>
                    <div>
                        <p >{props.boxcontent}</p>

                    </div>
                   
                </div>
            </div>
           
        </div>
    </div>
  )
}
