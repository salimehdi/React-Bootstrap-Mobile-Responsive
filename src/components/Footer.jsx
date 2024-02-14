import React from 'react';
import { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleUp, FaFacebook, FaFacebookF, FaGooglePlus, FaGooglePlusG, FaInstagram, FaMailBulk, FaPinterest, FaTelegram, FaTelegramPlane, FaTwitter, FaYoutube, FaYoutubeSquare } from 'react-icons/fa';
import mail from '../assets/mail.svg';

function Footer() {
    const [mobRes, setMobRes] = useState(false);
    const [show, setShow] = useState([true, true, true]);
    const changeShow = (index) => {
        let temp = [...show];
        temp[index] = !temp[index];
        setShow(temp);
    }
    useEffect(() => {
        const updateMobRes = () => {
          if (window.innerWidth <= 991.98) {
            setMobRes(true); 
          } else if (window.innerWidth > 991.98){
            setMobRes(false); 
            setShow([true, true, true]);
          }
        };
        updateMobRes();
        window.addEventListener("resize", updateMobRes);
        return () => {
          window.removeEventListener("resize", updateMobRes);
        };
      }, []); 
  return (
    <div className="row vw-100 d-flex justify-content-center " style={{ height: "auto" }}>
      <div className="ms-5 p-5 col-2 d-flex flex-column justify-content-start position-relative" style={{ width: `${mobRes ? "80%" : "15%"}` }}>
        <>
          {
          mobRes && (
            !mobRes || show[0] 
            ? <FaAngleUp className="position-absolute" style={{right:"40px", top:"65px"}} onClick={()=>changeShow(0)}/>
            : <FaAngleDown className="position-absolute" style={{right:"40px", top:"65px"}} onClick={()=>changeShow(0)}/>)
          }
          <h6 style={{textWrap:"nowrap"}} className="my-3">
            <b>Hobbycue</b>
          </h6>
          {show[0] && 
          <>
          <h6 style={{textWrap:"nowrap"}}>About Us</h6>
          <h6 style={{textWrap:"nowrap"}}>Our Ser vices</h6>
          <h6 style={{textWrap:"nowrap"}}>Work with Us</h6>
          <h6 style={{textWrap:"nowrap"}}>FAQ</h6>
          <h6 style={{textWrap:"nowrap"}}>Contact Us</h6>
          </>
          }
        </>
      </div>
      <div className="ms-5 p-5 col-2 d-flex flex-column justify-content-start position-relative" style={{ width: `${mobRes ? "80%" : "15%"}` }}>
        <>
          {mobRes && (
            (show[1]) 
            ? <FaAngleUp className="position-absolute" style={{right:"40px", top:"65px"}} onClick={()=>changeShow(1)}/>
            : <FaAngleDown className="position-absolute" style={{right:"40px", top:"65px"}} onClick={()=>changeShow(1)}/>)
          }
          <h6 style={{textWrap:"nowrap"}} className="my-3">
            <b>How Do I</b>
          </h6>
          {show[1] && 
          <>
          <h6 style={{textWrap:"nowrap"}}>Sign Up</h6>
          <h6 style={{textWrap:"nowrap"}}>Add a Listing</h6>
          <h6 style={{textWrap:"nowrap"}}>Claim Listing</h6>
          <h6 style={{textWrap:"nowrap"}}>Post a Query</h6>
          <h6 style={{textWrap:"nowrap"}}>Add a Blog Post</h6>
          <h6 style={{textWrap:"nowrap"}}>Other Queries</h6>
          </>
         }
        </>
      </div>
      <div className="ms-5 p-5 col-2 d-flex flex-column justify-content-start position-relative" style={{ width: `${mobRes ? "80%" : "15%"}` }}>
        <>
        {mobRes && (
            show[2] 
            ? <FaAngleUp className="position-absolute" style={{right:"40px", top:"65px"}} onClick={()=>changeShow(2)}/>
            : <FaAngleDown className="position-absolute" style={{right:"40px", top:"65px"}} onClick={()=>changeShow(2)}/>
        )
          }
          <h6 style={{textWrap:"nowrap"}} className="my-3">
            <b>Quick Links</b>
            
          </h6>
          {(!mobRes || show[2]) &&
            <> 
          <h6 style={{textWrap:"nowrap"}}>Listings</h6>
          <h6 style={{textWrap:"nowrap"}}>Blog Posts</h6>
          <h6 style={{textWrap:"nowrap"}}>Shop / Store</h6>
          <h6 style={{textWrap:"nowrap"}}>Community</h6>
          </>
            }
        </>
      </div>

      <div
        className="ms-5 p-5 col-2 d-flex flex-column justify-content-start"
        style={{ width: `${mobRes ? "80%" : "30%"}` }}
      >
        <h6 className="my-3">
          <b>Social Media</b>
        </h6>
        <div
          className="py-2 d-flex justify-content-between align-items-center"
          style={{ width: "100%" }}
        >
          <div className="icon-box">
            <FaFacebookF className="icon" />
          </div>
          <div className="icon-box">
            <FaTwitter className="icon" />
          </div>
          <div className="icon-box">
            <FaInstagram className="icon" />
          </div>
          <div className="icon-box">
            <FaPinterest className="icon" />
          </div>
          <div className="icon-box">
            <FaGooglePlusG className="icon" />
          </div>
          <div className="icon-box">
            <FaYoutube className="icon" />
          </div>
          <div className="icon-box">
            <FaTelegramPlane className="icon" />
          </div>
          <div className="icon-box">
            <img src={mail} className="icon" />
          </div>
        </div>
        
        <h6 className="my-3 pt-3">
          <b>Social Media</b>
        </h6>

        <form className="navbar-nav me-auto custom-input d-flex flex-row" role="search">
          <input
            style={{ width: "200px"}}
            className="form-control me-2"
            type="search"
            placeholder="Search here..."
            aria-label="Search"
          />
          <button className="btn custom-purple center" type="submit">
            Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
