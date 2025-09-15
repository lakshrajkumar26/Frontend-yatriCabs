"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../../redux/userLocationSlice";
import { RootState } from "../../redux/store";

export default function LocationFetcher() {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.location);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          dispatch(
            setUserLocation({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            })
          );
        },
        (error) => console.error("📍 Location error:", error),
        { enableHighAccuracy: true }
      );

      // Cleanup on unmount
      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, [dispatch]);

  console.log("📍 Current Redux location:", location);

  return null;
}
