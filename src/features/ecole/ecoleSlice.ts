import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {};

export const ecoleSlice = createSlice({
  name: "ecole",
  initialState,
  reducers: {
    storeEcole: (state: any, action: PayloadAction<any>) => {
      return { ...action.payload };
    },
    updateEcole: (state: any, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { storeEcole, updateEcole } = ecoleSlice.actions;
