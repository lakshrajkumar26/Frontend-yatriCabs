import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedCarAmountState {
  amount: number;   // ✅ no null here
}

const initialState: SelectedCarAmountState = {
  amount: 0,
};


const selectedCarAmountSlice = createSlice({
  name: "selectedCarAmount",
  initialState,
  reducers: {
    setSelectedCarAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    clearSelectedCarAmount: (state) => {
      state.amount = 0;
    },
  },
});

export const { setSelectedCarAmount, clearSelectedCarAmount } =
  selectedCarAmountSlice.actions;

export default selectedCarAmountSlice.reducer;
