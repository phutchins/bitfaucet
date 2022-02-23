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
        addressClear: (state) => {
            state.address = ''
        },
        addressUpdate: (state, action) => {
            console.log(`payload ${action.payload}`)
            state.address = action.payload
        },
        statusUpdate: (state, action) => {
            state.status = action.payload
        },
        setState: (state, action) => {
            [...state] = [...action.payload]
        },
    },
})

export const { addressClear, addressUpdate, statusUpdate, setState } = faucetSlice.actions

export default faucetSlice.reducer