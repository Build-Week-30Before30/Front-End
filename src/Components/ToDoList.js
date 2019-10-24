import React, { useState, useEffect } from "react";
import api from "../utils/axiosWithAuth";
import TodoCard from "./TodoCard";
import AddTask from "./AddTask";
import { Link } from "react-router-dom";


const ToDoList = props => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    api
      .get("/lists")
      .then(response => {
        console.log(response);
        setUserList(response.data);
      })
      .catch(error => {
        console.log("this is our error from ToDoList.js", error);
      });
  }, []);

  return (
    <div>
      {userList.map(user => {
        return (
          <div>
            <Link to={`/lists/${user.id}`}>
            <h3>{user.name}</h3>
            <p>{user.description}</p>
            <h6>{user.deadline}</h6>

            <AddTask item={user} />

            <TodoCard key={user.id} item={user} toggleItem={props.toggleItem} />
            </Link>
            <button className="clear-button" onClick={props.clearCompleted}>
              {console.log(props)}
              Clear Completed
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
