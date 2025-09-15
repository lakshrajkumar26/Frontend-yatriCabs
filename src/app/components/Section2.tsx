"use client";
import React from "react";
import styles from "./Section2.module.css";
import Image from "next/image";
import TaxiSignal from "../../../public/TaxiSignal.png";
// import carVideo from "../../../public/book-taxi.mp4"
const Section2 = () => {
  return (
    <div className={styles.section}>
      {/* ================= Top Table ================= */}
      <div className={styles.table}>
        <div className={styles.tableRow + " " + styles.tableHeader}>
          <div>CAR TYPE</div>
          <div>MODEL INCLUDES</div>
          <div>PASSENGERS</div>
          <div>IDEAL FOR</div>
          <div>FARE</div>
        </div>

        <div className={styles.tableRow}>
          <div>AC Sedans</div>
          <div>Etios, Amaze, Dzire etc.</div>
          <div>4 Pax</div>
          <div>Comfortable trips with small families</div>
          <div>Rs.11/KM</div>
        </div>

        <div className={styles.tableRow}>
          <div>AC Hatchbacks</div>
          <div>Wagon R, Celerio, Micra etc.</div>
          <div>4 Pax</div>
          <div>Budget trips over short distances</div>
          <div>Rs.11/KM</div>
        </div>

        <div className={styles.tableRow}>
          <div>AC SUV</div>
          <div>Ertiga, Xylo etc.</div>
          <div>6–7 Pax</div>
          <div>Premium trips with large families</div>
          <div>Rs.13/KM</div>
        </div>
      </div>

      {/* ================= Split Container ================= */}
      <div className={styles.splitContainer}>
        {/* Left Side: Text */}
        <div className={styles.textBox}>
          <h2>
            WHY CHOOSE AC BUS OR AC TRAIN <br /> FOR YOUR{" "}
            <span>ONE-WAY JOURNEY?</span>
          </h2>
          <p>
          Our oneway Car Rental service is cheaper than AC bus and 2-tier AC train ticket fares. It reduces your travel time, and you travel in your own private space, allowing you to fully enjoy your journey. Our one way taxi will come to your doorstep and take you to your desired destination. So, book your Cheapest one way cab from Lucknow to Gorakhpur or Varanasi to Ayodhya with our reliable Oneway car rental service with driver. Experience the convenience of our taxi service, where you can rent a car effortlessly and enjoy seamless cab booking. Choose our car hire option for a hassle-free and comfortable travel experience. We offer outstation cab and intercity travel services, ensuring a smooth and enjoyable Luxury ride wherever you need to go.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className={styles.imageBox}>
          {/* <Image
            src={TaxiSignal}
            alt="Taxi Illustration"
            width={400}
            height={300}
          /> */}

           <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.imageBox}
      >
        <source src="/book-taxi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>

    </div>
  );
};

export default Section2;
