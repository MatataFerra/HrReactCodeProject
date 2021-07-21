import React from 'react';
import { FirstInfo } from './FirstInfo';
import { Contracts } from './Contracts';
import { Schools } from './Schools';
import { Absences } from './Absences';
import { Claims } from './Claims'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { modalInfoEmployeeIsClose } from '../../../../actions/modal';
import { cleanUpFetchEmployeeResults } from '../../../../actions/search';
import { makeStyles } from '@material-ui/core';
import { cleanUpInfoSelected } from '../../../../actions/info';



export const DisplayInfo = () => {
  
  const { infoSelected } = useSelector(state => state.info)
  const { openInfo } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  const optionSelected = infoSelected

  const useStyles = makeStyles((theme) => {

    return {
      button: {
      margin: '1rem',
      display: 'none',
      borderRadius: '5px',
      boxShadow: '0px 10px 10px -6px black',

      [theme.breakpoints.down('1024')]: {
        display: 'block',
      },
    }}
  
  })

  const classes = useStyles()
    
  const module = {
    contracts: <Contracts />,
    schools: <Schools />,
    absences: <Absences />,
    claims: <Claims />,
  }
      
  const defaultModule = <div>
                          <Contracts />
                          <Schools />
                          <Absences />
                          <Claims />
                        </div>
      
  const selected = module[optionSelected] || defaultModule

  const handleCloseInfo = () => {
    if(openInfo) {
      dispatch( modalInfoEmployeeIsClose() )
      dispatch( cleanUpFetchEmployeeResults() )
      dispatch( cleanUpInfoSelected() )
    }
  }

  return (
    <div className='contracts__container'>
      <div className='contracts__info-container'>
        <FirstInfo />
        {
          selected
        }
      </div>
      <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleCloseInfo}
          >
            Volver
      </Button>
    </div>
  )
}
