import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../../entities/user";

const rootReducer = combineReducers({
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;