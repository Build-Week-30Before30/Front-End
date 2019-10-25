import React from 'react';
import './App.css';
import AppRouter from './Components/AppRouter';
import Footer from './Components/Footer';

function App() {
   return (
      <div className='App'>

         <AppRouter />
         
         <footer>
            <Footer/>
         </footer>
      </div>
   );
}

export default App;
