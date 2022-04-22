import React from 'react'
import './Home.css'
import {BsFillHouseFill} from 'react-icons/bs'
import {FaDollarSign} from 'react-icons/fa'
import {FaChartLine} from 'react-icons/fa'

export const Home = () => {
  return (

    <div className='home'>
      <div className='hero'>
        <div className='hero-text'>
          <h3>Looking for a Property!</h3>
          <h1>
            <span>Buy</span> and <span>Rent</span><br></br>Properties
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>
           Ut enim ad minim veniam, quis nostrud exercitation<br></br>
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className='details'>Details</button>
        </div>
        <div className='hero-image'></div>
      </div>

      <section className='about' id='about'>
        <h1>HOW IT WORKS</h1>
        <div className='services'>
          <div className='each-service'>
            <i><BsFillHouseFill/></i>
            <h2>Find a Property</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className='each-service'>
            <i><FaDollarSign/></i>
            <h2>Buy a Property</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className='each-service'>
            <i><FaChartLine/></i>
            <h2>Investing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </section>

      <section className='company'>
        <div className='rental-image'></div>
        <div className='company-text'>
          <h1>We Are The Best<br></br> Real Estate Company</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br>
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br></br>
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button>View More Details</button>
        </div>
      </section>






          
            
    </div>
          


      
    
    
    
    

  )
}
