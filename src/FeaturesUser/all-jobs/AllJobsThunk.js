import customFetch, { checkForUnauthorizedResponse } from "../../Utils/Axios";

export const getAllJobsThunk = async(_,thunkApi)=>{
  
    const{page,search,sort,searchStatus,searchType} = thunkApi.getState().allJobs;
  
      let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
      if(search){
        url = url +`&search=${search}`
      }
      
      try {
          const response = await customFetch.get(url,{
          })
          return response.data;
      } catch (error) {
        return checkForUnauthorizedResponse(error, thunkApi);
      }
  }

  export const showStatsThunk = async(_,thunkAPI)=>{
    try {
        const response = await customFetch.get('/jobs/stats')
        console.log(response.data)
        return response.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
}