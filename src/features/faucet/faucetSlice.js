import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    address: 'bcrt1qsxeu58zfe8apnyvrsm0fprrwc0gkmzx67ygaqa',
    status: 'LOADING',
    errors: [],
}

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
        statusUpdate: (state, action) => {
            const status = action.payload
            state.status = status
        },
        setState: (state, action) => {
            [...state] = [...action.payload]
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