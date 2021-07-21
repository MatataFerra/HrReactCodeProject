import React from 'react';
import { Button } from '@material-ui/core';
import { stylesModal, styleUI } from './stylesUI/stylesUI';
import { ModalButton } from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { FormPropsTextFields } from './TextFields'
import { 
  modalInfoEmployeeIsOpen, 
  modalIsClose, 
  modalIsOpen 
} from '../../actions/modal';

// import { InfoEmployee } from '../dashboard/EmployeesModule/InfoEmployee'

export const ButtonEditAndInfo = () => {

  const { rowSelected } = useSelector(state => state.row)
  const { open, openInfo } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  const classes = stylesModal();

  const handleOpen = () => {
    if(!open){
      dispatch( modalIsOpen() )
    }
  };

  const handleClose = () => {
    if(open) {
      dispatch( modalIsClose() )
    }
  };

  const handleOpenInfo = () => {
    if(!openInfo) {
      dispatch( modalInfoEmployeeIsOpen() )
    }
  }



 

  return (
    <>
    <div>
      <ModalButton 
        classes={classes} 
        open={ open } 
        handleClose={handleClose}
        body= { <FormPropsTextFields values={rowSelected}/> }
        />

      {/* <ModalButton 
        classes={classes} 
        open={ openInfo } 
        handleClose={handleCloseInfo}
        body= { <InfoEmployee /> }
        /> */}

    </div>

    <div className= 'employees__buttons-grid'>
      <Button 
        variant="contained" 
        color="primary" 
        className='employees__button-edit'
        style={ styleUI.buttonEditStyle }
        onClick= { handleOpen }
        >
        Editar
      </Button>

      <Button 
        variant="contained" 
        color="secondary" 
        className='employees__button-delete'
        style={ styleUI.buttonEditStyle }
        onClick= { handleOpenInfo }
        >
        <i className="fas fa-info-circle"></i>
      </Button>

      
    </div>
    </>
  )
}
