import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icons from '../../assets/twitter_icon.png'
import instagram_icons from '../../assets/instagram_icon.png'
import facebook_icons from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icons} alt="" />
        <img src={instagram_icons} alt="" />
        <img src={facebook_icons} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Reltions</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>LCorporate Information</li>
        <li>Contact Us</li>
     </ul>
     <p className='copyright-text'>@ 1997-2023 Netflix,Inc</p>
    </div>
  )
}

export default Footer
