// DestinationCoordinatesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { CoordinatesState } from "./types"; 


type CoordinatesState = {
  lat: number | null;
  lng: number | null;
  address :string | null;
};

const initialState: CoordinatesState = {
  lat: null,
  lng: null,
  address: ""
};

const destinationCoordinatesSlice = createSlice({
  name: "destinationCoordinates",
  initialState,
  reducers: {
    setDestinationCoordinates: (
      state,
      action: PayloadAction<{ lat: number; lng: number ;address :string }>
    ) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
      state.address = action.payload.address;
    },
    clearDestinationCoordinates: (state) => {
      state.lat = null;
      state.lng = null;
    },
  },
});

export const { setDestinationCoordinates, clearDestinationCoordinates } = destinationCoordinatesSlice.actions;
export default destinationCoordinatesSlice.reducer;
