import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useFormAndChangeBackground } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { modalIsClose } from '../../actions/modal';
import { userHasBeenModifiedTheResults } from '../../actions/search';
import { SwitchButton } from './SwitchButton'

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

export const FormPropsTextFields = (
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
    isactive: '',
  }}
  ) => {
  const classes = useStyles();
  const [ formValues, handleInputAndBackgroundChange ] = useFormAndChangeBackground(values)
  const { uri } = useSelector(state => state.enviroment)
  const dispatch = useDispatch()

  const {
    id, 
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


  const [state, setState] = useState(true);


  const handleModal = () => {
    dispatch( modalIsClose() )
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const baseUrl = `${ uri.uri }/employees`;
    const endpoint = `update/${ id }`
    const token = localStorage.getItem('token') || ''
    const options = {
      body: JSON.stringify(formValues),
      method: 'PUT',
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

  const handleChange = (event) => {

    formValues.isactive = event.target.checked
    setState(!state);
  };

  return (
    <form  
      noValidate 
      autoComplete="off"
      onSubmit={handleUpdate}
    >
      <div className={classes.root} >
        <TextField label={'Nombre'} value={name} name='name' onChange={ handleInputAndBackgroundChange } />
        <TextField label={'Apellido'} value={lastname} name='lastname'  onChange={ handleInputAndBackgroundChange }/>
        <TextField label={'Dni'} value={dni} name='dni'  onChange={ handleInputAndBackgroundChange }/>
        <TextField label={'Cuil'}  value={cuil} name='cuil'  onChange={ handleInputAndBackgroundChange }/>
        <TextField label={'Email'} value={email} name='email'  onChange={ handleInputAndBackgroundChange }/>
        <TextField label={'Teléfono'} value={phone} name='phone'  onChange={ handleInputAndBackgroundChange }/>
        <TextField label={'Calle'} value={address} name='address'  onChange={ handleInputAndBackgroundChange }/>
        <TextField label={'Altura'}  value={streetnumber} name='streetnumber'  onChange={ handleInputAndBackgroundChange }/>
        <TextField label={'Código postal'}  value={postalcode} name='postalcode'  onChange={ handleInputAndBackgroundChange }/>
        <SwitchButton handleChange= { handleChange } bool={ state } name='isactive'/>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<SaveIcon />}
          type='submit'
          onClick={handleModal}
          >
            Actualizar
        </Button>
      </div>

        { (!state) 
          ? <strong style={{ color: '#C51162', fontSize: '1.5rem' }} >Está por dar de baja al empleado</strong> 
          : <strong style={{ color: '#0A66C2', display: 'none'}}></strong>
        }
        

    </form>
  );
}