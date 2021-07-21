import React from 'react'
import { useSelector } from 'react-redux'
import { Divider } from '@material-ui/core'

export const Schools = () => {
  const { fetch } = useSelector(state => state.search)
  return (
    <div className='secondInfo__second-info'>
      <h3>Escuelas</h3>
      <div>
        {
          (fetch.Schools.length > 0)
          ? fetch.Schools.map(school => {
            return(
              <div
                key={school._id}
                
              >
                <div style={{marginBottom: '1rem'}}>
                  <p>{ school.fullname }</p>
                  <p>{ school.address }</p>
                  <p>{ school.educationlevel }</p>
                  <p>{ `${school.numschool} DE ${school.district}` }</p>
                  <p style={{fontSize: '1.5rem'}}>{ `Comuna: ${school.commune}` }</p>
                </div>
                <Divider/>
              </div>
            )})

          : <p>No hay escuelas cargadas</p>
        
        }
      </div>
    </div>
  )
}
