import { faAlignLeft, faCaretDown, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clearStore, logoutUser, toggleSidebar } from '../FeaturesUser/user/UserSlice'



function Navbar() {
  const [showLayout,setShowLayout] = useState(false)
  const {user} = useSelector((store)=>store.user)
  const dispatch  = useDispatch();

  const toggle = ()=>{
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <nav className="navbar">
        <button className="navbar-button text-primary" type='button' onClick={toggle}><FontAwesomeIcon icon={faAlignLeft}/></button>
        <a to="" className="navbar-logo">Dashboard</a>
        <ul className="navbar-list">
            <li className="navbar-item">
              <button to="" type='button' className='bg-primary' onClick={()=>setShowLayout(!showLayout)}><FontAwesomeIcon icon={faUserCircle}/> {user?.name} <FontAwesomeIcon icon={faCaretDown}/></button>
            </li>
        </ul>
        <div className={showLayout?'dropdown show-dropdown':'dropdown'}>
        <button type='button' className='dropdown-btn' onClick={()=>dispatch(clearStore('Logging out...'))}>logout</button>
        </div>
    </nav>
</Wrapper>
  )}

  const Wrapper = styled.nav`
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
.navbar-list {
  padding: 0;
  margin: 0;
    list-style-type: none;
    text-align: right; 
}

/* Style the navbar */
.navbar {
    background-color: white;
    display: flex; 
    align-items: center;
   justify-content: space-between; 
   padding: 24px 60px; 
  
}

/* Style the navbar button */
.navbar-button {
    font-size:30px;
    color: blue;
    border: none;
    cursor: pointer;
    background-color:white;
}

/* Style the navbar logo */
.navbar-logo {
    color: black;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
}

/* Style the navbar items */
.navbar-item {
    display: inline-block;
    margin-left: 10px;
}

/* Style the navbar links */
.navbar-item button {
    background-color:blue;
    color:white;
    border:none;
    text-decoration: none;
    border-radius:4px;
    width:118px;
}
   

/* Style the navbar links on hover */
.navbar-item button:hover {
    text-decoration: underline;
}


.dropdown {
  position: absolute;
  top: 70px;
  right: 60px;
  width: 117px;
  color:white
  background: skyblue;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  text-align: center;
  visibility: hidden;
  border-radius: 2px;
  margin:auto;
  box-sizing: border-box;
}

.show-dropdown {
  visibility: visible;
}
.dropdown-btn {
  background: transparent;
  border-color: transparent;
  color:blue;
  letter-spacing: 0.1em 0.2em;
  text-transform: capitalize;
  cursor: pointer;
}
@media (min-width: 992px) {
  position: sticky;
  top:0;
 
}
  `
export default Navbar