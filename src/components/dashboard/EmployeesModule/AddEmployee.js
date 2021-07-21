import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { useFormAndChangeBackground } from '../../../hooks/useForm';
import Swal from 'sweetalert2';
import { modalAddEmployeeClose } from '../../../actions/modal';
import { userHasBeenModifiedTheResults } from '../../../actions/search';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '400px',
      height: '320px',
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'scroll',

      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },

      [theme.breakpoints.down('600')]: {
          width: '90%',
      },

      
    },


    button: {
      margin: theme.spacing(1),
    },

    
  }

});

//El AddEmployeeForm es un Modal que maneja su estado de manera independiente

export const AddEmployeeForm = (
  { values = {
    id: '', 
    name: '',
    lastname: '',
    dni: '',
    email: '',
    phone: '',
    address: '',
    streetnumber: '',
    cuil: '',
    postalcode: '',
    isactive: true,
  }}
  ) => {
  const classes = useStyles();
  const [ formValues, handleInputAndBackgroundChange ] = useFormAndChangeBackground(values) 
  const dispatch = useDispatch()
  const { uri } = useSelector(state => state.enviroment)

  const {
    name,
    lastname,
    dni,
    email,
    phone,
    address,
    streetnumber,
    cuil,
    postalcode,
  } = formValues

  const handleModal = () => {
    dispatch( modalAddEmployeeClose() )
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const baseUrl = `${uri.uri}/employees`;
    const endpoint = `create`
    const token = localStorage.getItem('token') || ''
    const options = {
      body: JSON.stringify(formValues),
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "x-token": token
      },
    }

    try {
      const resp = await fetch(`${baseUrl}/${endpoint}`, options)
      const body = await resp.json()

      if(body.ok) {
        dispatch( userHasBeenModifiedTheResults(true) )
        return Swal.fire('OK', body.Message, 'success')
      } else {
        return Swal.fire('Error', body.Message, 'error')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <h2>Dar de alta un nuevo empleado !</h2>
    <form  
      noValidate 
      autoComplete="off"
      onSubmit={handleUpdate}
      className='modal__'
    >
      <div className={classes.root} >
        <TextField autoComplete='off' label={'Nombre'} value={name} name='name' onChange={ handleInputAndBackgroundChange } />
        <TextField autoComplete='off' label={'Apellido'} value={lastname} name='lastname'  onChange={ handleInputAndBackgroundChange }/>
        <TextField autoComplete='off' label={'Dni'} value={dni} name='dni'  onChange={ handleInputAndBackgroundChange }/>
        <TextField autoComplete='off' label={'Cuil'}  value={cuil} name='cuil'  onChange={ handleInputAndBackgroundChange }/>
        <TextField autoComplete='off' label={'Email'} value={email} name='email'  onChange={ handleInputAndBackgroundChange }/>
        <TextField autoComplete='off' label={'Teléfono'} value={phone} name='phone'  onChange={ handleInputAndBackgroundChange }/>
        <TextField autoComplete='off' label={'Calle'} value={address} name='address'  onChange={ handleInputAndBackgroundChange }/>
        <TextField autoComplete='off' label={'Altura'}  value={streetnumber} name='streetnumber'  onChange={ handleInputAndBackgroundChange }/>
        <TextField autoComplete='off' label={'Código postal'}  value={postalcode} name='postalcode'  onChange={ handleInputAndBackgroundChange }/>
        
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CreateIcon />}
          type='submit'
          onClick={handleModal}
          >
            Crear
        </Button>
      </div>
        
    </form>

    </>
  );
}