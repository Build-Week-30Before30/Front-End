import React, { useState, useEffect } from "react";
import api from "../utils/axiosWithAuth";
import TodoCard from "./TodoCard";
import AddTask from "./AddTask";
import { Link } from "react-router-dom";
import "./ComponentCSS/ToDoList.css";


const ToDoList = props => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    api
      .get("/lists")
      .then(response => {
        setUserList(response.data);
      })
      .catch(error => {
        console.log("this is our error from ToDoList.js", error);
      });
  }, []);

  return (
    <div className="grid-list">
      {userList.map(user => {
        return (
          <div className="list-contain">
            {/* <Link to={`/lists/${user.id}`}> */}
            <h3>{user.name}</h3>
            <p>{user.description}</p>
            <h6>{user.deadline}</h6>

            <AddTask listId={user.id} />

            <TodoCard key={user.id} listId={user.id} toggleItem={props.toggleItem} />
            {/* </Link> */}
            <button className="clear-button" onClick={props.clearCompleted}>
              Clear Completed
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
