import React from 'react';
import FormikAddTodo from './AddTodo';

const HomePage = () => {
   return (
      <div>
         <div className='container'>
            <div className='profile-contain'></div>
            <div className='todo-contain'>
               <FormikAddTodo />
            </div>
         </div>
      </div>
   );
};

export default HomePage;
