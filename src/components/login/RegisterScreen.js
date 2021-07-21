import React from 'react'
import { Link } from 'react-router-dom'
import { FabIcon } from '../materialUI/FabIcon'
import SignUp from '../materialUI/SingUp'

export const RegisterScreen = () => {

  const styles = {
    top: '-5rem',
    left: '1rem'
  }

  return (
    <>
    <SignUp />

    <Link to='/'>

          <FabIcon iconClass='fas fa-chevron-left' styles={ styles }/>

    </Link>
    </>
  )
}