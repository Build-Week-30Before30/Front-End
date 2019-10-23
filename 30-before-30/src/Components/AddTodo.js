import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import api from "../utils/axiosWithAuth";
import "./ComponentCSS/AddTodo.css";
import TodoCard from "./TodoCard";

const AddTodo = ({touched, errors, status}) => {
    const [task, setTask] = useState([]);

    useEffect(()=> {
        status && setTask(task => [...task, status]);
        console.log(task);
    },[status])
    
    return (
        <div className="form-contain">
            <div className="add-todo">
                <Form className="todo-form">
                    <div className="input-contain">
                        <Field
                            type="text"
                            name="todo"
                            placeholder="Add a BucketList Item"
                            />
                        {touched.todo && errors.todo && (
                            <p className="todoReq">{errors.todo}</p>
                        )}
                    </div>
                    <div className="input-contain">
                        <Field
                            type="date"
                            name="deadline"
                            placeholder="Add a Deadline"
                            />
                    </div>
                    <div className="input-contain">
                        <Field
                            component="textarea"
                            type="text"
                            name="description"
                            placeholder="Add a Link"
                            />
                        {touched.description && errors.description && (
                            <p className="todoReq">{errors.description}</p>
                        )}
                    </div>
                    <button type="submit">Add Task</button>
                </Form>
                <TodoCard task={task}/>
            </div>
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
        description: Yup.string().required("Please add a Link")
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