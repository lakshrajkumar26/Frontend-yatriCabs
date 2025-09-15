"use client";
import React from "react";
import styles from "./Section3.module.css";

const Section3 = () => {
  return (
    <div className={styles.section}>
      {/* Top Header */}
      <div className={styles.headerBox}>
        <h2>CAR RENTAL IN INDIA – BOOK RELIABLE VEHICLES FOR ALL YOUR NEEDS</h2>
      </div>

      {/* Content Box */}
      <div className={styles.contentBox}>
        <p>
        Choosing a chauffeur-driven car rental over a self-drive Car Hire option in India offers several benefits with Yatri Car Rental:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>1. Skilled Chauffeurs:</strong> Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need a taxi service, outstation car rental, or oneway cab, they are adept at navigating India’s roads for a seamless travel experience.
          </li>
          <li>
            <strong>2. Dedicated Oneway Cab Service:</strong> We offer specialized oneway car rental services across India, allowing you to pay only for the distance you travel. This makes intercity trips with Yatri Car Rental both cost-effective and convenient.
          </li>
          <li>
            <strong>3. Well-Maintained Car Rental Fleet:</strong>  Our fleet of rental cars in India is kept in top condition, ensuring you enjoy a comfortable and secure ride, whether you opt for a car hire, taxi service, or outstation car rental.
          </li>
          <li>
            <strong>4. Transparent Pricing for Car Hire:</strong> Our GPS-based billing system ensures fair pricing by eliminating any chances of Kilometer tampering by the driver. With real-time distance measurement and live location tracking, you get transparency and peace of mind when using our car rental services.
          </li>
          <li>
            <strong>5. 24/7 Customer Support for Car Rentals:</strong> Our customer care team is available round the clock to assist with any inquiries or concerns regarding your car hire, taxi service, or outstation car rental, ensuring a smooth and enjoyable experience throughout your journey in India.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section3;
