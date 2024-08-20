"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import Header from "@/components/Header";
import WelcomeNote from "@/components/WelcomeNote"
import Carousal from "@/components/Carousal";
import Footer from "@/components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// config.autoAddCss = false;


export default function Home() {
  const { user, error, isLoading } = useUser();

  console.log(user);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
    <WelcomeNote />
      {/* <Header /> */}
      {/* <Landingpage/> */}
      
      {/* <div className="row">
        <div className="col-sm-sm mx-20px">
          <p className="about" id="p1about">
            Our mission is to provide a robust platform that allows users to report road accidents promptly, ensuring that critical information reaches the relevant authorities without delay. By leveraging modern technology, we strive to reduce response times, improve data accuracy, and ultimately save lives.
          </p>
        </div>

      </div> */}
      <Footer />
    </>

  );
}
