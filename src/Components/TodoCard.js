import React, { useState, useEffect } from 'react';
import moment from 'moment';
import api from '../utils/axiosWithAuth';
import './ComponentCSS/TodoCard.css';
import { removeTodo } from '../actions';

const TodoCard = props => {
   // let today = moment().format();
   // let dayDue = moment(todoItem.deadline).format();
   // let time = moment(dayDue).to(today);
   //Should work when we get date from axios
   const [todoItem, setTodoItem] = useState([])
   // const taskItem = props.data.find(listId=>
   //    listId.id === props.match.params.listID);

   useEffect(()=> {
      api
         .get(`/lists/${props.id}`)
         .then(response =>{
            console.log(response)
            setTodoItem(response.items)
         })
         .catch(error=>{
            console.log("This is the error from .GET TodoCard", error)
         })
   }, [])

   return (
      <div>
         {todoItem.map(task => (
            <div>
               <p>{task.name}</p>
               <p>Duedate: {task.deadline}</p>
               {/* <p>{time}</p> */}
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
