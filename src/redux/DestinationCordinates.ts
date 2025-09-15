// DestinationCoordinatesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { CoordinatesState } from "./types"; 


type CoordinatesState = {
  lat: number | null;
  lng: number | null;
};

const initialState: CoordinatesState = {
  lat: null,
  lng: null,
};

const destinationCoordinatesSlice = createSlice({
  name: "destinationCoordinates",
  initialState,
  reducers: {
    setDestinationCoordinates: (
      state,
      action: PayloadAction<{ lat: number; lng: number }>
    ) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
    clearDestinationCoordinates: (state) => {
      state.lat = null;
      state.lng = null;
    },
  },
});

export const { setDestinationCoordinates, clearDestinationCoordinates } = destinationCoordinatesSlice.actions;
export default destinationCoordinatesSlice.reducer;
