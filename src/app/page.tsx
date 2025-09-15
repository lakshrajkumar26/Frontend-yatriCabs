"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Footer from "./components/Footer";
import WhyYatri from "./components/Section10";

import { useDispatch } from "react-redux";
import { setUserLocation } from "../redux/userLocationSlice";

const page = () => {
  const dispatch = useDispatch();

  // const [userLocation , setUserLocation] = useState<any>();

  // useEffect(() => {
  //   getUserLocation();
  // }, [dispatch]);

  // const getUserLocation = () => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     console.log("data for location", pos);
  //     dispatch(
  //       setUserLocation({
  //         lat: pos.coords.latitude,
  //         lng: pos.coords.longitude,
  //       })
  //     );
  //   });
  // };

//   useEffect(() => {
//   const watchId = navigator.geolocation.watchPosition(
//     (pos) => {
//          console.log(pos)
//       dispatch(
//         setUserLocation({
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//         })
  
//       );
//     },
//     (error) => {
//       console.error("Location error:", error);
//     }
//   );

//   return () => navigator.geolocation.clearWatch(watchId);
// }, [dispatch]);


  return (
    <>
      <Navbar />
      <Hero />
      <Section1 />
      <WhyYatri />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </>
  );
};

export default page;
