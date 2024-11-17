import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store/store";

interface User {
    username: string;
    token: any;
    isLogin: boolean;
}

const initialState: User = {
    username: "Didsen1",
    token: "",
    isLogin: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.username = action.payload.username;
            state.isLogin = action.payload.isLogin;
            sessionStorage.setItem('jwt', action.payload.token);
        },
        logout: (state) => {
            state.username = initialState.username;
            state.isLogin = initialState.isLogin;
            sessionStorage.removeItem("jwt");
        }
    }
});

export { userSlice };
export const username = (state: RootState) => state.user.username
export const isLogin = (state: RootState) => state.user.isLogin
export const { login, logout } = userSlice.actions
export default userSlice.reducer