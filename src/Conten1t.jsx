import React from 'react'
import './App.css'

export const Conten1t = (props) => {
  return (
    <div>
        <div className='all-heading'>
            <h1 className='all-content-heading'>{props.content}</h1>
            <div className='underline'></div>
        </div>
    </div>
  )
}
