import React from 'react'
import { tecnologies } from '../../helpers/content/informationImage'
import { ButtonLogin } from './buttons/ButtonLogin'
import { ButtonRegister } from './buttons/ButtonRegister'


export const Description = () => {
  

  const style = {
    display: 'flex',
    marginTop: '1rem',
    justifyContent: 'center',
  }

  return (
    
    <div className='description__area-container'>
      <div className='description__container'>
        <h1 className='description__title'>BASE DE DATOS HR</h1>
        <p className='parraf__black'>
          Una base de datos creada con el fin de compartir la información de forma rápida, actualizada y veraz. 
          El fin de este proyecto es netamente EDUCATIVO, los datos que figuran aquí no son reales.
        </p>
        <p>
          El proyecto "HR | DataBase" nace de la necesidad de implementar 
          todo lo aprendido en el curso de Desarrollo Web 
          en un entorno real con necesidades reales. 
          El proyecto está en constante desarrollo, por eso las tecnologías, vistas y la lógica 
          se irán actualizando conforme lo crea conveniente. 
        </p>

        <p className='description__anchor-container_version parraf__black'>
          El proyecto inicialmente se encuentra alojado en <a href='https://apprrhh.herokuapp.com/' target='_blank' rel="noreferrer"> 
                CLICK PARA IR A LA VERSIÓN 1.0 
            </a>
        </p>
    
        <p>
          El principal cambio con respecto a la anterior es la 
            <span className='parraf__black'> implementación del Framework React </span> 
          para el front-end
        </p>

        <p>
          Las principales tecnologías implementadas son:
        </p>
        
        <ul className='description__ul'>
          { tecnologies.map( tecnology => {
            return (
              <li key={tecnology}> 
                <img 
                  src={`${tecnology}`} 
                  alt='Teconología de programación usados'
                  className='description_image-teconology'
                /> 
              </li>
            )
          } ) }
        </ul>
        
        <p className='description__anchor-container_git parraf__black'>
          El Proyecto está 100% implementado por <a href='https://github.com/MatataFerra' target='_blank' rel="noreferrer"> Matata Ferra </a>
        </p>
        <div style={ style }>
          <ButtonLogin />
          <ButtonRegister />
        </div>
      </div>
    </div>
    
  )
}
