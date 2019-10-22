import React from 'react';
import moment from 'moment';
import './ComponentCSS/TodoCard.css';
import { removeTodo } from '../actions';

const TodoCard = props => {
   let today = moment().format();
   let dayDue = moment(props.time).format();
   let time = moment(dayDue).to(today);
   //Should work when we get date from axios

   return (
      <div>
         {props.task.map(task => (
            <div>
               <p>{task.name}</p>
               <p>Duedate: {task.deadline}</p>
               <p>{time}</p>
               <div>
                  <p>{task.description}</p>
               </div>
               <button type='submit' onClick={() => removeTodo(task)}>
                  Complete
               </button>
            </div>
         ))}
      </div>
   );
};

export default TodoCard;
