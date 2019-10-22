import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import api from '../utils/axiosWithAuth';

const SignupForm = ({ touched, errors, status }) => {
   const [signup, setSignup] = useState([]);
   useEffect(() => {
      if (status) {
         console.log('status :', status);
         setSignup([...signup, status]);
      }
   }, [status]);

   return (
      <div className='signup-form'>
         <h1>Signup Page</h1>
         <Form>
            <label>
               {' '}
               Name:
               <Field type='text' name='username' placeholder='Username' />
               {touched.name && errors.name && (
                  <p className='error'>{errors.name}</p>
               )}
            </label>
            <label>
               {' '}
               Password:
               <Field type='password' name='password' placeholder='Password' />
               {touched.password && errors.password && (
                  <p className='error'>{errors.password}</p>
               )}
            </label>
            <button type='submit'>Create Account</button>{' '}
            {/* signup button to send data to the server */}
         </Form>
      </div>
   );
};

const FormikSignupForm = withFormik({
   mapPropsToValues({ username, password }) {
      // make the props for the form
      return {
         username: username || '',
         password: password || ''
      };
   },

   validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required()
   }),

   handleSubmit(values, { setStatus }) {
      // setStatus is coming from formik
      api.post('/auth/register', values) // here is my axios call and my post so that the users can signup after they press the "Create Account" button :)
         .then(res => {
            setStatus(res.data);
         })
         .catch(err => console.log(err.response));
   }
})(SignupForm);
console.log('This is the HOC', FormikSignupForm);

export default FormikSignupForm;
