
import React from 'react'
import Wrapper from '../assets/Wrappers/JobsInfo'

function JobsInfo({icon,text}) {
  return (
    <Wrapper>
    <span className='icon'>{icon} </span>
    <span className='text'>{text} </span>
  </Wrapper>
  )
}

export default JobsInfo