import React from 'react';
import './App.css';
import AppRouter from './Components/AppRouter';
import Footer from './Components/Footer';

function App() {
   return (
      <div>

      <div className='App'>

         <AppRouter />

      </div>
      <footer>
            <Footer/>
         </footer>
      </div>
   );
}

export default App;
