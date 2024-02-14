import React from 'react';
import people3 from '../assets/people3.svg';
import people4 from '../assets/people4.svg';
import { useState, useEffect } from 'react';

function GetStarted() {
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
    <div className="position-relative row vw-100 d-flex justify-content-center align-items-start" style={{backgroundColor:"#F7FDFF",height:`${mobRes ? "50vh" : "80vh"}`}}>
        <div className="col-9 m-5 p-5" >
        <h4 style={{fontWeight:"600" , fontStyle:"italic"}} className="">Your <span style={{color:"#0096C8"}}>Hobby</span>, Your <span style={{color:"#8064A2"}}>Community...</span></h4>
        <button className="btn custom-purple my-4" type="submit">
            Get Started
        </button>
        </div>
        <img src={people3} className='position-absolute bottom-0 ' style={{width:"39%", left:"8%"}}/>
        <img src={people4} className='position-absolute bottom-0 ' style={{width:"45%", right:"8%"}}/>
    </div>
  );
}

export default GetStarted;
