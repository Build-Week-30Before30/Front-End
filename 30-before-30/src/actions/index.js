import { axiosWithAuth } from '../utils/axiosWithAuth';

export const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS';
export const UPDATE_LISTS_STATE = 'UPDATE_LISTS_STATE';
export const GET_LISTS_START = 'GET_LISTS_START';
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const GET_LISTS_FAIL = 'GET_LISTS_FAIL';
export const POST_LISTS_START = 'POST_LISTS_START';
export const POST_LISTS_SUCCESS = 'POST_LISTS_SUCCESS';
export const POST_LISTS_FAIL = 'POST_LISTS_FAIL';
export const PUT_LISTS_START = 'PUT_LISTS_START';
export const PUT_LISTS_SUCCESS = 'PUT_LISTS_SUCCESS';
export const PUT_LISTS_FAIL = 'PUT_LISTS_FAIL';
export const DELETE_LISTS_START = 'DELETE_LISTS_START';
export const DELETE_LISTS_SUCCESS = 'DELETE_LISTS_SUCCESS';
export const DELETE_LISTS_FAIL = 'DELETE_LISTS_FAIL';

// ########## log in status ##########
export const loggedStatus = () => {
   return dispatch => {
      dispatch({ type: UPDATE_LOGIN_STATUS });
   };
};

// ########## update the lists ##########
export const updateListState = list => {
   return dispatch => {
      dispatch({ type: UPDATE_LISTS_STATE, payload: list });
   };
};

// ########## get the list from api ##########
export const getTodoList = () => {
   return dispatch => {
      dispatch({ type: GET_LISTS_START });
      axiosWithAuth()
         .get(`/lists/${id}`)
         .then(res => dispatch({ type: GET_LISTS_SUCCESS, payload: res.data }))
         .catch(err =>
            dispatch({ type: GET_LISTS_FAIL, payload: err.response })
         );
   };
};

// ########## add new to lists ##########
export const addNewTodo = newTodo => {
   return dispatch => {
      dispatch({ type: POST_LISTS_START });
      axiosWithAuth()
         .post('/lists', newTodo)
         .then(res => dispatch({ type: POST_LISTS_SUCCESS, payload: res.data }))
         .catch(err =>
            dispatch({ type: POST_LISTS_FAIL, payload: err.response })
         );
   };
};

// ########## edit todo lists ##########
export const editTodo = editTodo => {
   return dispatch => {
      dispatch({ type: PUT_LISTS_START });
      axiosWithAuth()
         .put(`/lists/${editTodo.id}`, editTodo)
         .then(res => dispatch({ type: PUT_LISTS_SUCCESS, payload: res.data }))
         .catch(err =>
            dispatch({ type: PUT_LISTS_FAIL, payload: err.response })
         );
   };
};

// ########## remove todo lists ##########
export const removeTodo = byeTodo => {
   return dispatch => {
      dispatch({ type: DELETE_LISTS_START });
      axiosWithAuth()
         .delete(`/lists/${byeTodo.id}`)
         .then(res =>
            dispatch({ type: DELETE_LISTS_SUCCESS, payload: res.data })
         )
         .catch(err =>
            dispatch({ type: DELETE_LISTS_FAIL, payload: err.response })
         );
   };
};

////// import the api link to edit, remove, add new
