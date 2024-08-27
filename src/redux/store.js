import { configureStore } from '@reduxjs/toolkit'
import bazarReducer from './bazarSlice'
import { bazaar } from '../assets'

export const store = configureStore({
  reducer: {
    bazaar : bazarReducer
  },
})