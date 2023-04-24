import React from 'react'

import Logo from './Logo';
import Navlinks from './Navlinks';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/Wrappers/BigSidebar';




function BigSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'sidebar-container':'sidebar-container show-sidebar'}> 
      <div className='content'>
        <header><Logo/></header>
        <Navlinks/>
      </div>
      </div>
     </Wrapper>
  )
}



export default BigSidebar