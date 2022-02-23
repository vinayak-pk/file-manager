import {createSlice} from "@reduxjs/toolkit";

let initState = {
    user:{}
}

export const authFunc = createSlice({
    name:"auth",
    initialState:initState,
    reducers:{},
})

export const {} = authFunc.actions;

export default authFunc.reducer