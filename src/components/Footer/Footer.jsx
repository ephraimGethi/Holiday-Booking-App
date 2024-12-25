import React, { useEffect } from 'react'
import "./footer.css"
import video from "../../assets/video.mp4"
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import Aos, { AOS } from "aos"
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop muted autoPlay type='video/mp4'></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us This Holiday</h2> 
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <MdOutlineTravelExplore className='icon'/> Eph Booking.
                </a>
            </div>
          </div>
          <div data-aos="fade-up" className="footerParagraph">
            At Eph Hotels,we do offer a wide range of travel destinations aroud the world at affordable prices.
            travel with us and get a chance to have the best experiences this year. 
          </div>
          <div data-aos="fade-up" className="footerSocials">
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
            <FaTripadvisor className='icon'/>

          </div>
          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Payment
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Bookins
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Rent Car
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Bnb
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                TripAdvisor
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
               LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Kenya
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                Mississipi
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                New York City
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> 
                India
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small>COPYRIGHT RESERVED. EPHRAIM  2024</small>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer