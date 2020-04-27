import { NotificationActionTypes  } from './notification.types'

const initialState = [{
  signInErr: [],
  signUpErr: '',

}]

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case NotificationActionTypes.SIGN_IN_FAILED:
      return {...state, signInErr: [payload]};

    case NotificationActionTypes.SIGN_UP_FAILED:
      return {...state, signUpErr: payload};
    case NotificationActionTypes.CLEAR_ERROR:
        return { state: null }
    case NotificationActionTypes.REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
