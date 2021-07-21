import React  from 'react';
import { NavBar } from '../NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { modalInfoEmployeeIsClose } from '../../../actions/modal';
import { CircularProgessMUI } from '../../materialUI/CircularProgess'
import { cleanUpFetchEmployeeResults } from '../../../actions/search';
import { Avatar } from '@material-ui/core';
import { SimpleList } from '../../materialUI/SimpleList'
import { DisplayInfo } from './InfoOfEmployee/DisplayInfo';
import { cleanUpInfoSelected } from '../../../actions/info';





export const InfoEmployee = () => {
  const { fetch, fetchLoading } = useSelector(state => state.search)
  const { openInfo } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  const handleCloseInfo = () => {
    if(openInfo) {

      dispatch( modalInfoEmployeeIsClose() )
      dispatch( cleanUpFetchEmployeeResults() )
      dispatch( cleanUpInfoSelected() )
    }
  }

  if (fetchLoading) {
    return (<CircularProgessMUI/>)
  }

  return (
    <div>
      <NavBar />

      <div className='info__container'>
        <div className='info__profile-container'>
          <div className='info__profile-user'>
            <Avatar 
              className='info__img'
              alt="Imagen de perfil por defecto" 
              src="https://res.cloudinary.com/docq8rbdu/image/upload/v1624262174/hr-project/blank-profile-picture-973460_640_llcwtx.png" 
            />
            <div className='info__title'>
              <h2>{ fetch.name }</h2>
              <p>{ fetch.phone }</p>
            </div>
          </div>

        <SimpleList handleCloseInfo={ handleCloseInfo }/>

        </div>
        <div className='info__data-container'>
          <DisplayInfo />
        </div>
      </div>
    </div>
  )
}
