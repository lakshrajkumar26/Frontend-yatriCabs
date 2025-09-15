
//1 step
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LocationState = {
  lat: number | null;
  lng: number | null;
};

const initialState: LocationState = {
  lat: null,
  lng: null,
};

const userLocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setUserLocation: (
      state,
      action: PayloadAction<{ lat: number; lng: number }>
    ) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { setUserLocation } = userLocationSlice.actions;
export default userLocationSlice.reducer;
