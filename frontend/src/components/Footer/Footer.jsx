import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo} alt="" />    
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates illo architecto veritatis, non velit nam similique iure ducimus quam quibusdam eligendi eveniet facere repellendus tempore dolorum doloribus maxime nihil ipsam sit!</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
             </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
         <hr />
         <p className="footer-copyright">© 2026 Food Delivery App. All rights reserved.</p>
    </div>
  )
}

export default Footer