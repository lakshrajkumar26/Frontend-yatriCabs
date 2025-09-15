// SourceCoordinatesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CoordinatesState = {
  lat: number | null;
  lng: number | null;
};


const initialState: CoordinatesState = {
  lat: null,
  lng: null,
};

const sourceCoordinatesSlice = createSlice({
  name: "sourceCoordinates",
  initialState,
  reducers: {
    setSourceCoordinates: (
      state,
      action: PayloadAction<{ lat: number; lng: number }>
    ) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
    clearSourceCoordinates: (state) => {
      state.lat = null;
      state.lng = null;
    },
  },
});

export const { setSourceCoordinates, clearSourceCoordinates } = sourceCoordinatesSlice.actions;
export default sourceCoordinatesSlice.reducer;
