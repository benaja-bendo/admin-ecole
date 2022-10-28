import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/user/userSlice";
import { hasEcoleSlice } from "../features/ecole/hasEcoleSlice";
import { ecoleSlice } from "../features/ecole/ecoleSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    ecole: ecoleSlice.reducer,
    hasEcole: hasEcoleSlice.reducer,
    // auth: authReducer,
    // isConnect: isConnectReducer,
    // error: errorReducer
  },
  devTools: import.meta.env.VITE_MODE !== "production",
});
