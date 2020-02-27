import React from 'react';
import Nav from './nav/nav.js'
import Login from './forms/login'
import Register from './forms/register'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav /> 
        <Route exact path='/' component={Register} />
        <Route exact path='/login' component={Login} /> 
    </div>
  );
}

export default App;
