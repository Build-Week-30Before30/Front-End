import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginPage';
import SignupForm from './Components/SignupPage';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import AppRouter from './Components/AppRouter';

function App() {
   return (
      <div className='App'>
         <header>
            <NavBar />
         </header>
         <AppRouter />
      </div>
   );
}

export default App;
