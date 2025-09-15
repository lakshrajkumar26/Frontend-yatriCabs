import Image from "next/image";
import styles from "./Section10.module.css";
import carImage from "../../../public/CarImage.png";
import bolt from "../../../public/bolt.png"
import group from "../../../public/Group 1686551840.png"
import people from "../../../public/people.png"
import paid from "../../../public/paid.png"
export default function WhyYatri() {
  return (
    <section className={styles.whyYatri}>
      <div className={styles.container}>
        {/* Left Side - Image */}
        <div className={styles.left}>
          <Image src={carImage} alt="Yatri Car" className={styles.carImage} />
        </div>

        {/* Right Side - Content */}
        <div className={styles.right}>
          <h2 className={styles.title}>
            WHY <span>YATRI</span> ?
          </h2>

          <div className={styles.feature}>
            <div className={styles.icon}><Image src={bolt} alt="Bolt"></Image></div>
            <div>
              <h3 className={styles.subtitle}>FAST RESPONSE TIME</h3>
              <p className={styles.text}>
                Experience The Best Car Rental Service With Driver For Local Or Outstation Trips, 
                Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}><Image src={people} alt=""/></div>
            <div>
              <h3 className={styles.subtitle}>VAST FLEET</h3>
              <p className={styles.text}>
                We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, 
                And Tempo Travellers To Meet All Your Car Hire Needs.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}><Image src={group} alt=""/></div>
            <div>
              <h3 className={styles.subtitle}>EASY TO ORDER</h3>
              <p className={styles.text}>
                Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, 
                Or By Calling Our Customer Support Team.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}><Image src={paid} alt=""/></div>
            <div>
              <h3 className={styles.subtitle}>GREAT TARIFFS</h3>
              <p className={styles.text}>
                Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To 
                Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
