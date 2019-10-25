import React, { useState, useEffect } from 'react';
import moment from 'moment';
import api from '../utils/axiosWithAuth';
import './ComponentCSS/TodoCard.css';
import { removeTodo } from '../actions';
import ListNav from './ListNav'

const TodoCard = props => {
   const today = moment().format();

   const taskList = Number(props.match.params.listID);
   const [todoItem, setTodoItem] = useState([])

   useEffect(() => {
      api
         .get(`/lists/${taskList}`)
         .then(response => {
            setTodoItem(response.data.items)
         })
         .catch(error => {
            console.log("This is the error from .GET TodoCard", error)
         })
   }, [])

   return (
      <div>
         <header>
            <ListNav />
         </header>
         <div>
            {todoItem.map(task => (
               <div>
                  <p>{task.name}</p>
                  <p>Deadline: {moment(task.deadline).format("MMM DD, YYYY")}</p>
                  <p>{moment(task.deadline).to(today, true)} left</p>
                  <div>
                     <p>{task.description}</p>
                  </div>
                  <button type='submit' onClick={() => removeTodo(task)}>
                     Complete
               </button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default TodoCard;
