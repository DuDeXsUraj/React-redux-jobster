import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../FeaturesUser/all-jobs/AllJobsSlice';
import StatsContainer from '../../Components/StatsContainer';
import ChartContainer from '../../Components/ChartContainer';
import Loading from '../../Components/Loading';


function Stats() {
  const{isLoading,monthlyApplications} = useSelector((store)=>store.allJobs)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(showStats())
  },[])

  if(isLoading){
    return <Loading/>
  }
  return (
    <>
    <StatsContainer/>
    {monthlyApplications.length > 0 && <ChartContainer/>}
    </>
  )
}

export default Stats