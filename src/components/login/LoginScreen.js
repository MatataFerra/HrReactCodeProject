import React from 'react'
import SignIn from '../materialUI/SignIn'

import { Link } from 'react-router-dom'
import { FabIcon } from '../materialUI/FabIcon'

export const LoginScreen = () => {

  const styles = {
    top: '3rem',
    left: '1rem'
  }

  return (
    <>
      <SignIn />
      <Link to='/home'>

          <FabIcon iconClass='fas fa-chevron-left' styles={styles}/>

      </Link>
    </>
  )
}
