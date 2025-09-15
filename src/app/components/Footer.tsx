"use client";
import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/logo.png" // replace with your actual logo path
          alt="Yatri Cabs"
          width={120}
          height={40}
        />
      </div>

      {/* Navigation Links */}
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/career">Career</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms & Condition</a>
      </nav>

      {/* Copyright */}
      <p className={styles.copy}>
        © {new Date().getFullYear()} All Copyrights are reserved by YATRI CABS
      </p>
    </footer>
  );
};

export default Footer;
