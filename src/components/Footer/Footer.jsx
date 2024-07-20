import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h1>Logo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate odio reiciendis quisquam ut, facilis magni aperiam odit. Dolores vero similique cumque natus rerum soluta laboriosam quae illum ex ratione. </p>
                    <div className="footer-social-icon">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>service</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-123*****89</li>
                        <li>contact@xyz.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 @ xyz.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer