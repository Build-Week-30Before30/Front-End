import React, { useState, useEffect } from 'react';
import api from '../utils/axiosWithAuth';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './ComponentCSS/LoginPage.css';

const LoginForm = ({ touched, errors, status }) => {
   const [login, setLogin] = useState([]);

   useEffect(() => {
      if (status) {
         setLogin([...login, status]);
         const loggedIn = localStorage.setItem('loggedIn', 'user logged in');
      }
   }, [status]);

   console.log('cookie :', document.cookie);

   return (
      <div className='login-form'>
         <h1>Login Page</h1>
         <Form>
            <label>
               {' '}
               Name:
               <Field type='text' name='username' placeholder='Username' />
            </label>
            <label>
               {' '}
               Password:
               <Field type='password' name='password' placeholder='Password' />
               {touched.password && errors.password && (
                  <p className='error'>{errors.password}</p>
               )}
            </label>
            <button type='submit'>Login</button>{' '}
            {/* login button to send data to the server */}
         </Form>
      </div>
   );
};

const FormikLoginForm = withFormik({
   mapPropsToValues({ username, password }) {
      // make the props for the form
      return {
         username: username || '',
         password: password || ''
      };
   },

   validationSchema: Yup.object().shape({
      password: Yup.string().required()
   }),

   handleSubmit(values, { setStatus }) {
      // setStatus is coming from formik
      api.post('/auth/login', {}, { auth: values }) // here is my axios call and my post so that the users can login after they press the "Login" button :)
         .then(res => {
            setStatus(res.data);
         })
         .catch(err => console.log(err.response));
      console.log(document.cookie);
   }
})(LoginForm);
console.log('This is the HOC', FormikLoginForm);

export default FormikLoginForm;
