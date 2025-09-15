"use client";
import React from "react";
import styles from "./Section4.module.css";
import Image from "next/image";

const Section4 = () => {
  return (
    <div className={styles.section}>
      {/* Title */}
      <h2 className={styles.title}>WHY CHOOSE ONE WAY CAB?</h2>

      {/* Three Columns */}
      <div className={styles.columns}>
        {/* Left List */}
        <div className={styles.listBox}>
          <ul>
            <li>Instant Booking & Confirmation</li>
            <li>Confirmed Booking Immediately</li>
            <li>No Return Fare For One-Way Trip</li>
            <li>Clean & Professional Cab Services</li>
            <li>Transparent Billing With GPS Based Billing System</li>
          </ul>
        </div>

        {/* Center Image */}
        <div className={styles.imageBox}>
           <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.imageBox}
      >
        <source src="/moving-car.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

        {/* Right List */}
        <div className={styles.listBox}>
          <ul>
            <li>Pick-Up From Your House</li>
            <li>Dedicated Cab Just For You</li>
            <li>Drop To Your Desired Destination</li>
            <li>Completed More Than 20,000+ Oneway Trips</li>
            <li>Multiple Payment Option Including Credit Card</li>
          </ul>
        </div>
      </div>

      {/* Bottom Heading */}
      <div className={styles.bottomText}>
        <h3>
          DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS{" "}
          <span>INTERCITY CAR RENTAL</span> IN INDIA – WHERE EXCELLENCE MEETS
          AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR
          JOURNEY!
        </h3>
      </div>
    </div>
  );
};

export default Section4;
