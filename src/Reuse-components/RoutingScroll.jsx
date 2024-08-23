import React from 'react'
import './routingscroll.css'

export const RoutingScroll = (props) => {
  return (
    <div>
        <div className='relative' style={{width:'100%',height:'100%'}}>
            <div className='secondd-box'>
                <p>
                    {
                        props.content
                    }
               
                </p>
                <button>{props.view}</button>

            </div>
            <div className='boxone'>
                <img src={props.slimg} alt="" />

            </div>
        </div>
    </div>
  )
}
