// Grid.js
import React from 'react';
import google from '../assets/google.svg';
import facebook from '../assets/facebook.svg';
import { FaLock, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useState , useEffect } from 'react';

const SignInSignUp = ({show}) => {
    const [showPass, setShowPass] = useState(false)
    const [signIn , setSignIn] = useState(true)

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
      <div className="d-flex flex-column"  style={{ width: "80%" , display:`${show && "none"}` }}>
        <div className="row">
          <p
            className="text-center col-6"
            style={{ fontSize: "18px",cursor:"pointer" , fontWeight: "600" , color:`${signIn ? "#8064A2" : "black"}` , textDecoration:`${signIn ? "underline" : "none"}`}}
            onClick={()=>setSignIn(true)}
          >
            Sign In
          </p>
          <p
            className="text-center col-6"
            style={{ fontSize: "18px",cursor:"pointer", fontWeight: "600" , color:`${!signIn ? "#8064A2" : "black"}` , textDecoration:`${!signIn ? "underline" : "none"}`}}
            onClick={()=>setSignIn(false)}
          >
            Join Up
          </p>
        </div>
        <button style={{fontWeight:"500",position:"relative" }} className="btn custom-outline-purple my-4" type="submit">
        <img style={{height:"25px" , position:"absolute" , left:"20px"}} src={google}/>
        Continue with Google
        </button>
        <button style={{fontWeight:"500",position:"relative" }} className="btn custom-outline-purple mb-4" type="submit">
        <img style={{height:"25px" , position:"absolute" , left:"20px"}} src={facebook}/>
        Continue with Facebook
        </button>
        <span className='position-relative'>
            <hr style={{borderWidth:"3px"}} />
            <span className='position-absolute' style={{left:"calc(50% - 65px)",top:"5px",backgroundColor:"#F7F5F9",padding:"0 10px"}}>Or connect with</span>
        </span>
        <form className="d-flex flex-column">
        <input type="text" className="form-control my-4 p-2" placeholder="Email" />
        <label className='position-relative'>
        <input type = {showPass ? "text" : "password"} className="form-control  p-2" placeholder="Password"/>
        {
            showPass 
            ? <FaRegEyeSlash onClick={()=>setShowPass(!showPass)} className='position-absolute text-muted' style={{right:"15px",top:"12px"}}/>
            : <FaRegEye onClick={()=>setShowPass(!showPass)} className='position-absolute text-muted' style={{right:"15px",top:"12px"}}/>
        }
        {signIn && <><div className="d-flex justify-content-between align-items-center">
            <label htmlFor='check' className='mt-3'>
            <input type="checkbox" className="form-check-input custom-outline-purple" name="check" /> &nbsp;Remember me
            </label>
            <span className='mt-3 center'><FaLock className='me-2 text-secondary'/>Forgot Password?</span>
        </div>
         </>}
        {!signIn && <>
        <div className="mt-3 row d-flex justify-content-between">
          <div style={{width:"40%"}} className="d-flex" >
              <div className="m-2 bg-white rounded-2" style={{width:"30%", height:"5px"}}></div>
              <div className="m-2 bg-white rounded-2" style={{width:"30%", height:"5px"}}></div>
              <div className="m-2 bg-white rounded-2" style={{width:"30%", height:"5px"}}></div>
          </div>
          <div style={{color:"#939CA3" , textAlign:"left" , width:"auto"}}>Password strength</div>
        </div>
        <h6 style={{fontSize:`${mobRes ? "2.1vw" : "0.9vw"}` ,}}>By continuing, you agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.</h6>
        </>}
        <button style={{fontWeight:"500" , width:"100%"}} className="btn custom-outline-black my-4" type="submit">
            Continue
        </button>
        </label>
        </form>
      </div>
    </>
  );
}

export default SignInSignUp;
