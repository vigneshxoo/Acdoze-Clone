import React, { useEffect, useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import './cssfiles/Header.css'
export const Header = () => {
    const[change,setchange]=useState(["vignesh","ajith","ranjth"])
    const[value,setvalue]=useState("")
    function add(){
        var a=Math.floor(Math.random()*change.length)
        setvalue(change[a])
       

       
    }
   
    useEffect(()=>{
      
        const intervel=setInterval(()=>{
            // console.log(intervel)
            add()
            
        },1500)
        return ()=> clearInterval(intervel)
    },[])
    return (
        <div className='parent'>
            <div className="navigation-bar">
                <nav>
                    <div>
                        <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/logo.png" alt="" />

                    </div>
                    <div className='f-menu'>
                        <ul>


                            
                            <div className='nav-links'>
                            <i><IoMdHome /></i>
                               <li><a href="">Work</a></li>
                               <li><a href="">Service</a></li>
                               <li><a href="">Products</a></li>
                               <li><a href="">Awards</a></li>
                               <li><a href="">Blog</a></li>
                               <li><a href="">Contact</a></li>
                               <li><button>Quick Energy</button></li>
                            </div>
                        </ul>
                    </div>
                    <div className=''>
                        <i><FiMenu className='bond' /></i>
                    </div>


                </nav>

                <div className='home-center-txt'>
                    <h1>{value}</h1>
                </div>
            </div>


        </div>
    )
}
