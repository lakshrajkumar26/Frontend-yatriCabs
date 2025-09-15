// DirectionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Route = {
  distance: number;
  duration: number;
  geometry: {
    coordinates: number[][];
    type: string;
  };
};

type DirectionsState = {
  routes: Route[] | null;
  waypoints: any[] | null;
  uuid: string | null;
};

const initialState: DirectionsState = {
  routes: null,
  waypoints: null,
  uuid: null,
};

const directionSlice = createSlice({
  name: "directions",
  initialState,
  reducers: {
    setDirections: (
      state,
      action: PayloadAction<{
        routes: Route[];
        waypoints: any[];
        uuid: string;
      }>
    ) => {
      state.routes = action.payload.routes;
      state.waypoints = action.payload.waypoints;
      state.uuid = action.payload.uuid;
    },
    clearDirections: (state) => {
      state.routes = null;
      state.waypoints = null;
      state.uuid = null;
    },
  },
});

export const { setDirections, clearDirections } = directionSlice.actions;
export default directionSlice.reducer;
