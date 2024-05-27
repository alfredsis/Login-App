import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { noteSlice } from './Pages/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    noteStore: noteSlice.reducer,
  },
})