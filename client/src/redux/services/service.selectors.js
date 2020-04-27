import { createSelector } from 'reselect'

const selectServices = state => state.services

export const selectServicesSections = createSelector(
  [selectServices],
  services => services.services
)
