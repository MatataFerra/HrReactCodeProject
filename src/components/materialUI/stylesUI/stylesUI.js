import { makeStyles } from '@material-ui/core/styles';

export const styleUI = {
  styleShowData: {
    height: 650,
    width: '80%',
    margin: '0 auto',
  },

  fabStyleEmployee: {
    top: '-3rem',
    left: '1rem'
  },

  buttonEditStyle: {
    width: '100%',
    fontSize: '0.8rem',
    margin: '0 auto',
  },

  buttonRemoveStyle: {
    width: '50px',
    fontSize: '0.5rem'
  },

}

export const stylesModal = makeStyles((theme) => {

  return {
    
    modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),


  }}

});

