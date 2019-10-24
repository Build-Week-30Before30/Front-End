import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ToDoList from './ToDoList';
import TodoCard from './TodoCard';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import LoginForm from './LoginPage';
import SignupForm from './SignupPage';


const AppRouter = () => {
   return (
      <>
         <Switch>
            <Route path='/Home' component={HomePage} />
            <Route exact path='/' component={LoginForm} />
            <Route path='/signup' component={SignupForm} />
            <PrivateRoute path='/protected' component={ToDoList} />
            <Route path='/list/:listID' render={props => <TodoCard {...props}/>}/>
         </Switch>
      </>
   );
};

export default AppRouter;
