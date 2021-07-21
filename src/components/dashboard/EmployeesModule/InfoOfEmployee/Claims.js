import React from 'react'
import { useSelector } from 'react-redux'
import { Divider } from '@material-ui/core'

export const Claims = () => {
  const { fetch } = useSelector(state => state.search)
  return (
    <div className='secondInfo__second-info'>
      <h3>Reclamos</h3>
      <div>
        {
          (fetch.Claims.length > 0)
          ? fetch.Claims.map(claim => {
            return (
              <div
                key={claim._id}
                
              >
                <div style={{marginBottom: '1rem'}}>
                  <p>{ `Contenido: ${claim.content} `}</p>
                  <p>{ `Fecha de enviado: ${claim.dayofclaim} `}</p>
                  <a href={claim.linkemail} target='_blank' rel="noreferrer">{ `Link al email`}</a>
                  <p>{ `Estado: ${claim.status.toUpperCase()} `}</p>
                  <p>{ `Respuesta: ${claim.tracing} `}</p>
                  <strong>{ `Prioridad: ${claim.attend} `}</strong>
                </div>
                <Divider />
              </div>
            )
          })
          : <p>No hay Reclamos cargados</p>
        
        }
      </div>
    </div>
  )
}
