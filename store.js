import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './features/bastketSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer
  },
})