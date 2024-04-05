import React from 'react'
import './Hero.css'
import hand_icon from '../../assets/wave.png'
import hero_image from '../../assets/hero_image.png';
import arrow_icon from '../../assets/icon-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt='Hello'/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt='arrow'/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt='hero' width="400px"/>
        </div>
    </div>
  )
}

export default Hero
