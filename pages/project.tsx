import React from "react";
import 'swiper/css';
import styles from "@/styles/home.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

const AboutUs = () => {
  return (
<React.Fragment>
  
  <div className={`${styles["about-container"]} p-20 md:p-20`}>
  <div className={styles["content"]}>
    <h2 className="text-4xl font-semibold">THINK</h2><h2 className="text-4xl font-semibold">CAMPUS</h2>
    <p> Since 2000 | India-Bangalore headquarter</p>
  </div>
  <div className="absolute bottom-[-32px]"><Image
  src="/images/Icon.png" height={200} width={200}
  className="w-16"
  alt="..." />
</div>
</div>
<div className="flex flex-wrap p-20 md:p-20">
  <div className="w-1/5 flex-auto">
    <div className="w-full"><h1 className="text-xl font-bold primary-color">2 Million <br/>Square foot</h1><h1 className="text-xl font-medium">In Commerical <br/>Spaces</h1> </div>
  </div>
  <div className="w-3/5 flex-auto pl-20 pr-20 border-l-2">
    <div className="w-full">
      <p className="text-sm font-medium leading-loose">Since 1995, GTP has been building some of the most recognized buildings in South India. Our signature DOME, 
      has been copied by many - which we think is the best compliment - over the last 2 decades.</p>
     </div>
  </div>
  <div className="w-1/5 flex-auto pl-10 border-l-2">
    <div className="w-full">
      <p className="text-xl font-medium leading-loose">Electronic City Bengaluru </p>
      <p className="text-xl font-medium leading-loose">INDIA</p></div>
  </div>
</div>
<div className="w-full pt-10 pb-20"><Image
  src="/images/GTP_Project_2.jpg"
  className="w-full" height={600} width={1230}
  alt="..." />
</div>
<div className="flex flex-wrap">
  <div className="w-3/6 flex-auto pr-4">
  <Image
  src="/images/GTP_Project_3.jpg"
  className="w-full" height={900} width={600}
  alt="..." />
  </div>
  <div className="w-3/6 flex-auto pl-4">
  <Image
  src="/images/GTP_Project_4.jpg"
  className="w-full" height={900} width={600}
  alt="..." />
  </div>
</div>

<div className="w-full pt-20 pb-20">
  <h2 className="text-2xl text-center font-bold primary-color">2 Million Square foot</h2>
  <p className="w-1/2 mx-auto text-center font-normal">Since 1995, GTP has been building some of the most recognized buildings in South India. Our signature DOME, has been copied by many - which we think 
  is the best compliment - over the last 2 decades.</p>
  <Image height={600} width={1230}
  src="/images/GTP_Project_5.jpg"
  className="w-full pt-10"
  alt="..." />
</div>

 
<div className="flex flex-wrap pt-6  pr-8 md:pt-10">
  <div className="w-1/12 flex-auto">
    <div className="w-full"> <h1 className="mb-3 text-2xl font-bold primary-color">Other <br></br>Projects</h1></div>
  </div>
  <div className="w-1/4 flex-auto px-4">
    <div className="w-full"> 
   <Image height={200} width={300}
  src="/images/GTP_Project_6.jpg"
  
  alt="..." />
   <p className="text-center font-normal pt-4">BOSCH Bengaluru</p>

      </div>
  </div>
  <div className="w-1/4 flex-auto px-4">
    <div className="w-full">
   <Image height={200} width={300}
  src="/images/GTP_Project_7.jpg"
  
  alt="..." />
<p className="text-center font-normal pt-4">BOSCH Bengaluru</p>

      </div>
  </div>
  <div className="w-1/4 flex-auto px-4">
  <div className="w-full">
   <Image height={200} width={300}
  src="/images/GTP_Project_8.jpg"
  
  alt="..." />
   <p className="text-center font-normal pt-4">BOSCH Bengaluru</p>

      </div>
  </div>
</div>
</React.Fragment>

  
  );
};
export default AboutUs;