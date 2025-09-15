"use client";
import React from "react";
import styles from "./Section5.module.css";

const Section5 = () => {
  return (
    <div className={styles.section}>
      {/* Heading Bar */}
      <div className={styles.headingBar}>
        <h2>
          EXPLORING INDIA'S AMAZING LANDSCAPES, FROM THE MOUNTAINS TO THE
          BEACHES, ONE MEMORABLE ROAD TRIP AT A TIME
        </h2>
      </div>

      {/* Content List */}
      <div className={styles.contentBox}>
        <ul>
          <li>
            Experience The Thrill Of Road Travel With Our Reliable Car Rental And
            Taxi Service As We Explore The Diverse Landscapes Of India Together.
            We're Passionate About Making Car Hire Accessible And Enjoyable For
            Everyone.
          </li>
          <li>
            Instead Of Worrying About The Road, Relax In Our Chauffeur-Driven
            Cabs On Your Next Vacation. With A Presence In Over 2000 Cities Across
            India, We're Here To Take You Wherever Your Heart Desires With Our
            Luxury Car Rental Services.
          </li>
          <li>
            We Cherish The Freedom To Stop, Breathe In The Fresh Air, Immerse In
            Local Cultures, And Savor Regional Cuisines Along The Way. These
            Moments Of Discovery Enrich Your Travels And Create Lasting Memories
            Through Our Rent A Car Service.
          </li>
          <li>
            No Destination Is Too Far Or Too Close; We Encourage You To Explore
            The Beauty Around You With Our Car Hire Options. Pack Your Bags, Set
            Out On Weekend Adventures, And Uncover The Gems In Your Vicinity With
            Our Taxi Service.
          </li>
          <li>
            Planning Your Trip Is A Breeze With Our User-Friendly Website, Or You
            Can Chat With Our Travel Experts At{" "}
            <span className={styles.highlight}>7860663399</span> For Personalized
            Guidance On Car Rental. Our Cab Booking App Simplifies The Process,
            Ensuring A Hassle-Free Experience When You Rent A Car.
          </li>
          <li>
            Our Experienced Drivers Are Your Companions On The Road, Guiding You
            Through India's Best Experiences With Our Car Rental And Taxi Service.
            From Booking To Your Safe Return Home, We're Dedicated To Ensuring You
            Have An Exceptional Road Trip.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section5;
