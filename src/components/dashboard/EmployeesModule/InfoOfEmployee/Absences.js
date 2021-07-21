import React from 'react'
import { useSelector } from 'react-redux'
import { Divider } from '@material-ui/core'

export const Absences = () => {
  const { fetch } = useSelector(state => state.search)
  return (
    <div className='secondInfo__second-info'>
      <h3>Ausencias</h3>
      <div>
        {
          (fetch.Absences.length > 0)
          ? fetch.Absences.map(absence => {
            return (
              <div
                key={absence._id}
              >
                <p>{`Fecha de inicio ${absence.start}`}</p>
                <p>{`Fecha de Fin ${absence.end}`}</p>

                {absence.Articles.map(article => {
                  return (
                    <div
                      key={ article._id }
                    >
                      <div style={{marginBottom: '1rem'}}>
                        <p>{ `Artículo ${article.number} ${ article.article }` }</p>
                        <p>{ `Descripción: ${article.description}` }</p>
                      </div>
                      <Divider/>
                    </div>
                  )
                })}
              </div>
            )
          })
          : <p>No hay Ausencias cargadas</p>
        
        }
      </div>
    </div>
  )
}
