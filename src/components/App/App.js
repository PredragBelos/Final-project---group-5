import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../Login page/loginPage';

function App() {
  return (
    <div className="App">
     <Route path="/login" component={LoginPage}/>
    </div>
  );
}

export default App;
