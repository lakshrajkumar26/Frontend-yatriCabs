import React from "react";
import styles from "./custom.module.css";
import { CircleUserRound,Smartphone } from "lucide-react";
import logo from "../../../public/Logo.png";
import Number from "../../../public/NavbarCenterNumber.png"
import Image from "next/image";
import downlaod from "../../../public/DownlaodPhone.png"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}> <Image src={logo} alt="logo"/> </div>
      <div className="number"><Image src={Number} alt="number" /></div>

      <div className={styles.rightSection}>
        <div className={styles.downloadContainer}>
          {/* <Smartphone className={styles.phoneIcon}/> */}
          <Image   src={downlaod} alt="downlaod" />
           <div className={styles.iconText}>Download App</div>
        </div>
       

        <div className={styles.profileContainer}>
          <CircleUserRound className={styles.user} />
          <p className={styles.accountText}>Hi,Ravi   </p>


  {/* {<header className="">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
                <UserButton />
              </SignUpButton>
            </SignedOut>
            <SignedIn>
             
            </SignedIn>
          </header> } */}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
