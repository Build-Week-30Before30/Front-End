import React, {useState, useEffect} from "react";
import api from "../utils/axiosWithAuth";
import TodoCard from "./TodoCard";


const ToDoList = (props) => {
const [userList, setUserList] = useState([])

    return (
        <div>
    <TodoCard key={userList.id} item={userList} toggleItem={props.toggleItem} />
 
       
        <button className="clear-button" onClick={props.clearCompleted}>
          {console.log(props)}
          Clear Completed
        </button>
       
      </div>
    );
  };


export default ToDoList;