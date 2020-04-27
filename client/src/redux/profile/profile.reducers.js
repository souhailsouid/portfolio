import { ProfileActionTypes } from './profile.types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  profile: null
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case ProfileActionTypes.PROFILE_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        profile: payload
      }
    case ProfileActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: true
      }
    case ProfileActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }

    case ProfileActionTypes.LOGOUT:
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
