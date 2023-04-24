import React from 'react'
import { Logo } from '../Components'
import logo1 from '../Images/remove.png'

import { Link } from 'react-router-dom'
import Wrapper from '../assets/Wrappers/Testing'
function Landing() {
  return (
       <>
        <Wrapper>
        <nav className='mt-3 text-left col-md-1'>
          <Logo/>
          <hr/>
        </nav>
        <div className="content">
        <div className="row">
            <div className="col-md-6 text-left mt-4">
                <h1>Job Tracking App</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <Link to='/register' type="button" className="btn btn-primary">Login/Register</Link>
            </div>
            <div className=" text-center col-md-6 ">
                <img src={logo1} className='logo1 col-md-8' alt='logo2'></img>
            </div>
        </div>
        </div>
        </Wrapper>
 </>
  )
}



export default Landing