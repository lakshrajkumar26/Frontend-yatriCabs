"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./BookingPage.module.css";
import MapPage from "../Map/Map"; // assuming you have a Map component

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../redux/store";
import { setSourceCoordinates } from '../../../redux/SourceCordinatesSlice';
import { setDestinationCoordinates } from '../../../redux/DestinationCordinates';
import Cars from "../Cars/Cars";
import DistanceTime from "../Map/DistanceTime";
import { useRouter } from "next/navigation";

import Cash from '../../../../public/Cash.svg'
import VISA from '../../../../public/VISA.svg'
import MasterCard from '../../../../public/masterCard.svg'
import Gpay from '../../../../public/Gpay.svg'
import ApplePay from '../../../../public/ApplePay.svg'

const session_Token = "45g542ggfsfg-431fgsdj-hdsds-adfhxcb43";
const MAPBOX_RETRIVE_URL =
  "https://api.mapbox.com/search/searchbox/v1/retrieve/";

const BookingPage = () => {

const router = useRouter();
 const dispatch = useDispatch();
  
  const source = useSelector((state: RootState) => state.sourceCoordinates);
  const destination = useSelector((state: RootState) => state.destinationCoordinates);
  const selectedCarAmount = useSelector((state: RootState) => state.selectedCarAmount.amount);

  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [selectedRide, setSelectedRide] = useState<number | null>(null);

  const [sourceAddress, setSourceAddress] = useState<string>("");
  const [destinationAddress, setDestinationAddress] = useState<string>("");

  const [sourceAddressList, setSourceAddressList] = useState<any[]>([]);
  const [destinationAddressList, setDestinationAddressList] = useState<any[]>(
    []
  );
  // const [sourceCoordinates, setSourceCoordinates] = useState<any>([]);
  // const [destinationCoordinates, setDestinationCoordinates] = useState<any>([]);

  // Flags to skip API call when selecting suggestion
  const [isSelectingSource, setIsSelectingSource] = useState(false);
  const [isSelectingDestination, setIsSelectingDestination] = useState(false);

  // ================= Source Debounce =================
  useEffect(() => {
    if (!sourceAddress || isSelectingSource) {
      setIsSelectingSource(false); // reset flag
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      getAddressesForSource();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [sourceAddress]);

  const getAddressesForSource = async () => {
    const res = await fetch(`/api/search-address?q=${sourceAddress}`, {
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    setSourceAddressList(result.data?.suggestions || []);
  };

  const onSourceAddressClicked = async (ele: any) => {
    console.log("itemas id", ele);
    setIsSelectingSource(true);
    setSourceAddress(ele.name);
    setSourceAddressList([]);
    const res = await fetch(
      MAPBOX_RETRIVE_URL +
        ele.mapbox_id +
        "?session_token=" +
        session_Token +
        "&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    );
    const data = await res.json();
    console.log("onSource",data.features[0].geometry.coordinates);
    //LOCALLY
    // setSourceCoordinates({
    //   lng: data?.features[0]?.geometry?.coordinates[0],
    //   lat: data?.features[0]?.geometry?.coordinates[1],
    // });

  // REDUX
    dispatch(setSourceCoordinates({
  lng: data?.features[0]?.geometry?.coordinates[0],
  lat: data?.features[0]?.geometry?.coordinates[1],
}));
  };

  const onDestinationAddressClicked = async (ele: any) => {
    setIsSelectingDestination(true);
    setDestinationAddress(ele.name);
    setDestinationAddressList([]);
    const res = await fetch(
      MAPBOX_RETRIVE_URL +
        ele.mapbox_id +
        "?session_token=" +
        session_Token +
        "&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    );
    const data = await res.json();
    console.log("on destination",data.features[0].geometry.coordinates);
    // LOCALLY
    // setDestinationCoordinates({
    //   lng: data?.features[0]?.geometry?.coordinates[0],
    //   lat: data?.features[0]?.geometry?.coordinates[1],
    // });

    // GLOBALLY REDUX
    dispatch(setDestinationCoordinates({
  lng: data?.features[0]?.geometry?.coordinates[0],
  lat: data?.features[0]?.geometry?.coordinates[1],
}));

  };

  // ================= Destination Debounce =================
  useEffect(() => {
    if (!destinationAddress || isSelectingDestination) {
      setIsSelectingDestination(false); // reset flag
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      getAddressesForDestination();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [destinationAddress]);

  const getAddressesForDestination = async () => {
    const res = await fetch(`/api/search-address?q=${destinationAddress}`, {
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    setDestinationAddressList(result.data?.suggestions || []);
  };

  // ================= Screen Height =================
  useEffect(() => {
    const updateHeight = () => setScreenHeight(window.innerHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // ================= Rides =================
  // const rides = [
  //   { id: 1, name: "Sedan", price: "$10", img: "/rides/sedan.png" },
  //   { id: 2, name: "SUV", price: "$15", img: "/rides/suv.png" },
  //   { id: 3, name: "Mini", price: "$8", img: "/rides/mini.png" },
  //   { id: 4, name: "Luxury", price: "$20", img: "/rides/luxury.png" },
  // ];
  

  // condition for  Button appear
    const isBookEnabled =
    source.lat !== null &&
    source.lng !== null &&
    destination.lat !== null &&
    destination.lng !== null &&
    selectedCarAmount >0;



  return (
    <div className={styles.container} style={{ height: screenHeight }}>
      
     {/* for reading testing */}
      {/* <div>  
        <h3>Source Coordinates</h3>
        <p>Lat: {source.lat}</p>
        <p>Lng: {source.lng}</p>

        <h3>Destination Coordinates</h3>
        <p>Lat: {destination.lat}</p>
        <p>Lng: {destination.lng}</p>
        </div> */}

      {/* Left Panel */}
      <div className={styles.leftPanel}>
        <h2 className={styles.bookingTitle}>Get A Yatri</h2>

        <div>
          {/* Pickup */}
          <div className={styles.inputGroup}>
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="Where From?"
              className={styles.input}
              value={sourceAddress}
              onChange={(e: any) => setSourceAddress(e.target.value)}
            />
          </div>
          {sourceAddress && sourceAddressList.length > 0 && (
            <div className={styles.suggestions}>
              <h4>Suggestions</h4>
              <ul>
                {sourceAddressList.map((ele: any, index: number) => (
                  <li key={index} onClick={() => onSourceAddressClicked(ele)}>
                    <span className={styles.eachSuggestion}>
                      {ele.name} - <span>{ele.place_formatted}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Drop */}
          <div className={styles.inputGroup}>
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="Where To?"
              className={styles.input}
              value={destinationAddress}
              onChange={(e) => setDestinationAddress(e.target.value)}
            />
          </div>
          {destinationAddress && destinationAddressList.length > 0 && (
            <div className={styles.suggestions}>
              <h4>Suggestions</h4>
              <ul>
                {destinationAddressList.map((ele: any, index: number) => (
                  <li
                    key={index}
                    onClick={() => onDestinationAddressClicked(ele)}
                  >
                    <span className={styles.eachSuggestion}>
                      {ele.name} - <span>{ele.place_formatted}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Select Ride */}
        <h3 className={styles.sectionTitle}>Select Car</h3>
          <Cars/>
        {/* Payment Methods */}
        <h3 className={styles.sectionTitle}>Payment Methods</h3>
        {/* <div className={styles.paymentOptions}>
          <Image src={VISA} alt="Visa" width={36} height={25} />
          <Image
            src={MasterCard}
            alt="MC"
            width={36}
            height={25}
          />
          <Image
            src={ApplePay}
            alt="ApplePay"
            width={36}
            height={25}
          />
          <Image
            src={Gpay}
            alt="GPay"
            width={36}
            height={25}
          />
          <Image src={Cash} alt="Cash" width={36} height={25} />
        </div> */}
        <div className={styles.paymentOptions}>
  <div className={styles.paymentItem}>
    <Image src={VISA} alt="Visa" width={36} height={25} />
  </div>
  <div className={styles.paymentItem}>
    <Image src={MasterCard} alt="MC" width={36} height={25} />
  </div>
  <div className={styles.paymentItem}>
    <Image src={ApplePay} alt="ApplePay" width={36} height={25} />
  </div>
  <div className={styles.paymentItem}>
    <Image src={Gpay} alt="GPay" width={36} height={25} />
  </div>
  <div className={styles.paymentItem}>
    <Image src={Cash} alt="Cash" width={36} height={25} />
  </div>
</div>


        {/* Book Button */}
        <button className={styles.bookBtn} onClick={ ()=> router.push("/payment")}
            disabled={!isBookEnabled}
            >Book</button>
      </div>

      {/* Right Panel */}
      <div className={styles.rightPanel}>
        <div className={styles.mapPlaceholder}>
          <MapPage />
        </div>
        <div className={styles.distanceTimeContainer}>
           <DistanceTime/>
        </div>
        
      </div>
      
    </div>
  );
};

export default BookingPage;
