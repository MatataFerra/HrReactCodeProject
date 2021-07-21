import React from 'react'
import { NavBar } from './NavBar'
import { MainMenu } from './MainMenu'


export const DashBoard = () => {
  
  return (
    <div>
      <NavBar />
      <div className='dash__main'>
        <h1 className='dash__title-main'>Menu principal</h1>
        <div className='dash__container'>

          <MainMenu />

        </div>
      </div>
    </div>
  )
}
