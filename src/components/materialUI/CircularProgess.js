import CircularProgress from '@material-ui/core/CircularProgress';


import React from 'react'

export const CircularProgessMUI = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignItems: 'center',
      
    }}>
      <CircularProgress/>
    </div>
  )
}
