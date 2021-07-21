import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export const SwitchButton = ({handleChange, bool, name }) => {

  //To run this component you must create a handleChange function (in you outside component), 
  // an useState hook and a name for the name prop

  // in the handle function you need to append the new value to the Form. This an example where you can get
  // the expected result
  // const handleChange = (event) => {
  //   formValues.isActive = event.target.checked
  //   setState(!state);
  // };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={ bool }
            onChange={ handleChange }
            name={name}
            color="secondary"
          />
        }
        label={ ( bool ) ? `Empleado Activo` : `Empleado Inactivo`}
      />
    </FormGroup>
  );
}