// "use client";
// import React from "react";
// // import { Marker } from "react-map-gl"; // ✅ correct import
// import Map, { Marker } from "react-map-gl/mapbox";
// import Image from "next/image";
// import pin from "./../../../public/pin.png";
// import "mapbox-gl/dist/mapbox-gl.css";


// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
// import styles from "./Markers.module.css";

// const Markers = () => {

//   const location = useSelector((state: RootState) => state.location);
//    const source = useSelector((state: RootState) => state.sourceCoordinates);
//   const destination = useSelector((state: RootState) => state.destinationCoordinates);


//   // ✅ Render nothing if lat/lng are not available
//   if (location.lat === null || location.lng === null) {
//     return null;
//   }

//   return (
//     <div>
//     <Marker longitude={location.lng} latitude={location.lat} anchor="bottom">
//       <div className={styles.marker}>
//         <Image src={pin} alt="pin" width={30} height={30} />
//       </div>
//     </Marker>
      
//         // SourceMarkder

//          <Marker longitude={source.lng} latitude={location.lat} anchor="bottom">
//       <div className={styles.marker}>
//         <Image src={pin} alt="pin" width={30} height={30} />
//       </div>
//     </Marker>

//         // destinationMarker

// </div>
//   );
// };

// export default Markers;





"use client";

import React from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import Image from "next/image";
import pin from "./../../../public/pin.png";
import "mapbox-gl/dist/mapbox-gl.css";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./Markers.module.css";


const Markers = () => {
  const userLocation = useSelector((state: RootState) => state.location);
  const source = useSelector((state: RootState) => state.sourceCoordinates);
  const destination = useSelector((state: RootState) => state.destinationCoordinates);

  // Helper to check if coordinates are valid
  const isValidCoord = (lat: number | null, lng: number | null) =>
    lat !== null && lng !== null;

  return (
    <div>
      {/* User Location Marker */}
      {isValidCoord(userLocation.lat, userLocation.lng) && (
        <Marker longitude={userLocation.lng!} latitude={userLocation.lat!} anchor="bottom">
          <div className={styles.marker}>
            <Image src={pin} alt="User Location Pin" width={30} height={30} />
          </div>
        </Marker>
      )}

      {/* Source Marker */}
      {isValidCoord(source.lat, source.lng) && (
        <Marker longitude={source.lng!} latitude={source.lat!} anchor="bottom">
          <div className={styles.marker}>
            <Image src={pin} alt="Source Pin" width={30} height={30} />
          </div>
        </Marker>
      )}

      {/* Destination Marker */}
      {isValidCoord(destination.lat, destination.lng) && (
        <Marker longitude={destination.lng!} latitude={destination.lat!} anchor="bottom">
          <div className={styles.marker}>
            <Image src={pin} alt="Destination Pin" width={30} height={30} />
          </div>
        </Marker>
      )}
    </div>
  );
};

export default Markers;

