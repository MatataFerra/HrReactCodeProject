import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch } from 'react-redux';
import { infoSelected } from '../../actions/info';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#464646',
  },
}));


export const SimpleList = ({handleCloseInfo}) => {
  const classes = useStyles();
  const [bgColour, setBgColour] = useState("#dc143c")
  const dispatch = useDispatch()

  const styleBackItem = {
    backgroundColor: `${bgColour}`,
    transition: '0.3s background-color ease'
  }

  const handleSelected = (e) => {
    const optionSelected = e.target.innerText
    
    const module = {
      Contratos: 'contracts',
      Escuelas: 'schools',
      Ausencias: 'absences',
      Reclamos: 'claims'
    }

    const defaultModule = 'profile'

    const selected = module[optionSelected] || defaultModule

    dispatch( infoSelected(selected) )

  }

  return (
    
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders" onClick={ handleSelected }>
        <ListItem button >
          <ListItemIcon>
            <i className="fas fa-user-circle info__icon"></i>
          </ListItemIcon>
          <ListItemText primary="Perfil" className='info__text info__text-profile' />
        </ListItem>
        <ListItem button >
          <ListItemIcon>
          <i className="fas fa-file-signature info__icon"></i>
          </ListItemIcon>
          <ListItemText primary="Contratos" className='info__text info__text-contracts'/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <i className="fas fa-school info__icon"></i>
          </ListItemIcon>
          <ListItemText primary="Escuelas" className='info__text info__text-schools'/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <i className="fas fa-times info__icon"></i>
          </ListItemIcon>
          <ListItemText primary="Ausencias" className='info__text info__text-absence'/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <i className="fas fa-exclamation info__icon"></i>
          </ListItemIcon>
          <ListItemText primary="Reclamos" className='info__text info__text-claim'/>
        </ListItem>
        <ListItem 
          button 
          style={styleBackItem}
          onMouseEnter={() => setBgColour("#c02443")}
          onMouseLeave={() => setBgColour("#dc143c")}
          onClick={ handleCloseInfo }
          >
          <ListItemIcon>
          <i className="fas fa-arrow-alt-circle-left info__icon"></i>
          </ListItemIcon>
          <ListItemText primary="VOLVER" className='info__text'/>
        </ListItem>
      </List>
      
    </div>
  );
}