import React from 'react'
import { useSelector } from 'react-redux'
import { Divider } from '@material-ui/core'

export const Contracts = () => {
  const { fetch } = useSelector(state => state.search)
  return (
    <div className='secondInfo__second-info'>
      <h3>Contratos</h3>
      <div>
        {
          ( fetch.Contracts.length > 0 )
          ? fetch.Contracts.map(contract => {
            return( 
            <div
              key={contract._id}
            >
              { contract.Hours.map( hour => {
                return (
                  <div
                    key={hour.id}
                  >
                    { `${hour.hours} ${hour.type}, Código: ${contract.code}` }
                  </div>
                )
              })}

              <div>{ `Valor por ${contract.name} $${contract.mount}` }</div>

              <div style={{marginBottom: '1rem'}}>
                <strong> Días </strong>
                { contract.Days.map( day => {
                  return (
                      <div
                        key={day._id}
                      >
                        { `${day.days.toUpperCase()}, de ${day.open} a  ${day.close}` }
                      </div>
                  )
                })}
              </div>
              <Divider/>
            </div>
            )
          })
          : <div>No hay contratos cargados</div>
        
        }
      </div>
    </div>
  )
}
