import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User} from "../../models/User";

const initialState: User = {} as User;
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        storeUser: (state: any, action: PayloadAction<User>) => {
            return {...action.payload as User};
        }
    }
} as any)

export const {storeUser} = userSlice.actions as any;