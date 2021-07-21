import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonRegister = () => {
  return (
    <div className='buttons__btn-Register'>
      <Link 
        className='buttons__btn-anchor'
        to='/register'
      >
        Registro
      </Link>
    </div>
  )
}
