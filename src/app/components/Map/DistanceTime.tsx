import { RootState } from '@/redux/store'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const DistanceTime = () => {
    
const directionData = useSelector( (state : RootState)=>state.direction )


  if (!directionData?.routes || directionData.routes.length === 0) {
    return <div>No route data</div>
  }
 
  const route = directionData.routes[0]


 const distanceInKm = (route.distance / 1000).toFixed(2) // 2 decimal places

  // Duration: seconds → hrs/mins
  const totalSeconds = route.duration
  const totalMinutes = Math.floor(totalSeconds / 60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  let durationFormatted = ""
  if (hours > 0) {
    durationFormatted = `${hours} Hr ${minutes} Min`
  } else {
    durationFormatted = `${minutes} Min`
  }

return (
  <div
    style={{
      fontSize: "0.9rem",
      lineHeight: "1.5",
      display: "flex",
      gap: "12px",       // space between Distance and Duration
      alignItems: "center",
    }}
  >
    <p style={{ margin: 0 }}>
      <strong>Distance:</strong> {distanceInKm} KM
    </p>
    <p style={{ margin: 0 }}>
      <strong>Duration:</strong> {durationFormatted}
    </p>
  </div>
)
}

export default DistanceTime