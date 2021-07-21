import React from 'react'
import { useSelector } from 'react-redux'

export const FirstInfo = () => {
  const { fetch } = useSelector(state => state.search)

  return (
    <div className='firstInfo__first-info'>
      <h3>{ `${fetch.name} ${fetch.lastname}` }</h3>
      <div className='firstInfo__info-container__employee'>
        <div className='firstInfo__info-employee'>
          <p>Dni: { fetch.dni }</p>
          <p>CUIL: { fetch.cuil }</p>
          <p>Domicilio: { `${fetch.address} ${fetch.streetnumber}` }</p>
          <p>Teléfono: { fetch.phone }</p>
          <p>Email: { fetch.email }</p>
        </div>
        <div>
          <img 
              className='firstInfo__img'
              alt="Imagen de perfil por defecto" 
              src="https://res.cloudinary.com/docq8rbdu/image/upload/v1624262174/hr-project/blank-profile-picture-973460_640_llcwtx.png" 
          />
        </div>
      </div>
    </div>
  )
}
