import React from 'react'
import { Description } from './Description'


export const HomeScreen = () => {

  return (
    <div className='home__container'>
      <div className='home_image-container'>
        <img 
          src='https://res.cloudinary.com/docq8rbdu/image/upload/v1623018100/hr-project/homeVector_powfmw.svg' 
          alt='Escritorio de trabajo'
          className='home__desk-img'
          />
      </div>
      <Description />
    </div>
  )
}
