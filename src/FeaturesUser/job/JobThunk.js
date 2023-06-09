
import customFetch from "../../Utils/Axios";
import { logoutUser } from "../user/UserSlice";
import { showLoading, hideLoading, getAllJobs } from "../all-jobs/AllJobsSlice";
import { clearValues } from "./JobSlice";




export const createJobThunk = async (job, thunkAPI) => {
    try {
      const response = await customFetch.post("/jobs", job, {
      });
      thunkAPI.dispatch(clearValues());
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized Logging Out!");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }


export const deleteJobThunk = async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try {
      const resp = await customFetch.delete(`/jobs/${jobId}`, {
      });
      thunkAPI.dispatch(getAllJobs());
      return resp.data.msg;
    } catch (error) {
      thunkAPI.dispatch(hideLoading());
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }


export const editJobThunk =  async ({jobId,job},thunkAPI) => {
    try {
      const response = await customFetch.patch(`/jobs/${jobId}`, job, {
      });
      thunkAPI.dispatch(clearValues());
      return response.data.msg;
    } catch (error) {
      thunkAPI.dispatch(hideLoading());
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }