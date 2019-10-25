import React, { useState, useEffect } from "react";
import moment from "moment";
import api from "../utils/axiosWithAuth";
import "./ComponentCSS/TodoCard.css";
import { removeTodo } from "../actions";
import ListNav from "./ListNav";

const TodoCard = props => {
  const today = moment().format();

  const taskList = Number(props.match.params.listID);
  const [todoItem, setTodoItem] = useState([]);
  const [listInfo, setListInfo] = useState([]);

  useEffect(() => {
    api
      .get(`/lists/${taskList}`)
      .then(response => {
        console.log(response);
        setTodoItem(response.data.items);
        setListInfo(response.data);
      })
      .catch(error => {
        console.log("This is the error from .GET TodoCard", error);
      });
  }, []);

  return (
    <div>
      <header>
        <ListNav />
      </header>
      <div className="list-info-contain">
        <div className="list-info">
          <h2 className="list-info-title">{listInfo.name}</h2>
          <p>{listInfo.description}</p>
          <p>Deadline: {moment(listInfo.deadline).format("MMM DD, YYYY")}</p>
        </div>
      </div>
      <div className="task-list-contain">
        {todoItem.map(task => (
          <div className="task-list">
            <p className="task-title">{task.name}</p>
            <p className="task-info">Deadline: {moment(task.deadline).format("MMM DD, YYYY")}</p>
            <p className="task-info">{moment(task.deadline).to(today, true)} left</p>
            <div>
              <p className="task-info">{task.description}</p>
            </div>
            <button className="task-button" type="submit" onClick={() => removeTodo(task)}>
              Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoCard;
