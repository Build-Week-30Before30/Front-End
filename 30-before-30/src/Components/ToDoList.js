import React, {useState, useEffect} from "react";
import api from "../utils/axiosWithAuth";
import TodoCard from "./TodoCard";


const ToDoList = (props) => {

    api.get('/lists/:id').then((res) => console.log(res.data))
    return (
        <div>
        {props.task.map(item => (
          <TodoCard key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
       
        <button className="clear-button" onClick={props.clearCompleted}>
          {console.log(props)}
          Clear Completed
        </button>
       
      </div>
    );
  };

export default ToDoList;