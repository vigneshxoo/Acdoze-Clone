import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TwoConnect } from './TwoConnect';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Fourth, Routingslider, Scond, Three } from './Reuse-components/Routingslider';
import { ConnectingSlider } from './Reuse-components/ConnectingSlider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contries } from './Reuse-components/Contries';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordian } from './Reuse-components/Accordian';
import { Blog } from './Reuse-components/Blog';
import { Border } from './Reuse-components/Border';
import { Cycle } from './Reuse-components/Cycle';
import { Detailes } from './Reuse-components/Detailes';


AOS.init()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
    
    <BrowserRouter>
    <ConnectingSlider/>
     
      <Routes>
        <Route path='/d' element={<ConnectingSlider/>}/>
        <Route path='/' element={<Routingslider/>}/>
        <Route path='Scond' element={<Scond/>}/>
        <Route path='three' element={<Three/>}/>
        <Route path='fourth' element={<Fourth/>}/>
      </Routes>
 
    </BrowserRouter>
    <Contries/>  
    
     <Accordian/>
   <Border/>
   <Cycle/>
   <Detailes/>


    
  
  
    
   
  
 
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
