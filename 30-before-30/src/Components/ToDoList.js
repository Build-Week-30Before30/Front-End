import React, {useState, useEffect} from "react";
import api from "../utils/axiosWithAuth";
import TodoCard from "./TodoCard";


const ToDoList = (props) => {
const [userList, setUserList] = useState([])

  useEffect(()=> {
    api
      .get("/lists")
      .then(response => {
        console.log(response)
        setUserList(response.data)
      })
      .catch(error => {
        console.log("This is an error from .GET ToDoList", error)
      })
  },[])


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