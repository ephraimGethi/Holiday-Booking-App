import React, { useEffect } from 'react'
import "./main.css"
import img from "../../assets/cameron.png"
import { HiOutlineClipboard, HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import Aos, { AOS } from "aos"
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Paris",
    location: "France",
    grade: "A",
    fees: "Ksh.1,200",
    description: "The city of lights offers exquisite cuisine, culture, and historic landmarks like the Eiffel Tower."
  },
  {
    id: 2,
    imgSrc: img,
    destTitle: "Tokyo",
    location: "Japan",
    grade: "A",
    fees: "Ksh.1,500",
    description: "A bustling metropolis known for its modern architecture, shopping, and traditional temples."
  },
  {
    id: 3,
    imgSrc: img,
    destTitle: "Sydney",
    location: "Australia",
    grade: "A",
    fees: "Ksh.1,400",
    description: "Home to the iconic Sydney Opera House and beautiful harbor, Sydney is a blend of culture and adventure."
  },
  {
    id: 4,
    imgSrc: img,
    destTitle: "New York City",
    location: "USA",
    grade: "A",
    fees: "Ksh.1,800",
    description: "The Big Apple is famous for its skyline, theaters, and diverse cultural experiences."
  },
  {
    id: 5,
    imgSrc: img,
    destTitle: "Rome",
    location: "Italy",
    grade: "A",
    fees: "Ksh.1,300",
    description: "A historic city filled with ancient ruins, museums, and world-renowned cuisine."
  },
  {
    id: 6,
    imgSrc: img,
    destTitle: "Cape Town",
    location: "South Africa",
    grade: "A",
    fees: "Ksh.1,100",
    description: "Known for its stunning landscapes, Table Mountain, and vibrant cultural scenes."
  },
  {
    id: 7,
    imgSrc: img,
    destTitle: "Rio de Janeiro",
    location: "Brazil",
    grade: "A",
    fees: "Ksh.1,400",
    description: "Famous for its Carnival festival, beautiful beaches, and the Christ the Redeemer statue."
  }
];



const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="main container section">
      <div  data-aos="fade-right" data-aos-duration="4000" className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>
      <div className="secContent grid">
          {Data.map((item,index)=>{
            return(
            <div data-aos="fade-up" className="singleDestination" key={index}>
              <div className="imageDiv">
                <img src={item.imgSrc} alt="" />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{item.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{item.location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>{item.grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{item.fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{item.description}</p>
                </div>
                <button className='btn flex'>
                  DETAILS <HiOutlineClipboardCheck className='icon'/>
                </button>
              </div>
            </div>)
          })}
      </div>
    </section>
  )
}

export default Main