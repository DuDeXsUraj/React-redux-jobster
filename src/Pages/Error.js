import React from 'react'
import error from '../Images/Error.png'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div className='text-center mt-5'>
      <img src={error} alt='error' className='col-md-6'></img>
      <h3>OH! Page Not Found</h3>
      <p>we can't seem to find the page you're looking for. </p>
      <Link to='/'>back to home</Link>
    </div>
  )
}

export default Error