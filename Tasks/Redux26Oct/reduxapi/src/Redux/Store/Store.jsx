import { configureStore ,combineReducers} from "@reduxjs/toolkit";

import LogInReducer from "../Reducers/LogInReducer";

const rootReducer = combineReducers({
    LogInReducer:LogInReducer
})
const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
export default store;