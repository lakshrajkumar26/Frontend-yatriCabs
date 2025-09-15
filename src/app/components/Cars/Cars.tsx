import React, { useEffect, useState } from "react";
import styles from "./Cars.module.css";
import Image from "next/image";
import sedan from "../../../../public/sedan.png";
import suv from "../../../../public/suv.png";
import mini from "../../../../public/mini.png";
import luxury from "../../../../public/luxury.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setSelectedCarAmount } from "../../../redux/SelectedCarAmountSlice";

const Cars = () => {
  const dispatch = useDispatch();

  const directionData = useSelector((state: RootState) => state.direction);

  const [selectedRide, setSelectedRide] = useState<number | null>(null);

  const rides = [
    { id: 1, name: "Sedan", price: 14, img: sedan },
    { id: 2, name: "SUV", price: 15, img: suv },
    { id: 3, name: "Mini", price: 18, img: mini },
    { id: 4, name: "Luxury", price: 25, img: luxury },
  ];

  const getCost = (price: number) => {
    const distanceInKm = (directionData?.routes?.[0]?.distance ?? 0) / 1000;
    return +(price * distanceInKm).toFixed(2);
  };

const handleRideSelect = (rideId: number, ridePrice: number) => {
  setSelectedRide(rideId);

  const distance = directionData?.routes?.[0]?.distance;
  if (distance) {
    const finalCost = getCost(ridePrice);
    dispatch(setSelectedCarAmount(finalCost));
  } else {
    console.warn("No route distance available yet!");
    dispatch(setSelectedCarAmount(0));
  }
};


  useEffect(() => {
    console.log("Updated Direction Data:", directionData);
  }, [directionData]);

  return (
    <div className={styles.rideOptions}>
      {rides.map((ride) => (
        <div
          key={ride.id}
          className={`${styles.rideCard} ${
            selectedRide === ride.id ? styles.selected : ""
          }`}
          onClick={() => handleRideSelect(ride.id, ride.price)}
        >
          <Image src={ride.img} alt={ride.name} width={60} height={35} />
          <div className={styles.rideInfo}>
            <p className={styles.rideName}>{ride.name}</p>
            {directionData?.routes?.[0]?.distance ? (
              <p className={styles.ridePrice}>₹{getCost(ride.price)}</p>
            ) : (
              <p className={styles.ridePrice}>--</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
