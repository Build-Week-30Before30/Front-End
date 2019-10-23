import React from 'react';
import FormikAddTodo from './AddTodo';
import ToDoList from './ToDoList';
import { AddTodo } from './AddTodo';

const HomePage = () => {
   return (
      <div>
         <div className='container'>
            <div className='profile-contain'></div>
            <div className='todo-contain'>
               <FormikAddTodo />
               <ToDoList />
            </div>
         </div>
      </div>
   );
};

export default HomePage;
