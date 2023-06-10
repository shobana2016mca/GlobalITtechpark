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
    <h2 className="text-4xl font-semibold">CORPORATE</h2><h2 className="text-4xl font-semibold">PROFILE</h2>
    <p> Since 2000 | India-Bangalore headquarter</p>
  </div>
  <div className="absolute bottom-[-32px]"><img
  src="..\images\Icon.png"
  className="w-16"
  alt="..." />
</div>
</div>
<div className="flex flex-wrap p-20 md:p-20">
  <div className="w-1/5 flex-auto">
    <div className="w-full"><h1 className="text-xl font-bold primary-color">Who</h1> <br/><h1 className="text-xl font-bold primary-color">we are</h1> </div>
  </div>
  <div className="w-4/5 flex-auto pl-20 border-l-2">
    <div className="w-full">
      <p className="text-sm font-medium leading-loose">Since its inception, Global Tech Park (GTP) has consistently proven to be a venture of bold 
      ambition and success. Led by Chairman Satish P Chandra, GTP has grown from developing Bangalore's iconic "The Dome'' into a holding company across the globe with widespread investments in software engineering, healthcare technology and renewable solar energy operations.

</p><p className="text-sm font-medium leading-loose pt-2">We are known for taking risks whilst creating an encouraging environment for professionals alike. Today we operate in multiple countries including UK/USA/Switzerland/Netherlands/Singapore among others; driving 
impactful progress wherever an opportunity arises.</p></div>
  </div>
</div>
<div className="flex flex-wrap px-20">
  <div className="w-1/5 flex-auto">
    <div className="w-full text-xl font-bold">People </div>
  </div>
  <div className="w-4/5 flex-auto  pt-2">
    <div className="w-full border-t-[3px]">
      </div>
  </div>
</div>
<div className="flex flex-wrap px-20 pt-4">
  <div className="w-1/5 flex-auto">
    <div className="w-full"> </div>
  </div>
  <div className="w-[30%] flex-auto pr-4">
    <div className="w-full"><h1 className="mb-3 text-lg font-semibold">Sathish Chandra</h1><Image
  src="..\images\Sathish-P-Chandra.jpg" alt="..." />

      </div>
  </div>
  <div className="w-6/12 flex-auto pl-10 pt-5">
    <div className="w-full"><p className=" text-sm font-medium leading-loose mt-3">Satish P Chandra is the inspirational Chairman and Managing Director of Global Tech Park, a rapidly expanding provider of infrastructure solutions in India. He was instrumental in creating Bengaluru's iconic commercial site Think Campus in Electronic City - fondly known as "the Dome".

His vision has opened up doors to numerous sectors such as healthcare, software technology, solar power and logistic services, earning him prestigious awards like Businessman of the Year from BSICC & Golden Peacock Eco-Innovative Award by GIIS Balestier. Moreover, his commitment towards Corporate Social Responsibility (CSR) sets him apart from others.</p>
      </div>
  </div>
</div>
<div className="w-full pt-20 pb-20"><img
  src="..\images\GTP_About-Us_2.jpg"
  className="w-full"
  alt="..." />
</div>
<div className="flex flex-wrap px-20 pt-4">
  <div className="w-1/5 flex-auto">
    <div className="w-full"> </div>
  </div>
  <div className="w-[30%] flex-auto pr-4">
    <div className="w-full"><h1 className="mb-3 text-lg font-semibold">Chetan Chandra</h1>
    <img
  src="..\images\Chetan-Chandra.jpg"
  
  alt="..." />

      </div>
  </div>
  <div className="md:w-6/12 flex-auto pl-10 pt-5 md:pl-10">
    <div className="w-full"><p className=" text-sm font-medium leading-loose mt-3">Satish P Chandra is the inspirational Chairman and Managing Director of Global Tech Park, a rapidly expanding provider of infrastructure solutions in India. He was instrumental in creating Bengaluru's iconic commercial site Think Campus in Electronic City - fondly known as "the Dome".

His vision has opened up doors to numerous sectors such as healthcare, software technology, solar power and logistic services, earning him prestigious awards like Businessman of the Year from BSICC & Golden Peacock Eco-Innovative Award by GIIS Balestier. Moreover, his commitment towards Corporate Social Responsibility (CSR) sets him apart from others.</p>
      </div>
  </div>
</div>
<div className="flex flex-wrap px-20 pt-6 md:pt-10">
  <div className="w-1/5 flex-auto">
    <div className="w-full"> </div>
  </div>
  <div className="w-[30%] flex-auto pr-4">
    <div className="w-full"><h1 className="mb-3 text-lg font-semibold">Bindu Chandra</h1> 
   <img
  src="..\images\Bindu-Chandra.jpg"
  
  alt="..." />

      </div>
  </div>
  <div className="w-6/12 flex-auto pl-10 pt-5">
    <div className="w-full"><p className=" text-sm font-medium leading-loose mt-3">Satish P Chandra is the inspirational Chairman and Managing Director of Global Tech Park, a rapidly expanding provider of infrastructure solutions in India. He was instrumental in creating Bengaluru's iconic commercial site Think Campus in Electronic City - fondly known as "the Dome".

His vision has opened up doors to numerous sectors such as healthcare, software technology, solar power and logistic services, earning him prestigious awards like Businessman of the Year from BSICC & Golden Peacock Eco-Innovative Award by GIIS Balestier. Moreover, his commitment towards Corporate Social Responsibility (CSR) sets him apart from others.</p>
      </div>
  </div>
</div>
</React.Fragment>

  
  );
};
export default AboutUs;