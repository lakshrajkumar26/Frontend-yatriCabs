"use client";
import * as React from "react";
import Map, { Marker ,} from "react-map-gl/mapbox";
import styles from "./Map.module.css";
import pin from "./../../../../public/pin.png";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
// import { UseSelectorseSelector } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { setDirections } from "../../../redux/DirectionSlice"; 

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Markers from "../Markers";
import MapBoxRoute from "./MapBoxRoute";

const MAPBOX_DRIVING_ENDPOINT =
  "https://api.mapbox.com/directions/v5/mapbox/driving/";
const session_token = "5xcbvdf-542dfh-42erwhsdfgh-534edfrh54";

function MapPage() {

   //to write
    const dispatch = useDispatch();
  // to Read
  const destination = useSelector(
    (state: RootState) => state.destinationCoordinates
  );

  const source = useSelector((state: RootState) => state.sourceCoordinates);

  const location = useSelector((state: RootState) => state.location);

  const directionData = useSelector((state: RootState) => state.direction);

  const mapRef = React.useRef<any>(null);

  const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  // to fly Source Location
  React.useEffect(() => {
    if (source) {
      mapRef.current?.flyTo({
        center: [source.lng, source.lat],
        duration: 2500,
      });
    }
  }, [source]);

  // to fly Destiantion Location
  React.useEffect(() => {
    if (destination) {
      mapRef.current?.flyTo({
        center: [destination.lng, destination.lat],
        duration: 2500,
      });
    }
    if (source && destination) {
      getDirectionRoute();
    }
  }, [destination]);


  const getDirectionRoute = async () => {
    const res = await fetch(
      MAPBOX_DRIVING_ENDPOINT +
        source.lng +
        "," +
        source.lat +
        ";" +
        destination.lng +
        "," +
        destination.lat +
        "?overview=full&geometries=geojson"+
        "&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res.json();
    console.log("Route Lines", result);

   //setting into my Redux Store
 if (result.routes && result.routes.length > 0) {

  dispatch(
    setDirections({
       routes: result.routes,
          waypoints: result.waypoints,
          uuid: result.uuid,
    })

  )
 }



console.log("done")
console.log("saved Global directionData",directionData);

  };


React.useEffect(() => {
  if (directionData.routes) {
    console.log("Updated Global directionData:", directionData);
  }
}, [directionData]);


  // if location not ready yet
  if (location.lat === null || location.lng === null) {
    return <p>Loading map...</p>;
  }



  

  return (
    <div className={styles.container}>
      <Map 
        ref={mapRef}
        mapboxAccessToken={token}
        initialViewState={{
          longitude: location.lng,
          latitude: location.lat,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Markers />
        {directionData?.routes && directionData.routes.length > 0 ? (
   <MapBoxRoute coordinates={directionData.routes[0].geometry.coordinates} />
) : null}
    

      </Map>
    </div>
  );
}

export default MapPage;
 