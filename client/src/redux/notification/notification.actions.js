import { NotificationActionTypes } from './notification.types'

export const signInFailed = (msg) => dispatch => {
  dispatch({
    type: NotificationActionTypes.SIGN_IN_FAILED,
    payload:  msg
  })
}
export const signUpFailed = (msg) => dispatch => {
  dispatch({
    type: NotificationActionTypes.SIGN_UP_FAILED,
    payload: msg
  })
}
export const clearErrMsg = (msg) => dispatch => {
  dispatch({
    type: NotificationActionTypes.CLEAR_ERROR,
    payload: msg
  })
}

