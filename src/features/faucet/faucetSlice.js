import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    address: 'bcrt1qsxeu58zfe8apnyvrsm0fprrwc0gkmzx67ygaqa',
    status: 'LOADING',
    errors: [],
}

export const faucetSlice = createSlice({
    name: 'faucet',
    initialState,
    reducers: {
        clearAddress: (state) => {
            state.address = ''
        },
        updateAddress: (state, action) => {
            console.log(`payload ${action.payload}`)
            state.address = action.payload
        },
        updateStatus: (state, action) => {
            state.status = action.payload
        },
        setState: (state, action) => {
            [...state] = [...action.payload]
        },
    },
})

export const { clearAddress, updateAddress, updateStatus, setState } = faucetSlice.actions

export default faucetSlice.reducer