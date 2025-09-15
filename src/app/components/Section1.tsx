"use client";
import React from "react";
import styles from "./Section1.module.css";
import Image from "next/image";
import driving from "../../../public/driving.png"
import location from '../../../public/location.png'
import Hand from "../../../public/Hand.png"
import { HelpingHand, HelpingHandIcon, MapPin } from "lucide-react";
import DownlaodBoard from "../../../public/DownlaodFrame.png"
const Section1 = () => {
  return (
    <>
<div className={styles.overlapBanner}>
  <div className={styles.bannerBox}>
    <div>
      <h3>Transparent Billing</h3>
      <p>GPS Based Billing | No Km Tampering</p>
    </div>

    <div>
      {/* <p>Download Now!</p> */}
      <div className={styles.storeButtons}>

        <Image src={DownlaodBoard} alt="Google Play" />
        {/* <img src="/appstore.png" alt="App Store" /> */}
      </div>
    </div>
    <div>
      <h3>No return fare</h3>
      <p>Oneway Cab Fare | No Hidden Charges</p>
    </div>
  </div>
</div>

{/* Section started */}

    <div className={styles.section}>
      {/* Top Icons Row */}
      <div className={styles.topRow}>
        <div className={styles.topItem}>
          {/* <img src="/icons/return-fare.png" alt="Return Fare" /> */}
          
    
            <Image src={Hand} alt="Routes" className={styles.icon}/>
          <p className={styles.topTitle}>RETURN FARE, NOT FAIR!</p>
          <p className={styles.topText}>
            Why Pay For Return Journey When You Are Travelling Oneway? 
            Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One Way Travel.
          </p>
        </div>

        <div className={styles.topItem}>

          
            <Image src={location} alt="Routes" className={styles.icon}/>
          <p className={styles.topTitle}>GPS BASED BILLING SYSTEM</p>
          <p className={styles.topText}>
            Since The GPS Data Captures The Actual Distance and Time Travelled, 
            It Reduces The Chance Of Kilometer Tampering Or Discrepancies In Billing.
          </p>
        </div>

        <div className={styles.topItem}>
          <Image src={driving} alt="Routes" className={styles.icon}/>

          <p className={styles.topTitle}>NOW AVAILABLE ROUTES ARE!</p>
          <p className={styles.topText}>
            Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className={styles.main}>
        <h2 className={styles.heading}>
          INDIA&apos;S PREMIER INTERCITY AND LOCAL TAXI SERVICES
        </h2>
        <p className={styles.description}>
         At Yatri Cabs, we pride ourselves on being a top-tier online oneway cab booking service, delivering reliable and premium intercity and local taxi services. With over a decade of experience, Instead of self-drive car rental, we have become the leading driver-driven One Way car rental company in India, renowned for our extensive coverage across the country
        </p>
      </div>
    </div>
    </>
  );
};

export default Section1;
