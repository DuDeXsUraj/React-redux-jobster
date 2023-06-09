import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BarChart from './BarChart'
import AreaChart from './AreaChart'
import styled from 'styled-components'

function ChartContainer() {
  const[barChart,setBarChart] = useState(true)
  const{monthlyApplications: data} = useSelector((store)=>store.allJobs)
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' className='' onClick={()=>setBarChart(!barChart)}>
        {barChart?'areaChart':'barChart'}
      </button>
      {barChart?<BarChart data={data}/>:<AreaChart data={data}/>}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: blue;
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`
export default ChartContainer