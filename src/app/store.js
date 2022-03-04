import { configureStore } from '@reduxjs/toolkit'
import faucetReducer from '../features/faucet/faucetSlice'

export const store = configureStore({
    reducer: faucetReducer,
  }
);