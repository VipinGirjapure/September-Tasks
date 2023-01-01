import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signupReducer from "../Reducers/Reducers";

const rootReducer = combineReducers({
  signUpReducer: signupReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
