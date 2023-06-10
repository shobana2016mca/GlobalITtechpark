import MenuIcon from "@/components/icons/menu";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
// import required modules
// import { Pagination } from "swiper";
import { Autoplay, Pagination } from "swiper";
import styles from "@/styles/home.module.scss";

import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Swiper
        slidesPerView={1}
        className={`home-slider-wrap w-full`}
        // pagination={true} 
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
      >
        <SwiperSlide>
        <div className={`${styles["slide-container"]} p-20 md:p-24`}>
            <div className={styles["content"]}>
              <h1>THINK</h1><h1> CAMPUS</h1>
              <p>Bangalore | 1.2 Million Square-Foot | TCS</p>
            </div>
            <div className={`${styles["controls"]} pt-8` }>
              <button className="bg-[#1087d2] text-white ">
                VIEW PROJECT →
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${styles["slide-container"]} p-20`}>
            <div className={styles["content"]}>
            <h1>THINK</h1><h1> CAMPUS</h1>
             
              
              <p>Bangalore | 1.2 Million Square-Foot | TCS</p>
            </div>
            <div className={`${styles["controls"]} pt-8` }>

              <button className="bg-[#30abb7] text-white p-2">
                VIEW PROJECT →
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${styles["slide-container"]} p-20`}>
            <div className={styles["content"]}>
            <h1>THINK</h1><h1> CAMPUS</h1>
              <p>Bangalore | 1.2 Million Square-Foot | TCS</p>
            </div>
             <div className={`${styles["controls"]} pt-8` }>
              <button className="bg-[#1087d2] text-white p-2">
                VIEW PROJECT →
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles["slide-container"]} p-20`}>
            <div className={styles["content"]}>
            <h1>THINK</h1><h1> CAMPUS</h1>
              <p className="px-12 pt-14">Bangalore | 1.2 Million Square-Foot | TCS</p>
            </div>
            <div className={`${styles["controls"]} pt-8` }>
              <button className="bg-[#1087d2] text-white p-2">
                VIEW PROJECT →
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={`${styles["middle-container"]} pl-16 pt-16 pb-16 mt-5 mb-12`}>
        <div className={`${styles["image"]} w-full md:w-3/5`}></div>
        <div
          className={`${styles["card-container"]} w-11/12 md:left-0 md:w-2/4 h-3/4 md:h-4/5 flex flex-col p-4 md:p-16 bg-white`}
        >
          <div className={`${styles["grid"]}`}>
            <div className={styles["card"]}>
              <h2 className="w-full md:w-3/5">2 Million Square Foot </h2>
              <p className="w-full md:w-3/5">In Commercial Spaces</p>
            </div>
            <div className={`${styles["card"]} pl-1 md:pl-0`}>
            <h2 className="w-full md:w-3/5">
                03
                <br />
                Decades{" "}
              </h2>
              <p className="w-full md:w-3/5">Of trusted & reliable delivery</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="">
              Since 1995, GTP has been building some of the most recognized
              buildings in South India. Our signature DOME, has been copied by
              many - which we think is the best compliment - over the last 2
              decades.
            </p>
          </div>
          <div>
            <button className="bg-[#30abb7] text-white p-2">
              MORE ABOUT US →
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles["bottom-container"]} p-16  `}>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-semibold not-italic text-left text-white">
            Concern for Community
          </h1>
          <p className="text-base font-normal not-italic text-left text-white ff-tinos w-1/2">
            We focus on specific societal issues, including the environment,
            community, economic development, education, health and culture.
          </p>
          <p className="text-base font-normal not-italic text-left text-white ff-tinos">
            Satish Chandra - Chairman
          </p>
        </div>
        <div className="flex mt-4">
          <button className="bg-[#FFFFFF] text-[#30abb7] p-2">
            OUR CSR INITIATIVES →
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
