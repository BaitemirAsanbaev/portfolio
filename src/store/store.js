import { configureStore } from '@reduxjs/toolkit'
// import productsSlice from './reducers/productsSlice'
import refSlice from './reducers/refSlice'

export default configureStore({
  reducer:{
    // products: productsSlice,/
    ref:refSlice
  }
})