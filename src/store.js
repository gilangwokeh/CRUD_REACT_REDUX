import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './feutures/users/userSlide'
export const store = configureStore({
  reducer: {
    users : usersReducer
  },

})