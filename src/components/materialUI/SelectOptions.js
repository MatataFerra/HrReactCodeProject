
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { typeOfSearch } from '../../actions/search';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SimpleSelect = ( {multiplesOpt = ['Sin opciones'], inputLabel = 'Descripción', textHelper = 'Ayuda'}) => {
  const classes = useStyles();
  const [option, setOption] = React.useState('');
  
  const dispatch = useDispatch()

  const handleChange = ({target}) => {
    setOption(target.value);
    dispatch( typeOfSearch( target.value ) )
  };

  return (
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">{ inputLabel }</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={option}
          onChange={handleChange}
          required = { true }
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          {
            multiplesOpt.map(singleOption => {
              return <MenuItem 
                value={singleOption.translate}
                key={ singleOption.word+1 }
              >
                  { singleOption.word }
              </MenuItem>
            })
          }
          
        </Select>
        <FormHelperText>{ textHelper }</FormHelperText>
      </FormControl>
  )

}

/* <MenuItem value={10}>Ten</MenuItem>
<MenuItem value={20}>Twenty</MenuItem>
<MenuItem value={30}>Thirty</MenuItem> */