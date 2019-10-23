import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import api from '../utils/axiosWithAuth';
import { addNewTodo } from '../actions';

import TodoCard from './TodoCard';

const AddTodo = ({ touched, errors, status }) => {
   const [task, setTask] = useState([]);

   useEffect(() => {
      status && setTask(task => [...task, status]);
      console.log(task);
   }, [status]);

   return (
      <div className='add-todo'>
         <Form>
            <Field
               type='text'
               name='name'
               placeholder='Add a BucketList Item'
            />
            {touched.name && errors.name && (
               <p className='todoReq'>{errors.name}</p>
            )}
            <Field type='date' name='deadline' placeholder='Add a Deadline' />
            {touched.deadline && errors.deadline && (
               <p className='todoReq'>{errors.deadline}</p>
            )}
            <Field
               component='textarea'
               type='text'
               name='description'
               placeholder='Add a Link'
            />
            {touched.description && errors.description && (
               <p className='todoReq'>{errors.description}</p>
            )}
            <button type='submit' onClick={() => addNewTodo(task)}>
               Add Task
            </button>
         </Form>
         <TodoCard task={task} />
      </div>
   );
};
const FormikAddTodo = withFormik({
   mapPropsToValues({ name, deadline, description }) {
      return {
         name: name || '',
         deadline: deadline || '',
         description: description || ''
      };
   },

   validationSchema: Yup.object().shape({
      name: Yup.string().required('Please add a Task'),
      deadline: Yup.string().required('Please add a Deadline'),
      description: Yup.string().required('Please add a link')
   }),

   handleSubmit(values, { resetForm, setStatus }) {
      api.post('/lists', values)
         .then(res => {
            setStatus(res.data);
         })
         .catch(error => console.log('Add Todo Error', error));

      resetForm();
   }
})(AddTodo);

export default FormikAddTodo;
