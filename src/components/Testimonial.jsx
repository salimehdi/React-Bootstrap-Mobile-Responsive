import React from 'react';
import TestimonialsIcon from '../assets/TestimonialsIcon.svg';
import AudioPlayButton from '../assets/AudioPlayButton.svg';
import micIcon from '../assets/micIcon.svg';
import Musician from '../assets/Musician.svg';
import { useState, useEffect } from 'react';

function AddYourOwn() {

    const [mobRes, setMobRes] = useState(false);
    useEffect(() => {
        const updateMobRes = () => {
          if (window.innerWidth <= 991.98) {
            setMobRes(true); 
          } else if (window.innerWidth > 991.98){
            setMobRes(false); 
          }
        };
        updateMobRes();
        window.addEventListener("resize", updateMobRes);
        return () => {
          window.removeEventListener("resize", updateMobRes);
        };
      }, []); 

  return (
    <div className="row vw-100 d-flex justify-content-center align-items-center">
      <div
        className="card col-9 m-5 p-4"
        style={{ backgroundColor: "#F7F5F9", border: "none" }}
      >
        <div className="card-body">
          <h5 className="card-title mb-4">
            <img src={TestimonialsIcon} className="me-3" />
            Testimonials
          </h5>
          <p className="card-text">
            AIn a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div className="row align-items-center">
          {mobRes && 
          <div className="col-12 mt-4 mx-auto col-lg-4 d-flex justify-content-evenly align-items-center" style={{width:"300px"}}>
                <img src={Musician} />
                <div className='d-flex flex-column justify-content-between'>
                    <h6 style={{color:"#8064A2" , fontWeight:"600"}}>Shubha Nagarajan</h6>
                    <h6 style={{color:"#0096C8" , fontWeight:"300" , fontSize:"14px" }}>Classical Dancer</h6>
                </div>
            </div>}
            <div
              className="col-lg-8 mt-4 col-12 d-flex justify-content-around rounded-2 align-items-center"
              style={{ backgroundColor: "#CCC1DA", height: "70px" }}
            >
              <div
                className="bg-light rounded-5 center"
                style={{ height: "35px", width: "35px" }}
              >
                <img src={AudioPlayButton} />
              </div>
              <span style={{ width: "60%",position:"relative" }}>
                <div
                  className="bg-white rounded-5 "
                  style={{ height: "3px", width: "85%" }}
                ></div>
                <svg
                  className='position-absolute left-0'
                  style={{ top: "-4px"}}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill="#8064A2" />
                </svg>
                <span style={{color:"#8064A2", position:"absolute",top:"-6px", right: "5%" , fontSize:"11px"}}>0:00</span>
              </span >

              <span style={{ width: "10%",position:"relative" }}>
                <img src={micIcon} style={{ bottom:0 , left:0,position:"absolute" }} />
                <img src={Musician} style={{ height: "50px"}} />
              </span>
              
            </div>

            {!mobRes && <div className="col-12 mt-4 col-lg-4 d-flex justify-content-evenly align-items-center">
                <img src={Musician} />
                <div className='d-flex flex-column justify-content-between'>
                    <h6 style={{color:"#8064A2" , fontWeight:"600"}}>Shubha Nagarajan</h6>
                    <h6 style={{color:"#0096C8" , fontWeight:"300" , fontSize:"14px" }}>Classical Dancer</h6>
                </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddYourOwn;
