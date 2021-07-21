import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/login';


export const NavBar = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch( startLogout() )

  }

  return (
    <div className='navbar__main'>
      <div className='navbar__main-container'>
        <img 
        src='https://res.cloudinary.com/docq8rbdu/image/upload/v1623369167/hr-project/HrLogo_pt2k32.svg' 
        alt='logo proyecto'
        className='navbar__logo'
        />
      <div className='navbar__icons-container'>
        <Link
          to='/dash'
        >
        <img 
            src='https://res.cloudinary.com/docq8rbdu/image/upload/v1623370017/hr-project/home_dlrpuc.svg'
            alt='home icon'
            className='navbar__home-icon'
          />
        </Link>
        <img 
          src='https://res.cloudinary.com/docq8rbdu/image/upload/v1623370127/hr-project/power-button_tuccds.svg'
          alt='home icon'
          className='navbar__logout-icon'
          onClick={ handleLogout }
        />  
      </div>
        
      </div>
    </div>
  )
}
