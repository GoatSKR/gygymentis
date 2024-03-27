import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: false,
}

const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {
        changeState: (state, { payload }) => {
            console.log(state, payload)
        }
    }
})

export const { changeState } = stateSlice.actions;

export default stateSlice.reducer;