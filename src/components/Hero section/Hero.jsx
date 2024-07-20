import React from 'react'
import './Hero.css'
import heroimg from '../../assets/hero-graphics.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FiCheckCircle } from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-container">
                <img src={heroimg} alt="" />
            </div>
            <div className="hero-main-container">
                <div className="hero-main">
                    <div className="hero-text">
                        <h1>
                        <TypeAnimation className='animation'
            sequence={[
                // Same substring at the start will only be typed out once, initially
                `Website made by Nikhil`,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Website made by Krish',
                1000,
                'Website made by Sahil',
                1000,
            ]}
            repeat={Infinity}
        />
                        </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sint sit hic est harum, ullam quas officiis ducimus! Libero, vel.</p>
                        <div className="bts">
                            <button className='bts-1'>View Plans</button>
                            <button className='bts-2'>Try for Free</button>
                        </div>
                        <div className='icons'>
                            <div className="icons-1">
                                <span><FiCheckCircle /></span>
                                <p>30,000 online courses</p>
                            </div>
                            <div className="icons-1">
                                <span><FiCheckCircle /></span>
                                <p>Expert instruction</p>
                            </div>
                            <div className="icons-1">
                                <span><FiCheckCircle /></span>
                                <p>Lifetime access</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero