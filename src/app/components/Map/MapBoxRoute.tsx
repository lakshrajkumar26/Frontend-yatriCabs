// import React from 'react'
//  import { Source ,Layer } from 'react-map-gl/mapbox' 

// //using Layer to make the Routes

// const MapBoxRoute = ({props : any}) => {
//   return (
//     <Source type='geojson' data={{type:"Feature", geometry : {type : "LineString",coordinates : props.coordinates}}}>
//         <Layer type='line' layout={{"line-join":'round','line-cap':'square'}}
//         paint={{'line-color': '#0462d4','line-width': 4 }}/>
//     </Source>
//   )
// }

// export default MapBoxRoute


import React from "react";
import { Source, Layer } from "react-map-gl/mapbox";

type Props = {
  coordinates: number[][];
};

const MapBoxRoute = ({ coordinates }: Props) => {
  return (
    <Source
      type="geojson"
      data={{
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates,
        },
        properties: {},
      }}
    >
      <Layer
        type="line"
        layout={{ "line-join": "round", "line-cap": "square" }}
        paint={{ "line-color": "#0462d4", "line-width": 4 }}
      />
    </Source>
  );
};

export default MapBoxRoute;
