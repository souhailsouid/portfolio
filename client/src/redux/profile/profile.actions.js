
import axios from 'axios'
import { ProfileActionTypes } from './profile.types'
import { NotificationActionTypes } from '../notification/notification.types'
import { signInFailed, signUpFailed, } from '../notification/notification.actions'
import setAuthToken from '../../utils/setAuthToken'




// Load Profile
export const loadProfile = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('http://localhost:5000/api/profile')

    dispatch({
      type: ProfileActionTypes.PROFILE_LOADED,

      payload: res.data[0]
    })
  } catch (err) {
    dispatch({
      type: ProfileActionTypes.AUTH_ERROR
    })
  }
}
// Completed Profile
export const profileWillUpdate = ({      
    city, 
    postCode, 
    adress, 
    phone, 
    civility, 
    imageUrl,
    status }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({      
    city, 
    postCode, 
    adress, 
    phone, 
    civility, 
    status ,
    imageUrl
  });

  try {
    const res = await axios.post('http://localhost:5000/api/profile', body, config);

    dispatch({
      type: ProfileActionTypes.PROFILE_JUST_UPDATED,
      payload: res.data,
      
    });
    dispatch({type: NotificationActionTypes.CLEAR_ERROR}) 
    dispatch(loadProfile()) 
    
  
  } catch (err) {

    const errors = err.response.data.errors 

    if (errors) {
      errors.forEach(error => dispatch(signUpFailed(error.msg)))
    }

    dispatch({
      type: ProfileActionTypes.REGISTER_FAIL
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
      type: ProfileActionTypes.LOGIN_SUCCESS,
      payload: res.data
    })
    setAuthToken(res.data.token);
    dispatch(loadProfile()) 
    dispatch({type: NotificationActionTypes.CLEAR_ERROR}) 


    

  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(signInFailed(error.msg)))
    }

    dispatch({
      type: ProfileActionTypes.LOGIN_FAIL
    })
  }
}
// Logout / Clear Profile
export const logout = () => dispatch => {

  dispatch({ type: ProfileActionTypes.CLEAR_PROFILE });
  dispatch({ type: ProfileActionTypes.LOGOUT });

};