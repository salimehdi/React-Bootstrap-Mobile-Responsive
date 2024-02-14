// Navigation.js
import React from 'react';
import { useState , useEffect } from 'react';
import logo from '../assets/logo.svg';
import {FaAngleDown, FaArrowDown, FaBarcode, FaBars, FaBell, FaBookmark, FaCompass, FaSearch, FaUniversalAccess } from 'react-icons/fa';
import {FaCartShopping} from 'react-icons/fa6';

const Navigation = () => {

      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const [isDropdownOpenInner, setIsDropdownOpenInner] = useState(false);

      const [logoHeight, setLogoHeight] = useState("60px"); 

      useEffect(() => {
        const updateLogoHeight = () => {
          if (window.innerWidth <= 800) {
            setLogoHeight("45px"); 
          } else if (window.innerWidth <= 768) {
            setLogoHeight("50px"); 
          } else {
            setLogoHeight("55px"); 
          }
          
        };
        updateLogoHeight();
        window.addEventListener("resize", updateLogoHeight);
        return () => {
          window.removeEventListener("resize", updateLogoHeight);
        };
      }, []); 
    
    
      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
      const toggleDropdownInner = () => {
        setIsDropdownOpenInner(!isDropdownOpenInner);
      };
    
      return (
        <nav className="position-relative navbar navbar-expand-lg bg-white custom-navbar px-lg-4 px-md-3 px-sm-1 px-1
        " style={{zIndex:999}}>
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              <img src={logo} height={logoHeight} width={"80%"} style={{marginRight:"0"}} />
            </a>
            <button
              className="navbar-toggler "
              type="button"
              aria-label="Toggle navigation"
              style={{border:"none"}}
            >
              <FaSearch className='m-sm-3 m-2 position-absolute' style={{right:"100px",top:"30%"}}/>
              <FaBell className='m-sm-3 m-2 position-absolute' style={{right:"60px",top:"30%"}}/>
              <FaBars className='m-sm-3 m-2 position-absolute' style={{right:"20px",top:"30%"}}/>
            </button>
            <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}>


            <form className="navbar-nav me-auto custom-input" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search here..."
                  aria-label="Search"
                />
                <button className="btn custom-purple center" type="submit">
                  <FaSearch/>
                </button>
              </form>

              <ul className="d-flex navbar-nav mb-2 mb-lg-0" style={{fontSize:"18px" , alignItems:"center"}}>


              <li className="nav-item dropdown">
                  <a
                    className="nav-link active"
                    href="#"
                    style={{fontWeight : "600",}}
                    onClick={toggleDropdownInner}
                    role="button"
                    aria-expanded={isDropdownOpenInner ? 'true' : 'false'}
                  >
                    <FaCompass style={{color:"#8064A2", marginRight:"4px"}}/>
                    Explore
                    <FaAngleDown style={{color:"#939CA3" , marginLeft:"4px"}}/>
                  </a>

                  <ul className={`dropdown-menu ${isDropdownOpenInner ? 'show' : ''}`}>

                    <li>
                      <a className="dropdown-item" href="#">
                      People - Community
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                      Places - Venues
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                      Programs - Events
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                      Products - Store
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                      Blogs
                      </a>
                    </li>

                  </ul>

                </li>


                

                

                <li className="nav-item">
                  <a className="nav-link active custom-dropdown" style={{fontWeight : "600", marginRight:"12px"}} aria-current="page" href="#">
                    <FaUniversalAccess style={{color:"#8064A2", marginRight:"4px"}}/>
                    Hobbies
                    <FaAngleDown style={{color:"#939CA3" , marginLeft:"4px"}}/>
                  </a>
                </li>
                <li className="nav-item">
                  <FaBookmark style={{color:"#8064A2", marginRight:"12px"}}/>
                </li>
                <li className="nav-item">
                  <FaBell  style={{color:"#8064A2", marginRight:"12px"}}/>
                </li>
                <li className="nav-item">
                  <FaCartShopping  style={{color:"#8064A2", marginRight:"18px"}}/>
                </li>

                <button className="btn custom-outline-purple" type="submit">
                  Sign in
                </button>
                
                
              </ul>


              


            </div>
          </div>
        </nav>
      );
   
}

export default Navigation;
