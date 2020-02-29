import React from 'react';
import Nav from './nav/nav.js'
import Login from './forms/login'
import Landing from './landing/landing.js'
import Register from './forms/register'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="main-header">
        <Nav /> 
        <Route exact path='/' component={Landing} /> 
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} /> 
        </header> 
    </div>
  );
}

export default App;
