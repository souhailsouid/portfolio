
import axios from 'axios'
import { UserActionTypes } from './user.types'
import { NotificationActionTypes } from '../notification/notification.types'
import { signInFailed, signUpFailed, } from '../notification/notification.actions'
import setAuthToken from '../../utils/setAuthToken'




// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('http://localhost:5000/api/auth')

    dispatch({
      type: UserActionTypes.USER_LOADED,
      payload: res.data 
    })
  } catch (err) {
    dispatch({
      type: UserActionTypes.AUTH_ERROR
    })
  }
}
// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('http://localhost:5000/api/users', body, config);

    dispatch({
      type: UserActionTypes.REGISTER_SUCCESS,
      payload: res.data,
      
    });
    dispatch({type: NotificationActionTypes.CLEAR_ERROR}) 
    dispatch(loadUser()) 
    
  
  } catch (err) {

    const errors = err.response.data.errors 

    if (errors) {
      errors.forEach(error => dispatch(signUpFailed(error.msg)))
    }

    dispatch({
      type: UserActionTypes.REGISTER_FAIL
    });

  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password })
  
  try {
    const res = await axios.post('http://localhost:5000/api/auth', body, config)

    dispatch({
      type: UserActionTypes.LOGIN_SUCCESS,
      payload: res.data
    })
    setAuthToken(res.data.token);
    dispatch(loadUser()) 
    dispatch({type: NotificationActionTypes.CLEAR_ERROR}) 


    

  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(signInFailed(error.msg)))
    }

    dispatch({
      type: UserActionTypes.LOGIN_FAIL
    })
  }
}
// Logout / Clear Profile
export const logout = () => dispatch => {

  dispatch({ type: UserActionTypes.CLEAR_PROFILE });
  dispatch({ type: UserActionTypes.LOGOUT });

};