// import { configureStore } from "@reduxjs/toolkit";

// // import userReducer from "./userSlice";
// // import themeReducer from "./themeSlice";
// // import tokenReducer from "./tokenSlice";
// // import locationReducer from "./locationSlice";
// import locationSlice from "./userLocationSlice";

// export const store = configureStore({
//   reducer: {
//     // user: userReducer,
//     // theme: themeReducer,
//     // token: tokenReducer,
//     // location: locationReducer,
//   },
// });

//setsep 2
import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./userLocationSlice";
import sourceCoordinatesReducer from "./SourceCordinatesSlice";
import destinationCoordinatesReducer from "./DestinationCordinates";
import directionReducer from "./DirectionSlice"
import  selectedCarAmountReducer  from "./SelectedCarAmountSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    destinationCoordinates: destinationCoordinatesReducer,
    sourceCoordinates: sourceCoordinatesReducer,
    direction : directionReducer,
    selectedCarAmount : selectedCarAmountReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
