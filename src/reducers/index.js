import {
   UPDATE_LOGIN_STATUS,
   UPDATE_LIST_STATE,
   GET_LISTS_START,
   GET_LISTS_SUCCESS,
   GET_LISTS_FAIL,
   POST_LISTS_START,
   POST_LISTS_SUCCESS,
   POST_LISTS_FAIL,
   PUT_LISTS_START,
   PUT_LISTS_SUCCESS,
   PUT_LISTS_FAIL,
   DELETE_LISTS_START,
   DELETE_LISTS_SUCCESS,
   DELETE_LISTS_FAIL
} from '../actions';

const initialState = {
   isLoggedIn: false,
   todoLists: [],
   updateList: {},
   callingAPI: false,
   error: ''
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      //  UPDATE LOGIN STATUS
      case UPDATE_LOGIN_STATUS:
         return {
            ...state,
            isLoggedIn: !state.isLoggedIn
         };

      //  UPDATE LIST STATE
      case UPDATE_LIST_STATE:
         return {
            ...state,
            updateList: action.payload
         };

      //  GET REQUEST
      case GET_LISTS_START:
         return {
            ...state,
            updateList: {},
            callingAPI: true,
            error: ''
         };
      case GET_LISTS_SUCCESS:
         return {
            ...state,
            todoList: action.payload,
            callingAPI: false,
            error: ''
         };
      case GET_LISTS_FAIL:
         return {
            ...state,
            callingAPI: false,
            error: `${action.payload.status} ${action.payload.statusText} - ${action.payload.data.Error}`
         };

      //  POST REQUEST
      case POST_LISTS_START:
         return {
            ...state,
            updateList: {},
            callingAPI: true,
            error: ''
         };
      case POST_LISTS_SUCCESS:
         return {
            ...state,
            todoList: action.payload,
            callingAPI: false,
            error: ''
         };
      case POST_LISTS_FAIL:
         return {
            ...state,
            callingAPI: false,
            error: `${action.payload.status} ${action.payload.statusText} - ${action.payload.data.Error}`
         };

      //  PUT REQUEST
      case PUT_LISTS_START:
         return {
            ...state,
            updateList: {},
            callingAPI: true,
            error: ''
         };
      case PUT_LISTS_SUCCESS:
         return {
            ...state,
            todoList: action.payload,
            callingAPI: false,
            error: ''
         };
      case PUT_LISTS_FAIL:
         return {
            ...state,
            callingAPI: false,
            error: `${action.payload.status} ${action.payload.statusText} - ${action.payload.data.Error}`
         };

      //  DELETE REQUEST
      case DELETE_LISTS_START:
         return {
            ...state,
            updateList: {},
            callingAPI: true,
            error: ''
         };
      case DELETE_LISTS_SUCCESS:
         return {
            ...state,
            todoList: action.payload,
            callingAPI: false,
            error: ''
         };
      case DELETE_LISTS_FAIL:
         return {
            ...state,
            callingAPI: false,
            error: `${action.payload.status} ${action.payload.statusText} - ${action.payload.data.Error}`
         };
      default:
         return state;
   } //switch
}; //reducer
