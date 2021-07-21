import React, { useEffect, useState } from 'react';
import { NavBar } from '../NavBar';
import  { SearchBar }  from '../../materialUI/SearchBar';
import { ShowDataOnTable } from '../../materialUI/ShowDataOnTable';
import { ButtonEditAndInfo } from '../../materialUI/ButtonEditAndInfo';
import { FabIcon } from '../../materialUI/FabIcon';
import { stylesModal, styleUI } from '../../materialUI/stylesUI/stylesUI';
import { useDispatch, useSelector } from 'react-redux';
import { cleanUpResults, cleanUpTypeOfSearch, reducerFetchToGetEmployeeResults, userHasBeenModifiedTheResults } from '../../../actions/search';
import { fetchToGetAllEmployees } from '../../../helpers/functions/fetchToGetAll';
import { rowUnSelected } from '../../../actions/row';
import { ModalButton } from '../../materialUI/Modal';
import { modalAddEmployeeClose, modalAddEmployeeIsOpen } from '../../../actions/modal';
import { AddEmployeeForm } from './AddEmployee'
import { InfoEmployee } from './InfoEmployee'


export const EmployeesModule = () => {

  let i = 1
  const dispatch = useDispatch()

  const { results, typeToSearch, isModified } = useSelector(state => state.search)
  const { uri } = useSelector(state => state.enviroment)
  const { isAuth } = useSelector(state => state.auth)
  const { openInfo, openAdd } = useSelector(state => state.modal)
  const { rowSelected } = useSelector(state => state.row)
  const endpoint = `employees/search/info/${rowSelected.dni}`

  const initEmployee = []

  useEffect(() => {
    if ( isAuth ) {
      dispatch(cleanUpTypeOfSearch())
      dispatch( cleanUpResults() )
      dispatch( rowUnSelected() )
    }
  }, [ dispatch, isAuth ])

  const [employees, setEmployees] = useState(initEmployee)

  useEffect(() => {
    const baseUrl = uri.uri
    const endpoint = 'employees/all'
    
    if(isModified) {
      fetchToGetAllEmployees( baseUrl, endpoint, setEmployees )
      dispatch( rowUnSelected() )
      return dispatch( userHasBeenModifiedTheResults(false) )
    }

  }, [ setEmployees, isModified, dispatch, uri ])

  useEffect( () => {
    const baseUrl = uri.uri
    const endpoint = 'employees/all'
    if(typeToSearch === 'all') {
      dispatch( cleanUpResults() )
      fetchToGetAllEmployees( baseUrl, endpoint, setEmployees )
    }
    
  }, [ typeToSearch, dispatch, uri ])

  useEffect(() => {
    if(typeToSearch === 'none'){
      return setEmployees([])
    }
  }, [typeToSearch])

  useEffect(() => {
    if( results ) {
      return setEmployees(results)
    }
  }, [ results ])

  useEffect(() => {
    if( openInfo ) {
      dispatch( reducerFetchToGetEmployeeResults(uri.uri, endpoint) )
    }
  }, [ openInfo, dispatch, uri.uri, endpoint ])

  //Rows se renderiza cada vez que se realiza una consulta. No funcionó por ahora con useEffect
  const rows = employees.map(employee => ({
    id: employee._id,
    counter: `${ i++ }`,
    lastname: employee.lastname,
    name: employee.name,
    dni: employee.dni,
    email: employee.email,
    phone: employee.phone,
    addressAndNumber: `${employee.address} ${employee.streetnumber}`,
    address: employee.address,
    streetnumber: employee.streetnumber,
    cuil: employee.cuil,
    postalcode: employee.postalcode,
    isactive: employee.isactive,

  }))


  const columns = [
    { field: 'counter', headerName: '#', width: 70, disableColumnMenu: true },
    { field: 'lastname', headerName: 'Apellido', width: 120 },
    { field: 'name', headerName: 'Nombre', width: 120 },
    { field: 'dni', headerName: 'DNI', width: 100 },
    { field: 'email', headerName: 'Email', width: 170 },
    { field: 'phone', headerName: 'Teléfono', width: 120 },
    { field: 'addressAndNumber', headerName: 'Domicilio', width: 150 },
    { field: 'address', headerName: 'address', width: 150, hide: true },
    { field: 'streetnumber', headerName: 'streetnumber', width: 150, hide: true },
    { field: 'cuil', headerName: 'cuil', width: 150, hide: true },
    { field: 'postalcode', headerName: 'postalcode', width: 150, hide: true },
    { field: 'isactive', headerName: 'isactive', width: 150, hide: true },
    { field: 'col8', headerName: 'Acciones', width: 150, renderCell: ButtonEditAndInfo,  disableColumnMenu: true },
  ];



  const classes = stylesModal();

  
  const handleOpenAddEmployee = () => {
    if(!openAdd){
      dispatch( modalAddEmployeeIsOpen() )
    }
  };

  const handleCloseAddEmployee = () => {
    if(openAdd) {
      dispatch( modalAddEmployeeClose() )
    }
  };

  if( openInfo ) {
    return (
      <InfoEmployee />
    )
  } else {
    return (
      <div >
        <NavBar />
        <div className='employees__main-container'>
          <h1 className='dash__title-main'>Employees Module</h1>
          <SearchBar />
          <ShowDataOnTable 
            style={ styleUI.styleShowData } 
            rows={ rows } 
            columns={ columns }/>
            
        </div>
  
        <div>
          <ModalButton 
            classes={ classes } 
            open={ openAdd } 
            handleClose={ handleCloseAddEmployee }
            body= { <AddEmployeeForm />}
            
          />
        </div>
        
        <FabIcon 
          iconClass='fas fa-plus' 
          styles={ styleUI.fabStyleEmployee } 
          fabClass='employees__fab-add'
          onClick = { handleOpenAddEmployee } 
        />
      </div>
    )
  }

  
}
