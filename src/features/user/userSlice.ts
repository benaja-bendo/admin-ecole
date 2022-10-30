import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UserModel} from "../../models/UserModel";

const initialState: UserModel = {} as UserModel;
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        storeUser: (state: any, action: PayloadAction<UserModel>) => {
            return {...action.payload as UserModel};
        }
    }
} as any)

export const {storeUser} = userSlice.actions as any;