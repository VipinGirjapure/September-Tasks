import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ChatReducer from "../Reducers/Reducer";

const rootReducer = combineReducers({
    ChatReducer:ChatReducer
})
const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
})

export default store;