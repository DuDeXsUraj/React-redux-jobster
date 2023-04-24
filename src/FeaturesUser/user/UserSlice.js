import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../Utils/Axios';
import { toast } from 'react-toastify';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../Utils/LocalStorage';
import { clearStoreThunk } from './UserThunk';



// Define initial state
const initialState = {
  user:getUserFromLocalStorage(),
  isLoading: false,
  isSidebarOpen:false,
  isAuthenticated:false
};


export const loginUser = createAsyncThunk('user/loginUser', async (user,thunkAPI) => {
  try {
    const response = await customFetch.post('/auth/login',user,thunkAPI)
    console.log(response.data)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
  });
export const registerUser = createAsyncThunk('user/registerUser', async (user,thunkAPI) => {
  try {
    const response = await customFetch.post('/auth/register',user,thunkAPI)
    console.log(response.data)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
  });
  
 export const updateUser = createAsyncThunk('user/updateUser',async (user,thunkAPI)=>{
  try {
    const response = await customFetch.patch('/auth/updateUser',user,{
    })
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
 })

 export const clearStore = createAsyncThunk('user/clearStore',clearStoreThunk);

 const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state,{payload}) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },

  },
    extraReducers:(builder)=> {
      // Handling registerUser request
      builder.addCase(registerUser.pending ,(state) => {
        state.isLoading = true;
      })
      builder.addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const{user} = action.payload
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`Hello There ! ${user.name}`);
      })
      builder.addCase(registerUser.rejected, (state,action) => {
        state.isLoading = false;
        toast.error(action.payload);
      })
      builder.addCase(loginUser.pending ,(state) => {
        state.isLoading = true;
      })
      builder.addCase(loginUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        state.isAuthenticated = true;
        toast.success(`Welcome Back! ${user.name}`);
      })
      builder.addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true; 
        toast.error(action.payload);
      })
     .addCase(updateUser.pending ,(state) => {
        state.isLoading = true;
      })
     .addCase(updateUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`User Updated!`);
      })
     .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      })

      .addCase(clearStore.rejected, () => {
        toast.error('There was an error..');
      })}
  });

  export const{toggleSidebar,logoutUser} = userSlice.actions;
export default userSlice.reducer