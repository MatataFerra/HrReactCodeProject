import React from 'react';
import Fab from '@material-ui/core/Fab';

export const FabIcon = ({iconClass, styles, fabClass = 'login__fab-Button', onClick}) => {

  return (
    <Fab 
          color="primary" 
          aria-label="add" 
          className={ fabClass }
          style={styles}
          onClick={ onClick }
        >
          <i className={ iconClass } ></i>
    </Fab>
  )
}
