import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isSpinning: boolean;
}

const initialState: IInitialState = {
  isSpinning: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setIsSpinning: (state, action: PayloadAction<boolean>) => {
      state.isSpinning = action.payload;
    },
  },
});
