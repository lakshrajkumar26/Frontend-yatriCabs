'use client'
import React from "react";
import styles from "./custom.module.css";
import bgImage from "../../../public/background.png";
import Image from "next/image";
import Form from "./Form";
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Image
        className={styles.bgImage}
        src={bgImage}
        alt="Background"
        priority
        fill
      />
      <div className="heroLeftConatiner">
        <div className={styles.overlay}>
          <div className={styles.overlayLeft}>

         <h1 >
    <span className={styles.plainText}>  INDIA'S{" "}</span> 
      <span className={styles.leftHighlight}>
        <Typewriter
          words={[
            "LEADING ONE WAY INTERCITY ...",
            "MOST EFFECTIVE ...",
            "CHEAPEST ...",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={200}   //  typing speed (ms per character)
          deleteSpeed={100} //  deleting speed
          delaySpeed={3000}  // wait before deleting/typing next
          
        />
      </span  >{" "}
     <span className={styles.plainText}>CAB SERVICE PROVIDER</span> 
    </h1>
            
          </div>

          <div className={styles.overlayRight}>
            
            {/* <form action="" className={styles.formContainer}>
              <div className={styles.selectionContainer}>
                <button>Outstation</button>
                <button>Local</button>
                <button>Airport</button>
              </div>

              <hr className={styles.line} />
             

              <div className={styles.formInput}>
                <div className={styles.radioButtons}>
                  <label>
                    {" "}
                    <input type="radio" name="oneWay" />
                    One Way
                  </label>
                  <label>
                    {" "}
                    <input type="radio" name="roundTrip" />
                    Round Trip
                  </label>
                </div>

                <div className={styles.inputFieldsMain}>
               
                  <div className={styles.inputFieldsLeft}>
                    <div className={styles.from}>
                      <label htmlFor="">FROM</label>
                      <input type="text" placeholder="Input Text" />
                       <hr /> 
                    </div>

                    <div className={styles.pickupDate}>
                      <label htmlFor="">Pickup Date</label>
                      <input type="text" placeholder="Input Text" />
                       <hr /> 
                    </div>

                    <div className={styles.pickupTime}>
                      <label htmlFor="">Pickup Time</label>
                      <input type="text" placeholder="00 : 00" />
                       <hr /> 
                    </div>
                  </div>
                 
                   <div className={styles.inputFieldsRight}>
 
                    <div className={styles.to}>
                      <label htmlFor="">To</label>
                      <input type="text" placeholder="Input Text" />
                      <hr /> 
                 
                    </div>

                    <div className={styles.returnDate}>
                      <label htmlFor="">Return Date</label>
                      <input type="text" placeholder="Input Text" />
                       <hr /> 
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.formSubmitButton}>EXPLORE CABS</button>
            </form> */}


            
            <Form/>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Hero;
