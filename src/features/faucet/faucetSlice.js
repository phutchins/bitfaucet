import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as initialState from '../../settings/state';

export const faucetSlice = createSlice({
  name: 'faucet',
  initialState,
  reducers: {
    recipientAddressClear: (state) => {
      state.recipient = ''
    },
    recipientAddressUpdate: (state, action) => {
      const address = action.payload
      // console.log(`recipientAddressUpdate action.payload ${address}`)
      state.recipient = address
    },
    seedAdded: (state, action) => {
      const seed = action.payload
      state.seed = seed
    },
    statusUpdate: (state, action) => {
      const status = action.payload
      state.status = status
    },
    setState: (state, action) => {
      Object.assign(state, action.payload)
    },
  },
})

export const { 
  recipientAddressClear, 
  recipientAddressUpdate, 
  statusUpdate, 
  setState 
} = faucetSlice.actions

export default faucetSlice.reducer