import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./Reducers/UserSlice";

const rootReducer = combineReducers({
    userSlice,
})

export const setupStore = () =>{
    return configureStore({
        reducer:rootReducer
    })
}

export type rootStore = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']