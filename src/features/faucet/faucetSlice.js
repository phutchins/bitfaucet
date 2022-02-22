import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    address: '',
    status: 'LOADING',
}

export const faucetSlice = createSlice({
    name: 'faucet',
    initialState,
    reducers: {
        clearAddress: (state) => {
            state.address = ''
        },
        updateAddress: (state, action) => {
            state.address = action.payload
        },
    },
})

export const { clearAddress, updateAddress } = faucetSlice.actions

export default faucetSlice.reducer