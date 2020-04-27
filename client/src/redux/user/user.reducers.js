import { UserActionTypes } from './user.types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case UserActionTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: true
      }
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }

    case UserActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      }
    default:
      return state
  }
}
