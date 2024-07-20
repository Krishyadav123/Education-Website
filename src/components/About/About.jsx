import React from 'react'
import './About.css'
import avtar1 from '../../assets/avatar-1.jpg'
import avtar2 from '../../assets/avatar-2.jpg'
import avtar3 from '../../assets/avatar-3.jpg'
import avtar4 from '../../assets/avatar-4.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-main">
        <div className="about-img">
            <img src={avtar1} alt="" />
            <img src={avtar2} alt="" />
            <img src={avtar3} alt="" />
            <img src={avtar4} alt="" />
        </div>
        <div className="about-text">
            <h1>Become an Instructor</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempora veritatis nemo dolore quibusdam deleniti, voluptate quam.</p>
        </div>
        <div className="about-boxes">
            <div className="about-box-1">
                <h4>Earn Money</h4>
                <p>Earn money every time a student purchases your course. Get paid monthly through Paypal or Payoneer.</p>
            </div>
            <div className="about-box-1">
                <h4>Earn Money</h4>
                <p>Earn money every time a student purchases your course. Get paid monthly through Paypal or Payoneer.</p>
            </div>
            <div className="about-box-1">
                <h4>Earn Money</h4>
                <p>Earn money every time a student purchases your course. Get paid monthly through Paypal or Payoneer.</p>
            </div>
        </div>
        <button>Lorem ipsum dolor.</button>
        <hr />
        </div>
    </div>
  )
}

export default About