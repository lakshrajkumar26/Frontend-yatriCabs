"use client";
import React from "react";
import styles from "./Section8.module.css";
import Image from "next/image";
import phoneImg from "../../../public/background.png"; // replace with your phone mockup image
import downloadGroup from "../../../public/downloadFrame1.png"
const Section8 = () => {
  return (
    <section className={styles.wrapper}>
      {/* ================= TESTIMONIALS ================= */}
      <div className={styles.testimonialsSection}>
        <h2 className={styles.title}>Customer Testimonials</h2>

        <div className={styles.testimonialsGrid}>
          {/* Testimonial 1 */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>
              I used Yatri Cabs for my one-way trip from Lucknow to Varanasi,
              and I was genuinely surprised by how much I saved! The 50% off
              claim is real, and it was significantly cheaper than taking a
              train. The car was clean, and the driver was professional. Highly
              recommend!
            </p>
            <p className={styles.author}>Vikram Kulkarni</p>
            <p className={styles.location}>Kalyan, Maharashtra</p>
          </div>

          {/* Testimonial 2 */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>
              The GPS-based billing system is a game-changer. I always worried
              about drivers tampering with meters on long intercity rides, but
              with Yatri Cabs, everything was transparent and real-time. It gave
              me complete peace of mind. Excellent service for my trip to
              Ayodhya!
            </p>
            <p className={styles.author}>Rajesh Kumawat</p>
            <p className={styles.location}>Kanpur, Uttar Pradesh</p>
          </div>

          {/* Testimonial 3 */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>
              Traveling with my family from Gorakhpur to Prayagraj was so
              comfortable with Yatri Car Rental. We chose an SUV, and it was
              spacious and well-maintained. The driver was courteous and
              knowledgeable about the route. It made our pilgrimage hassle-free
              and enjoyable.
            </p>
            <p className={styles.author}>Anjali Mishra</p>
            <p className={styles.location}>Gorakhpur, Uttar Pradesh</p>
          </div>

          {/* Testimonial 4 */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>
              As a frequent business traveler, finding a reliable one-way cab
              service that doesn’t charge for a return journey is crucial. Yatri
              Cabs delivers exactly that. Their 24/7 support and easy booking
              process through the app make my life so much simpler. They’re my
              go-to for intercity travel now.
            </p>
            <p className={styles.author}>Siddharth Vaidya</p>
            <p className={styles.location}>Rohini, Delhi</p>
          </div>
        </div>
      </div>

      {/* ================= DOWNLOAD SECTION ================= */}
      <div className={styles.downloadSection}>
        <div className={styles.downloadContainer}>
          {/* Left side */}
          <div className={styles.downloadLeft}>
            {/* <div className={styles.phoneImage}>
              <Image src={phoneImg} alt="Phone App" />
            </div>

            <div className={styles.downloadText}>
              <h3>
                GET YOUR <span>YATRI CABS</span> APP NOW!
              </h3>
              <p>
                Use code <strong>WELCOMEYATRI</strong> and get{" "}
                <strong>FLAT 05% OFF*</strong> on your first intercity ride
              </p>
              <p className={styles.downloadNow}>Download Now!</p>
              <div className={styles.storeButtons}>
                <Image
                  src="/googleplay.png"
                  alt="Google Play"
                  width={140}
                  height={40}
                />
                <Image
                  src="/appstore.png"
                  alt="App Store"
                  width={140}
                  height={40}
                />
              </div>
            </div> */}
            <Image src={downloadGroup} alt=""/>
          </div>

          {/* Right side */}
          <div className={styles.downloadRight}>
            <h3>
              BECOME A <span>DRIVER</span> PARTNER
            </h3>
            <p>
              Join <span>Yatri Car Rental</span> and attach your car to our
              platform. Earn more by serving our passengers and benefit from our
              extensive customer base.
            </p>
            <button className={styles.downloadBtn}>DOWNLOAD THE APP</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
