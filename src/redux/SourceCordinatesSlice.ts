// SourceCoordinatesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CoordinatesState = {
  lat: number | null;
  lng: number | null;
  address :string |null;
};


const initialState: CoordinatesState = {
  lat: null,
  lng: null,
  address: "",
};

const sourceCoordinatesSlice = createSlice({
  name: "sourceCoordinates",
  initialState,
  reducers: {
    setSourceCoordinates: (
      state,
      action: PayloadAction<{ lat: number; lng: number ;address :string }>
    ) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
      state.address = action.payload.address;
    },
    clearSourceCoordinates: (state) => {
      state.lat = null;
      state.lng = null;
    },
  },
});

export const { setSourceCoordinates, clearSourceCoordinates } = sourceCoordinatesSlice.actions;
export default sourceCoordinatesSlice.reducer;
