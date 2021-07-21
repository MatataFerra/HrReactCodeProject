import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchToGetFinalResult, wordToSearch } from '../../actions/search'
import { options } from '../../helpers/content/informationImage'
import { useForm } from '../../hooks/useForm'
import  { SimpleSelect }  from '../materialUI/SelectOptions'

export const SearchBar = () => {

  const dispatch = useDispatch()

  const [ formValues, handleInputChange ] = useForm({
    search: ''
  })
  
  const { search } = formValues

  useEffect(() => {
    dispatch( wordToSearch( search ) )
  }, [dispatch, search])


  const handleSearch = (e) => {
    e.preventDefault()
    
    dispatch( fetchToGetFinalResult() )
  }


  return (
    <div className='search__container'>
        <form onSubmit={handleSearch} className='search__field-container'>
          <input 
            type='text'
            placeholder='Search...'
            className='search__input'
            name='search'
            value={search}
            onChange={handleInputChange}
            autoComplete='off'
          />
          <i 
            className="fas fa-search pointer"
            onClick={ handleSearch }
          ></i>
        </form>

      <SimpleSelect 
        multiplesOpt={options} 
        inputLabel={'Tipo de búsqueda'} 
        textHelper='Los resultados se mostrarán abajo'
      />
    </div>
  )
}
