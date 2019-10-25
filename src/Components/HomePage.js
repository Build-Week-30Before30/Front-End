import React from 'react';
import ToDoList from './ToDoList';
import HomePageNav from "./HomePageNav";

const HomePage = () => {
   return (
      <div>
         <header>
            <HomePageNav />
         </header>
         <div className='container'>
            <div className='profile-contain'></div>
            <div className='todo-contain'>
               <ToDoList />
            </div>
         </div>
      </div>
   );
};

export default HomePage;
