import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import cardReducer from "./slices/cardSlice"

const store= configureStore({
    reducer:{
       userReducer,
       cardReducer
       
    //    productReducer,
    //    cartReducer
    }
})

export default store;