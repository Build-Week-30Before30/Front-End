import React from 'react';
import FormikAddBucketList from './AddBucketList';
import ToDoList from './ToDoList';


const HomePage = () => {
   return (
      <div>
         <div className='container'>
            <div className='profile-contain'></div>
            <div className='todo-contain'>
               <FormikAddBucketList />
               <ToDoList />
            </div>
         </div>
      </div>
   );
};

export default HomePage;
