import {combineReducers, configureStore} from "@reduxjs/toolkit"
import QuizReducer from "../Reducers/Reducer";

const rootReducer = combineReducers({
    QuizReducer: QuizReducer
})
const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
})

export default store;