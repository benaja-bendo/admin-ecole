import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = true;

export const hasEcoleSlice = createSlice({
  name: "hasEcole",
  initialState,
  reducers: {
    toogleHasEcole: (state: any) => {
      return !state;
    },
  },
} as any);

export const { toogleHasEcole } = hasEcoleSlice.actions as any;
