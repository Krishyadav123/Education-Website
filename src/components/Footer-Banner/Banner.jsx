import React from 'react'
import './Banner.css'
import bannerImg from '../../assets/course-graphics.svg'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-image">
                <img src={bannerImg} alt="" />
            </div>
            <div className="banner-text">
                <div className="banner-text-title">
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, impedit molestiae. Aliquam consequuntur molestias.</p>
                <div className="btnsss">
                <button>Lorem, ipsum dolor.</button>
                <button>Lorem, ipsum dolor.</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Banner