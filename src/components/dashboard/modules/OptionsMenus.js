import React from 'react'
import { Link } from 'react-router-dom'



export const OptionsMenus = () => {
  const items = [
    {
      id: '1',
      title: 'Modulo Employees',
      grid:'a',
      disabled: false,
      route: 'employees',
      src: 'https://res.cloudinary.com/docq8rbdu/image/upload/v1624579397/hr-project/MainMenu%20SVG/empleado_ytcmuz.svg',
      alt: 'Modulo Empleados'

    },

    {
      id: '2',
      title: 'Modulo Schools',
      grid: 'b',
      disabled: false,
      route: 'schools',
      src: 'https://res.cloudinary.com/docq8rbdu/image/upload/v1624579397/hr-project/MainMenu%20SVG/conocimiento_kbjylt.svg',
      alt: 'Modulo Escuelas'
    },

    {
      id: '3',
      title: 'Modulo Absences',
      grid: 'c',
      disabled: true,
      route: '',
      src: 'https://res.cloudinary.com/docq8rbdu/image/upload/v1624579397/hr-project/MainMenu%20SVG/ausente_zhnrvr.svg',
      alt: 'Modulo Ausentismos'
    },
    {
      id: '4',
      title: 'Modulo Contracts',
      grid: 'd',
      disabled: true,
      route: '',
      src: 'https://res.cloudinary.com/docq8rbdu/image/upload/v1624579397/hr-project/MainMenu%20SVG/contrato_brd6kq.svg',
      alt: 'Modulo Contratos',
    },

    {
      id: '5',
      title: 'Modulo Enroll',
      grid: 'e',
      disabled: true,
      route: '',
      src: 'https://res.cloudinary.com/docq8rbdu/image/upload/v1624579397/hr-project/MainMenu%20SVG/sign-up_axjzi9.svg',
      alt: 'Modulo enrrolamiento'
    },

    {
      id: '6',
      title: 'Comenzar',
      grid: 'f',
      disabled: false,
      route: 'employees',
      src: 'https://res.cloudinary.com/docq8rbdu/image/upload/v1624580565/hr-project/MainMenu%20SVG/cohete_nroo0f.svg',
      alt: 'click para comenzar'
    }
  ]


  return (
    items.map(item => (
      <Link 
        to={`/${item.route}`} 
        key={item.id} 
        style={{textDecoration: 'none'}}
      >
        <div 
          className={ 
            (!item.disabled) 
            ? 'dash__modules-option_menu dash__modules-option_enabled' 
            : 'dash__modules-option_menu dash__modules-option_disabled'
          }
          // style={{gridArea: item.grid}}
          style={
            (item.title === 'Comenzar') 
            ? {gridArea: item.grid, backgroundColor: '#FFF'}
            : {gridArea: item.grid}
          }
        > 
          {
            (!item.disabled)
            ? <img src={item.src} alt={item.alt} style={{height: '80px', padding: '0.3rem'}}/>
            : <img src={item.src} alt={item.alt} style={{height: '80px', padding: '0.3rem'}} className='dash__icon-disabled'/>
          }
          
          {
            (!item.disabled) 
            ? <p className='dash__module-link_enabled'>{ item.title }</p>
            : <p className='dash__module-link_disabled'>{ item.title }</p>
          }

        </div>
      </Link>

    ))

    
  )
}
