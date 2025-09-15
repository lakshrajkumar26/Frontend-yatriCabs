"use client";

"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSourceCoordinates } from "../../redux/SourceCordinatesSlice";
import { setDestinationCoordinates } from "../../redux/DestinationCordinates";
import styles from "./Form.module.css";
import { useRouter } from "next/navigation";

const session_Token = "45g542ggfsfg-431fgsdj-hdsds-adfhxcb43";
const MAPBOX_RETRIVE_URL =
  "https://api.mapbox.com/search/searchbox/v1/retrieve/";

const Form = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const source = useSelector((state: RootState) => state.sourceCoordinates);
  const destination = useSelector((state: RootState) => state.destinationCoordinates);

  const [activeTab, setActiveTab] = useState("Outstation");
  const [tripType, setTripType] = useState("oneWay");

  const [sourceAddress, setSourceAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [sourceAddressList, setSourceAddressList] = useState<any[]>([]);
  const [destinationAddressList, setDestinationAddressList] = useState<any[]>([]);
  const [isSelectingSource, setIsSelectingSource] = useState(false);
  const [isSelectingDestination, setIsSelectingDestination] = useState(false);

  // ================= Source Debounce =================
  useEffect(() => {
    if (!sourceAddress || isSelectingSource) {
      setIsSelectingSource(false);
      return;
    }
    const timer = setTimeout(() => getAddressesForSource(), 1000);
    return () => clearTimeout(timer);
  }, [sourceAddress]);

  const getAddressesForSource = async () => {
    const res = await fetch(`/api/search-address?q=${sourceAddress}`);
    const data = await res.json();
    setSourceAddressList(data.data?.suggestions || []);
  };

  const onSourceAddressClicked = async (ele: any) => {
    setIsSelectingSource(true);
    setSourceAddress(ele.name);
    setSourceAddressList([]);
    const res = await fetch(
      `${MAPBOX_RETRIVE_URL}${ele.mapbox_id}?session_token=${session_Token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );
    const data = await res.json();
    dispatch(
      setSourceCoordinates({
        lng: data.features[0].geometry.coordinates[0],
        lat: data.features[0].geometry.coordinates[1],
      })
    );
  };

  // ================= Destination Debounce =================
  useEffect(() => {
    if (!destinationAddress || isSelectingDestination) {
      setIsSelectingDestination(false);
      return;
    }
    const timer = setTimeout(() => getAddressesForDestination(), 1000);
    return () => clearTimeout(timer);
  }, [destinationAddress]);

  const getAddressesForDestination = async () => {
    const res = await fetch(`/api/search-address?q=${destinationAddress}`);
    const data = await res.json();
    setDestinationAddressList(data.data?.suggestions || []);
  };

  const onDestinationAddressClicked = async (ele: any) => {
    setIsSelectingDestination(true);
    setDestinationAddress(ele.name);
    setDestinationAddressList([]);
    const res = await fetch(
      `${MAPBOX_RETRIVE_URL}${ele.mapbox_id}?session_token=${session_Token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );
    const data = await res.json();
    dispatch(
      setDestinationCoordinates({
        lng: data.features[0].geometry.coordinates[0],
        lat: data.features[0].geometry.coordinates[1],
      })
    );
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // prevent page refresh
    if (!sourceAddress || !destinationAddress) {
      alert("Please select both Source and Destination!");
      return;
    }
    router.push("/booking");
  };

  return (
    <form className={styles.formContainer}>
      {/* Tabs */}
      <div className={styles.selectionContainer}>
        {["Outstation", "Local", "Airport"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <hr className={styles.line} />

      {/* Outstation tab */}
      {activeTab === "Outstation" && (
        <div className={styles.formInput}>
          <div className={styles.radioButtons}>
            <label>
              <input
                type="radio"
                name="tripType"
                value="oneWay"
                checked={tripType === "oneWay"}
                onChange={(e) => setTripType(e.target.value)}
              />
              One Way
            </label>
            <label>
              <input
                type="radio"
                name="tripType"
                value="roundTrip"
                checked={tripType === "roundTrip"}
                onChange={(e) => setTripType(e.target.value)}
              />
              Round Trip
            </label>
          </div>

          <div className={styles.inputFieldsMain}>
            {/* Left Side */}
            <div className={styles.inputFieldsLeft}>
              <div className={styles.inputGroup}>
                <label>FROM</label>
                <input
                  type="text"
                  placeholder="Input Text"
                  value={sourceAddress}
                  onChange={(e) => setSourceAddress(e.target.value)}
                />
                <hr />
                {sourceAddressList.length > 0 && (
                  <ul className={styles.suggestions}>
                    {sourceAddressList.map((ele, i) => (
                      <li key={i} onClick={() => onSourceAddressClicked(ele)}>
                        {ele.name} - {ele.place_formatted}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Pickup Date</label>
                <input type="date" />
                <hr />
              </div>

              <div className={styles.inputGroup}>
                <label>Pickup Time</label>
                <input type="time" />
                <hr />
              </div>
            </div>

            {/* Right Side */}
            <div className={styles.inputFieldsRight}>
              <div className={styles.inputGroup}>
                <label>TO</label>
                <input
                  type="text"
                  placeholder="Input Text"
                  value={destinationAddress}
                  onChange={(e) => setDestinationAddress(e.target.value)}
                />
                <hr />
                {destinationAddressList.length > 0 && (
                  <ul className={styles.suggestions}>
                    {destinationAddressList.map((ele, i) => (
                      <li key={i} onClick={() => onDestinationAddressClicked(ele)}>
                        {ele.name} - {ele.place_formatted}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Return Date</label>
                <input type="date" />
                <hr />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Local tab */}
      {activeTab === "Local" && (
        <div className={styles.formInput}>
          <div className={styles.radioButtons}>
            <label>
              <input type="radio" name="trip" />
              One Way
            </label>
            <label>
              <input type="radio" name="trip" />
              Round Trip
            </label>
          </div>

          <div className={styles.inputFieldsMain}>
            <div className={styles.inputFieldsLeft}>
              <div className={styles.inputGroup}>
                <label>FROM</label>
                <input type="text" placeholder="Input Text" />
                <hr />
              </div>
              <div className={styles.inputGroup}>
                <label>Pickup Date</label>
                <input type="date" />
                <hr />
              </div>
            </div>

            <div className={styles.inputFieldsRight}>
              <div className={styles.inputGroup}>
                <label>TO</label>
                <input type="text" placeholder="Input Text" />
                <hr />
              </div>
              <div className={styles.inputGroup}>
                <label>Pickup Time</label>
                <input type="time" placeholder="Input Text" />
                <hr />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Airport tab */}
      {activeTab === "Airport" && (
        <div className={styles.formInput}>
          <div className={styles.radioButtons}>
            <label>
              <input type="radio" name="trip" />
              One Way
            </label>
            <label>
              <input type="radio" name="trip" />
              Round Trip
            </label>
          </div>

          <div className={styles.inputFieldsMain}>
            <div className={styles.inputFieldsLeft}>
              <div className={styles.inputGroup}>
                <label>FROM</label>
                <input type="text" placeholder="Input Text" />
                <hr />
              </div>
              <div className={styles.inputGroup}>
                <label>Pickup Date</label>
                <input type="date" />
                <hr />
              </div>
            </div>

            <div className={styles.inputFieldsRight}>
              <div className={styles.inputGroup}>
                <label>TO</label>
                <input type="text" placeholder="Input Text" />
                <hr />
              </div>
              <div className={styles.inputGroup}>
                <label>Pickup Time</label>
                <input type="time" placeholder="Input Text" />
                <hr />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className={styles.submitWrapper}>
        <button
          type="button"
          className={styles.formSubmitButton}
          onClick={handleSubmit}
        >
          EXPLORE CABS
        </button>
      </div>
    </form>
  );
};

export default Form;


// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
// import { setSourceCoordinates } from "../../redux/SourceCordinatesSlice";
// import { setDestinationCoordinates } from "../../redux/DestinationCordinates";
// import styles from "./Form.module.css";
// import { useRouter } from "next/navigation";

// const session_Token = "45g542ggfsfg-431fgsdj-hdsds-adfhxcb43";
// const MAPBOX_RETRIVE_URL =
//   "https://api.mapbox.com/search/searchbox/v1/retrieve/";


// const Form = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const source = useSelector((state: RootState) => state.sourceCoordinates);
//   const destination = useSelector((state: RootState) => state.destinationCoordinates);

//   const [activeTab, setActiveTab] = useState("Outstation");
//   const [tripType, setTripType] = useState("oneWay");

//   const [sourceAddress, setSourceAddress] = useState("");
//   const [destinationAddress, setDestinationAddress] = useState("");
//   const [sourceAddressList, setSourceAddressList] = useState<any[]>([]);
//   const [destinationAddressList, setDestinationAddressList] = useState<any[]>([]);
//   const [isSelectingSource, setIsSelectingSource] = useState(false);
//   const [isSelectingDestination, setIsSelectingDestination] = useState(false);

//   // ================= Source Debounce =================
//   useEffect(() => {
//     if (!sourceAddress || isSelectingSource) {
//       setIsSelectingSource(false);
//       return;
//     }
//     const timer = setTimeout(() => getAddressesForSource(), 1000);
//     return () => clearTimeout(timer);
//   }, [sourceAddress]);

//   const getAddressesForSource = async () => {
//     const res = await fetch(`/api/search-address?q=${sourceAddress}`);
//     const data = await res.json();
//     setSourceAddressList(data.data?.suggestions || []);
//   };

//   const onSourceAddressClicked = async (ele: any) => {
//     setIsSelectingSource(true);
//     setSourceAddress(ele.name);
//     setSourceAddressList([]);
//     const res = await fetch(
//       `${MAPBOX_RETRIVE_URL}${ele.mapbox_id}?session_token=${session_Token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
//     );
//     const data = await res.json();
//     dispatch(
//       setSourceCoordinates({
//         lng: data.features[0].geometry.coordinates[0],
//         lat: data.features[0].geometry.coordinates[1],
//       })
//     );
//   };

//   // ================= Destination Debounce =================
//   useEffect(() => {
//     if (!destinationAddress || isSelectingDestination) {
//       setIsSelectingDestination(false);
//       return;
//     }
//     const timer = setTimeout(() => getAddressesForDestination(), 1000);
//     return () => clearTimeout(timer);
//   }, [destinationAddress]);

//   const getAddressesForDestination = async () => {
//     const res = await fetch(`/api/search-address?q=${destinationAddress}`);
//     const data = await res.json();
//     setDestinationAddressList(data.data?.suggestions || []);
//   };

//   const onDestinationAddressClicked = async (ele: any) => {
//     setIsSelectingDestination(true);
//     setDestinationAddress(ele.name);
//     setDestinationAddressList([]);
//     const res = await fetch(
//       `${MAPBOX_RETRIVE_URL}${ele.mapbox_id}?session_token=${session_Token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
//     );
//     const data = await res.json();
//     dispatch(
//       setDestinationCoordinates({
//         lng: data.features[0].geometry.coordinates[0],
//         lat: data.features[0].geometry.coordinates[1],
//       })
//     );
//   };

//   return (
//     <form className={styles.formContainer}>
//       {/* Tabs */}
//       <div className={styles.selectionContainer}>
//         {["Outstation", "Local", "Airport"].map((tab) => (
//           <button
//             key={tab}
//             type="button"
//             onClick={() => setActiveTab(tab)}
//             className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ""}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <hr className={styles.line} />

//       {/* Outstation tab */}
//       {activeTab === "Outstation" && (
//         <div className={styles.formInput}>
//           <div className={styles.radioButtons}>
//             <label>
//               <input
//                 type="radio"
//                 name="tripType"
//                 value="oneWay"
//                 checked={tripType === "oneWay"}
//                 onChange={(e) => setTripType(e.target.value)}
//               />
//               One Way
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="tripType"
//                 value="roundTrip"
//                 checked={tripType === "roundTrip"}
//                 onChange={(e) => setTripType(e.target.value)}
//               />
//               Round Trip
//             </label>
//           </div>

//           <div className={styles.inputFieldsMain}>
//             {/* Left Side */}
//             <div className={styles.inputFieldsLeft}>
//               <div className={styles.inputGroup}>
//                 <label>FROM</label>
//                 <input
//                   type="text"
//                   placeholder="Input Text"
//                   value={sourceAddress}
//                   onChange={(e) => setSourceAddress(e.target.value)}
//                 />
//                 <hr />
//                 {sourceAddressList.length > 0 && (
//                   <ul className={styles.suggestions}>
//                     {sourceAddressList.map((ele, i) => (
//                       <li key={i} onClick={() => onSourceAddressClicked(ele)}>
//                         {ele.name} - {ele.place_formatted}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>

//               <div className={styles.inputGroup}>
//                 <label>Pickup Date</label>
//                 <input type="date" />
//                 <hr />
//               </div>

//               <div className={styles.inputGroup}>
//                 <label>Pickup Time</label>
//                 <input type="time" />
//                 <hr />
//               </div>
//             </div>

//             {/* Right Side */}
//             <div className={styles.inputFieldsRight}>
//               <div className={styles.inputGroup}>
//                 <label>TO</label>
//                 <input
//                   type="text"
//                   placeholder="Input Text"
//                   value={destinationAddress}
//                   onChange={(e) => setDestinationAddress(e.target.value)}
//                 />
//                 <hr />
//                 {destinationAddressList.length > 0 && (
//                   <ul className={styles.suggestions}>
//                     {destinationAddressList.map((ele, i) => (
//                       <li key={i} onClick={() => onDestinationAddressClicked(ele)}>
//                         {ele.name} - {ele.place_formatted}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>

//               <div className={styles.inputGroup}>
//                 <label>Return Date</label>
//                 <input type="date" />
//                 <hr />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Local and Airport tabs remain exactly the same */}
//       {activeTab === "Local" && (
//         <div className={styles.formInput}>
//           <div className={styles.radioButtons}>
//             <label>
//               <input type="radio" name="trip" />
//               One Way
//             </label>
//             <label>
//               <input type="radio" name="trip" />
//               Round Trip
//             </label>
//           </div>

//           <div className={styles.inputFieldsMain}>
//             {/* Left side */}
//             <div className={styles.inputFieldsLeft}>
//               <div className={styles.inputGroup}>
//                 <label>FROM</label>
//                 <input type="text" placeholder="Input Text" />
//                 <hr />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Pickup Date</label>
//                 <input type="date" />
//                 <hr />
//               </div>
//             </div>

//             {/* Right side */}
//             <div className={styles.inputFieldsRight}>
//               <div className={styles.inputGroup}>
//                 <label>TO</label>
//                 <input type="text" placeholder="Input Text" />
//                 <hr />
//               </div>

//               <div className={styles.inputGroup}>
//                 <label>Pickup Time</label>
//                 <input type="time" placeholder="Input Text" />
//                 <hr />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}




//       {/* Airport */}
//         {activeTab === "Airport" && (
//         <div className={styles.formInput}>
//           <div className={styles.radioButtons}>
//             <label>
//               <input type="radio" name="trip" />
//               One Way
//             </label>
//             <label>
//               <input type="radio" name="trip" />
//               Round Trip
//             </label>
//           </div>

//           <div className={styles.inputFieldsMain}>
//             {/* Left side */}
//             <div className={styles.inputFieldsLeft}>
//               <div className={styles.inputGroup}>
//                 <label>FROM</label>
//                 <input type="text" placeholder="Input Text" />
//                 <hr />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Pickup Date</label>
//                 <input type="date" />
//                 <hr />
//               </div>
              
//             </div>

//             {/* Right side */}
//             <div className={styles.inputFieldsRight}>
//               <div className={styles.inputGroup}>
//                 <label>TO</label>
//                 <input type="text" placeholder="Input Text" />
//                 <hr />
//               </div>
//              <div className={styles.inputGroup}>
//                 <label>Pickup Time</label>
//                 <input type="time" placeholder="Input Text" />
//                 <hr />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}


//       <div className={styles.submitWrapper}>
//         <button className={styles.formSubmitButton} onClick={() => router.push("/booking")}>EXPLORE CABS</button>
//       </div>
//     </form>
//   );
// };

// export default Form;



// import React, { useState } from "react";
// import styles from "./Form.module.css";

// const Form = () => {
//   const [activeTab, setActiveTab] = useState("Outstation");
//   const [tripType, setTripType] = useState("oneWay");

//   return (
//     <form action="" className={styles.formContainer}>
    
//       <div className={styles.selectionContainer}>
//         {["Outstation", "Local", "Airport"].map((tab) => (
//           <button
//             key={tab}
//             type="button"
//             onClick={() => setActiveTab(tab)}
//             className={`${styles.tabButton} ${
//               activeTab === tab ? styles.activeTab : ""
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <hr className={styles.line} />

      
//       {activeTab === "Outstation" && (
//         <div className={styles.formInput}>
//           <div className={styles.radioButtons}>
//             <label>
//               <input
//                 type="radio"
//                 name="tripType"
//                 value="oneWay"
//                 checked={tripType === "oneWay"}
//                 onChange={(e) => setTripType(e.target.value)}
//               />
//               One Way
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="tripType"
//                 value="roundTrip"
//                 checked={tripType === "roundTrip"}
//                 onChange={(e) => setTripType(e.target.value)} 
//               />
//               Round Trip
//             </label>
//           </div>

//           <div className={styles.inputFieldsMain}>
           
//             <div className={styles.inputFieldsLeft}>
//               <div className={styles.inputGroup}>
//                 <label>FROM</label>
//                 <input type="text" placeholder="Input Text" />
//                 <hr />
//               </div>

//               {tripType === "roundTrip" && (
//                 <div className={styles.inputGroup}>
//                   <label>TO</label>
//                   <input type="text" placeholder="Input Text" />
//                   <hr />
//                 </div>
//               )}

//               <div className={styles.inputGroup}>
//                 <label>Pickup Date</label>
//                 <input type="date" />
//                 <hr />
//               </div>

//               <div className={styles.inputGroup}>
//                 <label>Pickup Time </label>
//                 <input type="time" />
//                 <hr />
//               </div>

//             </div>

          
//             <div className={styles.inputFieldsRight}>
//               <div className={styles.inputGroup}>
//                 <label>TO</label>
//                 <input type="text" placeholder="Input Text" />
//                 <hr />
//               </div>
              
              
//               {tripType === "roundTrip" && (
//                 <div className={styles.inputGroup}>
//                   <label>TO</label>
//                   <input type="text" placeholder="Input Text" />
//                   <hr />
//                 </div>
//               )}

//               <div className={styles.inputGroup}>
//                 <label>Return Date</label>
//                 <input type="date" />
//                 <hr />
//               </div>

             
//             </div>
//           </div>
//         </div>
//       )}


    
//       {activeTab === "Local" && (
//         <div className={styles.formInput}>
//           <div className={styles.radioButtons}>
//             <label>
//               <input type="radio" name="trip" />
//               One Way
//             </label>
//             <label>
//               <input type="radio" name="trip" />
//               Round Trip
//             </label>
//           </div>

//           <div className={styles.inputFieldsMain}>
//             {/* Left side */}
//             <div className={styles.inputFieldsLeft}>
//               <div className={styles.inputGroup}>
//                 <label>FROM</label>
//                 <input type="text" placeholder="Input Text" />
//                 <hr />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Pickup Date</label>
//                 <input type="date" />
//                 <hr />
//               </div>
//             </div>

//             {/* Right side */}
//             <div className={styles.inputFieldsRight}>
//               <div className={styles.inputGroup}>
//                 <label>TO</label>
//                 <input type="text" placeholder="Input Text" />
//                 <hr />
//               </div>

//               <div className={styles.inputGroup}>
//                 <label>Pickup Time</label>
//                 <input type="time" placeholder="Input Text" />
//                 <hr />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

    
//       {activeTab === "Airport" && (
//         <div className={styles.formInput}>
//           <div className={styles.radioButtons}>
//             <label>
//               <input type="radio" name="trip" />
//               One Way
//             </label>
//             <label>
//               <input type="radio" name="trip" />
//               Round Trip
//             </label>
//           </div>

//           <div className={styles.inputFieldsMain}>
//             {/* Left side */}
//             <div className={styles.inputFieldsLeft}>
//               <div className={styles.inputGroup}>
//                 <label>FROM</label>
//                 <input type="text" placeholder="Input Text" />
//                 <hr />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Pickup Date</label>
//                 <input type="date" />
//                 <hr />
//               </div>
              
//             </div>

//             {/* Right side */}
//             <div className={styles.inputFieldsRight}>
//               <div className={styles.inputGroup}>
//                 <label>TO</label>
//                 <input type="text" placeholder="Input Text" />
//                 <hr />
//               </div>
//              <div className={styles.inputGroup}>
//                 <label>Pickup Time</label>
//                 <input type="time" placeholder="Input Text" />
//                 <hr />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

     
//       <div className={styles.submitWrapper}>
//         <button className={styles.formSubmitButton}>EXPLORE CABS</button>
//       </div>
//     </form>
//   );
// };

// export default Form;