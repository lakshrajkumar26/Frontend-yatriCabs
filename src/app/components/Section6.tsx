"use client";
import React from "react";
import Image from "next/image";
import styles from "./Section6.module.css";
import carCurrency from "../../../public/currencyGraph.png"
import carLocation from "../../../public/carLocation.png"
import carCalender from "../../../public/carCalender.png"
const Section6 = () => {
  return (
    <div className={styles.section}>
  
  

      {/* Content Box (three cards) */}
      <div className={styles.contentBox}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              
              <Image
                src={carCurrency}
                alt="car"
                width={140}
                height={110}
                priority
                className={styles.carIcon}
              />
            </div>

            <h3 className={styles.cardTitle}>For Any Budget</h3>
            <p className={styles.cardText}>
              Choose from hatchbacks, sedans, mini SUVs and more—find a ride
              within your budget and book it conveniently.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrap}>
             
              <Image
                src={carLocation}
                alt="car"
                width={140}
                height={110}
                priority
                className={styles.carIcon}
              />
            </div>

            <h3 className={styles.cardTitle}>For Any Distance</h3>
            <p className={styles.cardText}>
              Book daily rides, outstation trips, one-way or round trips with
              easy booking and transparent pricing.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrap}>
             
              <Image
                src={carCalender}
                alt="car"
                width={140}
                height={110}
                priority
                className={styles.carIcon}
              />
            </div>

            <h3 className={styles.cardTitle}>For Any Duration</h3>
            <p className={styles.cardText}>
              Hourly packages, multi-day trips or long drives — choose the
              duration that fits your plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
