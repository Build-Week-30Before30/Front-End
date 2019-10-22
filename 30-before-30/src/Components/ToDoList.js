import React from "react";
import api from "../utils/axiosWithAuth";


const ToDoList = () => {
    api.get('/lists').then((res) => console.log(res.data))
    return (
        <div>
            
        </div>
    )
}

export default ToDoList;