import React from 'react'
import { BigSidebar, Navbar, SmallSidebar } from '../../Components'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'


function SharedLayout() {
  return (
    <Wrapper>
    <main className='dashboard'>
     <SmallSidebar/>
     <BigSidebar/>
     
      <div>
      <Navbar/>
      <div className='dashboard-page'>
        <Outlet/>
      </div>
      </div>
     
    </main>
    </Wrapper>
  )
}

const Wrapper = styled.main`
.dashboard {
  display: grid;
  grid-template-columns: 1fr;
}
.dashboard-page {
  width: 90vw;
  margin: 0 auto;
  padding: 2rem 0;
  
}
@media (min-width: 992px) {
  .dashboard {
    grid-template-columns: auto 1fr;
  }
  .dashboard-page {
    width: 90%;
    
  }
}
`

export default SharedLayout