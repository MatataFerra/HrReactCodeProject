
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch,  Redirect } from 'react-router-dom'
import { enviroment } from '../actions/enviroment'
import { checkTokenAndIsAuth } from '../actions/login'
import { DashBoard } from '../components/dashboard/DashBoard'
import { EmployeesModule } from '../components/dashboard/EmployeesModule/EmployeesModule'
import { HomeScreen } from '../components/home/HomeScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { RegisterScreen } from '../components/login/RegisterScreen'
import { CircularProgessMUI } from '../components/materialUI/CircularProgess'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'



export const AppRouter = () => {
  
  const { checkAuth,  uid} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  dispatch( enviroment('prod', 'http://localhost:4000/api', 'https://apphr-react.herokuapp.com/api') )

  useEffect(() => {
    dispatch( checkTokenAndIsAuth() )
  }, [dispatch])
  
  if( !checkAuth ) {
    return (

      <CircularProgessMUI />

    )
  }

  return (
      <Router>
        <div >
          <Switch> 

            <PublicRoute exact path='/login' component={ LoginScreen } isAuthenticated={ !!uid } />
            <PublicRoute exact path='/register' component={ RegisterScreen } isAuthenticated={ !!uid } />
            <PublicRoute exact path='/' component={ HomeScreen } isAuthenticated={ !!uid } />
            
            <PrivateRoute exact path='/employees' component={ EmployeesModule } isAuthenticated={ !!uid } /> 
            <PrivateRoute exact path='/dash' component={ DashBoard } isAuthenticated={ !!uid } /> 

            <Redirect to='/'/>
          </Switch>
        </div>
    </Router>

  )
}
