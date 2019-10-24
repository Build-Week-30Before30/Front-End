import React, { useState, useEffect } from 'react';
import api from '../utils/axiosWithAuth';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './ComponentCSS/LoginPage.css';
import { connect } from 'react-redux';
import { loggedStatus } from '../actions';

const LoginForm = ({ touched, errors, status, handleSubmit }) => {
   const [login, setLogin] = useState([]);

   useEffect(() => {
      if (status) {
         setLogin([...login, status]);
         localStorage.setItem('loggedIn', 'true');
      }
   }, [status]);

   console.log('cookie :', document.cookie);

   return (
      <div className="form-contain">
        <div className='login-form'>
           <h2>Login Page</h2>
           <Form onSubmit={handleSubmit}>
              {' '}
              {/* add on submit */}
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

   handleSubmit(values, { props, resetForm, setSubmitting, setStatus }) {
      // setStatus is coming from formik
      api.post('/auth/login', {}, { auth: values }) // here is my axios call and my post so that the users can login after they press the "Login" button :)
         .then(res => {
            setStatus(res.data);
            props.loggedStatus();
            resetForm();
            setSubmitting(false);
            props.history.push('/home');
         })
         .catch(err => console.log(err.response));
   }
})(LoginForm);

export default connect(
   null,
   { loggedStatus }
)(FormikLoginForm);
