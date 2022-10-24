import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../features/user/userSlice";

export default configureStore({
        reducer: {
            user: userSlice.reducer
            // auth: authReducer,
            // isConnect: isConnectReducer,
            // error: errorReducer
        },
    devTools: import.meta.env.VITE_MODE !== 'production'
    },
);

