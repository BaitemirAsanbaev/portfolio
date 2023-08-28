import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    add:(state, action)=>{
      state.push(action.payload)
    },
    remove: (state, action)=>{
      const index = state.indexOf(action.payload)
      state.splice(index, 1)
    }
  }
})

export const {add, remove } = productsSlice.actions

export default productsSlice.reducer