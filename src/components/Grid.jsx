// Grid.js
import React from 'react';
import { useState, useEffect } from 'react';
import peopleIcon from '../assets/peopleIcon.svg';
import bagIcon from '../assets/bagIcon.svg';
import programIcon from '../assets/programIcon.svg';
import locationIcon from '../assets/locationIcon.svg';

const Grid = () => {

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
    <>
    <div style={{height:"auto"}} className="row d-flex justify-content-center">


      <div className="card col-5 m-5 p-5 " style={{width:`${mobRes ? "83%" :"40%"}`}} >
            <div className="card-body">
            <h5 className="card-title mb-4 d-flex align-items-center">
              <img src={peopleIcon} className='me-3'/>
              People</h5>
            <p className="card-text">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
            <a href="#" className="btn custom-outline-purple">Connect</a>
            </div>
        </div>

      
      <div className="card col-5 m-5 p-5 mt-lg-5 mt-0" style={{width:`${mobRes ? "83%" :"40%"}`}} >
            <div className="card-body">
            <h5 className="card-title mb-4">
            <img src={locationIcon} className='me-3'/>
              Place</h5>
            <p className="card-text">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
            <a href="#" className="btn custom-outline-purple">Meet Up</a>
            </div>
        </div>

      
      <div className="card col-5 mx-5  mb-5 p-5" style={{width:`${mobRes ? "83%" :"40%"}`}} >
            <div className="card-body">
            <h5 className="card-title mb-4">
            <img src={bagIcon} className='me-3'/>
              Product</h5>
            <p className="card-text">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
            <a href="#" className="btn custom-outline-purple">Get it</a>
            </div>
        </div>

      
      <div className="card col-5 mx-5  mb-5 p-5" style={{width:`${mobRes ? "83%" :"40%"}`}} >
            <div className="card-body">
            <h5 className="card-title mb-4">
            <img src={programIcon} className='me-3'/>
              Program</h5>
            <p className="card-text">Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
            <a href="#" className="btn custom-outline-purple">Attend</a>
            </div>
        </div>

      

      
    </div>

    </>
  );
}

export default Grid;
