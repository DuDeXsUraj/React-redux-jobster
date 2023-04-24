import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../Utils/Axios";
import { toast } from "react-toastify";
import { getAllJobsThunk, showStatsThunk } from "./AllJobsThunk";



const initialFiltersState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  };
  
  const initialState = {
    isLoading: false,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    ...initialFiltersState,
  };

export const getAllJobs = createAsyncThunk('allJobs/getAllJobs',
getAllJobsThunk)

export const showStats = createAsyncThunk('allJobs/showStats',showStatsThunk);

 const AllJobsSlice = createSlice({
    name:'allJobs',
    initialState,
    reducers:{
      showLoading:(state)=>{
        state.isLoading = true;
      },
      hideLoading:(state)=>{
        state.isLoading = false;
      },
      handleChange:(state,{payload:{name,value}})=>{
        state[name] = value;
        
      },
      clearFilter:(state)=>{
        return{...state,...initialFiltersState}
      },
      changePage:(state,action)=>{
        state.page = action.payload;
      },
      clearAllJobsState: (state) => initialState
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllJobs.pending ,(state) => {
            state.isLoading = true;
          })
        builder.addCase(getAllJobs.fulfilled ,(state,action) => {
            state.isLoading = false;
            state.jobs = action.payload.jobs;
            state.totalJobs = action.payload.totalJobs;
            state.numOfPages = action.payload.numOfPages;

          })
        builder.addCase(getAllJobs.rejected ,(state,action) => {
            state.isLoading = false;
            toast.error(action.payload)
          })
        builder.addCase(showStats.pending ,(state) => {
            state.isLoading = true;
          })
        builder.addCase(showStats.fulfilled ,(state,action) => {
            state.isLoading = false;
            state.stats = action.payload.defaultStats;
            state.monthlyApplications = action.payload.monthlyApplications

          })
        builder.addCase(showStats.rejected ,(state,action) => {
            state.isLoading = false;
            toast.error(action.payload)
          })
       
      
    }
 })

 export const{showLoading,hideLoading,handleChange,clearFilter,changePage,clearAllJobsState} = AllJobsSlice.actions;
 export default AllJobsSlice.reducer;
