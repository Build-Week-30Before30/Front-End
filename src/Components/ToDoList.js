import React, { useState, useEffect } from "react";
import api from "../utils/axiosWithAuth";
import moment from "moment";
import AddTask from "./AddTask";
import { Link } from "react-router-dom";
import "./ComponentCSS/ToDoList.css";


const ToDoList = props => {
  const today = moment().format();
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
    <div>

      <div className="grid-list">
        {userList.map(user => {
          return (
            <div className="list-contain">
              <Link to={`/list/${user.id}`}>
                <h3>{user.name}</h3>
                <p>{user.description}</p>
                <span>
                  <h6>Deadline: {moment(user.deadline).format("MMM DD, YYYY")}</h6>
                  <p>{moment(user.deadline).to(today, true)} left</p>
                </span>
              </Link>
              {console.log(user)}
              <AddTask listId={user.id} />

              <button className="clear-button" onClick={props.clearCompleted}>
                Clear List
            </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
{/* <TodoCard key={user.id} listId={user.id} toggleItem={props.toggleItem} /> */ }
