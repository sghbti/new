import React, { Component } from 'react'
import logo from './logo.svg';
import {BrowserRouter as Router ,Route,Switch } from 'react-router-dom'
import './App.css';
import Redirect from './component/redirect'
import Form from  './component/form';
class App extends React.Component {

  render(){
    // console.log('in aapp ',localStorage.removeItem('ttt'));
  return(
    
    <Router>
    <Switch>
      
      
      <Route exact path='/redirect' component={Redirect}/>
      <Route exact path='/' component={Form}/>
      
      </Switch>
      </Router>
      
  
  )

    }
}
export default  App;