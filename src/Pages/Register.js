import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FormRow, Logo } from '../Components'
import { toast } from 'react-toastify'
import { loginUser, registerUser } from '../FeaturesUser/user/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'





const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
}
function Register() {
 const[values,setValues] = useState(initialState)
 const dispatch = useDispatch();
 const{isLoading,user} = useSelector((store)=>store.user)
 const Navigate = useNavigate();

 const handleChange = (e)=>{
  const name = e.target.name
  const value = e.target.value
  setValues({...values,[name]:value})
 }

 const handleSubmit = (e)=>{
  e.preventDefault()
  const{name,email,password,isMember} = values;
  if(!email || !password || (!isMember && !name)){
    toast.error('Please fill in all fields')
    return;
  }
  if(isMember){
    dispatch(loginUser({email:email,password:password}))
    return;
  }
  dispatch(registerUser({name,email,password}))
 }

 const toggleMember = ()=>{
    setValues({...values, isMember:!values.isMember})
 }

 useEffect(()=>{
  if(user){
    setTimeout(()=>{
     Navigate('/')
    },2000)
  }
 },[user])

  return (
    <Wrapper>
    <div className="container">
    <div className="row justify-content-center">
    <div className="login-form">
    <div className='text-center '><Logo/></div>
       <h2>{values.isMember?'Login':'Register'}</h2>
     <form onSubmit={handleSubmit}>
     {!values.isMember &&(
     <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />
  )}
     <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
     <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />

     <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>{isLoading?'Loading...':'submit'}</button>

     <button type="submit" className="btn btn-success btn-block btn-hipster" disabled={isLoading} onClick={()=>dispatch(loginUser({email:'testUser@test.com',password:'secret'}))}>{isLoading?'Loading...':'demo'}</button>

     <p className='mt-3'> {values.isMember?'Not a member yet?':'Already a member?'}<button type='button' className='normal-btn' onClick={toggleMember}>{values.isMember?'Register':'login'}</button></p>
     </form>
    </div>
    </div>
    </div>
    
</Wrapper>
  )
}

const Wrapper = styled.main`
        body {
          background-color: #f8f9fa;
        }

        .login-form {
          margin-top:4%;
            background-color: #ffffff;
            border-radius: 5px;
            border-top:4px solid blue;
            padding: 70px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }

        .login-form h2 {
            text-align: center;
            margin-bottom: 30px;
        }

        .login-form form .form-control {
            border-radius: 25px;
        }

        .login-form form .btn {
            border-radius: 25px;
        }

        .login-form form .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }

        .login-form form .btn-primary:hover {
            background-color: #0069d9;
            border-color: #0062cc;
        }

    `

export default Register