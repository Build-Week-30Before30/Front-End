import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import api from "../utils/axiosWithAuth";

import TodoCard from "./TodoCard";

const AddTodo = ({touched, errors, status}) => {
    const [task, setTask] = useState([]);

    useEffect(()=> {
        status && setTask(task => [...task, status]);
        console.log(task);
    },[status])
    
    return (
        <div className="add-todo">
            <Form>
                <Field
                    type="text"
                    name="todo"
                    placeholder="Add a BucketList Item"
                    />
                {touched.todo && errors.todo && (
                    <p className="todoReq">{errors.todo}</p>
                )}
                <Field
                    type="date"
                    name="deadline"
                    placeholder="Add a Deadline"
                    />
                {touched.deadline && errors.deadline && (
                    <p className="todoReq">{errors.deadline}</p>
                )}
                <Field
                    component="textarea"
                    type="text"
                    name="description"
                    placeholder="Add a Link"
                    />
                {touched.description && errors.description && (
                    <p className="todoReq">{errors.description}</p>
                )}
                <button type="submit">Add Task</button>
            </Form>
            <TodoCard task={task}/>
        </div>
    )
}
const FormikAddTodo = withFormik ({
    mapPropsToValues({todo, deadline, description}){
        return {
            todo: todo || "",
            deadline: deadline || "",
            description: description || ""
        };
    },

    validationSchema: Yup.object().shape({
        todo: Yup.string().required("Please add a Task"),
        deadline: Yup.string().required("Please add a Deadline"),
        description: Yup.string().required("Please add a Description")
    }),

    handleSubmit(values, {resetForm, setStatus}) {
        api
            .post("/lists", values)
            .then(res => { setStatus(res.data); })
            .catch(error => console.log("Add Todo Error", error));
        
        resetForm();
    }
})(AddTodo);

export default FormikAddTodo;