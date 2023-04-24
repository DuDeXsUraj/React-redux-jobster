import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'
import Jobs from './Jobs'
import { getAllJobs } from '../FeaturesUser/all-jobs/AllJobsSlice'
import styled from 'styled-components'
import PageBtnContainer from './PageBtnContainer'

function JobsContainer() {
    const dispatch = useDispatch();
const{isLoading,jobs,totalJobs,numOfPages,page,search,searchType,searchStatus,sort} = useSelector((store)=>store.allJobs)

useEffect(()=>{
    dispatch(getAllJobs());
},[page,search,searchType,searchStatus,sort])

    if(isLoading){
        return <Loading/>
    }

    if(jobs.length===0){
        return <div className='text-center mt-4'>
            <h3>There is no jobs!</h3>
        </div>
    }

  return (
   <Wrapper>
    <h4>{totalJobs} Job
    {jobs.length > 1 && 's'}
    </h4>
    <div className='jobs'>
        {jobs.map((job)=>{
            return <Jobs key={job._id} {...job}/> 
        })}
    </div>
    {numOfPages > 1 && <PageBtnContainer/>}
   </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top: 4rem;
h2 {
  text-transform: none;
}
& > h5 {
  font-weight: 700;
}
.jobs {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
}
@media (min-width: 992px) {
  .jobs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
`
export default JobsContainer