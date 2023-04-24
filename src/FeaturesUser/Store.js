
import { configureStore } from '@reduxjs/toolkit';

import JobSlice from './job/JobSlice';
import UserSlice from './user/UserSlice';
import AllJobsSlice from './all-jobs/AllJobsSlice';

// Configure Redux store
const store = configureStore({
  reducer: {
    user: UserSlice,
    job:JobSlice,
    allJobs:AllJobsSlice,
  },
});

export default store;