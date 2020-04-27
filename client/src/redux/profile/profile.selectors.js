import { createSelector } from 'reselect'

const selectProfile = state => state.profile

export const selectCurrentProfile = createSelector(
  [selectProfile],
  (profile) => profile.profile
)
