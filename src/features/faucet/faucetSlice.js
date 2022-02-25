import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as initialState from '../../settings/state';

export const faucetSlice = createSlice({
    name: 'faucet',
    initialState,
    reducers: {
        addressClear: (state) => {
            state.address = ''
        },
        addressUpdate: (state, action) => {
            const address = action.payload
            console.log(`payload ${address}`)
            state.address = address
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
    addressClear, 
    addressUpdate, 
    statusUpdate, 
    setState 
} = faucetSlice.actions

export default faucetSlice.reducer