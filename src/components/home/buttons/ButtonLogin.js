import React from 'react'
import { Link } from 'react-router-dom'


export const ButtonLogin = () => {
  return (
    <div className='buttons__btn-Login'>
      <Link 
        className='buttons__btn-anchor'
        to='/login'
      >
        Login
      </Link>
    </div>
  )
}
