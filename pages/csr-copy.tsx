import React from "react";
import 'swiper/css';
import styles from "@/styles/home.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

const Csr = () => {
  return (
<React.Fragment>
  
  <div className={`${styles["about-container"]} p-20 md:p-20`}>
  <div className={styles["content"]}>
    <h2 className="text-4xl font-semibold">CORPORATE</h2><h2 className="text-4xl font-semibold">SOCIAL RESPONSIBILITY</h2>
    <p> Making Positive Impact in the Society</p>
  </div>
  <div className="absolute bottom-[-32px]"> <Image
  src="/images/Icon.png" height={200} width={200}
  className="w-16"
  alt="..." />
</div>
</div>
<div className="flex flex-wrap p-20 md:p-20">
  <div className="w-1/5 flex-auto">
    <div className="w-full"><h1 className="text-xl font-bold primary-color">Our Motto</h1> </div>
  </div>
  <div className="w-4/5 flex-auto pl-20 border-l-2">
    <div className="w-full">
      <p className="text-sm font-normal leading-loose">Since its inception, Global Tech Park (GTP) has consistently proven to be a venture of bold ambition and success. Led by Chairman Satish P Chandra, GTP has grown from developing Bangalore&#36;s iconic &#39;The Dome &#39; into a holding company across the globe with widespread investments in software engineering,
       healthcare technology and renewable solar energy operations.</p>
       <p className="text-sm font-normal leading-loose pt-2">
We are known for taking risks whilst creating an encouraging environment for professionals alike. Today we operate in multiple countries including UK/USA/Switzerland/Netherlands/Singapore among others; driving impactful progress wherever an opportunity arises.</p></div>
  </div>
</div>
<div className="flex flex-wrap px-20">
  <div className="w-1/5 flex-auto">
    <div className="w-full text-xl font-bold primary-color">Activites </div>
  </div>
  <div className="w-4/5 flex-auto  pt-2">
    <div className="w-full border-t-[3px]">
      </div>
  </div>
</div>
<div className="flex flex-wrap px-20 pt-20">
  
  <div className="w-2/4 flex-auto pr-4">
    <div className="w-full"> <Image width={500}   height={500}
  src="/images/csr.png"
  
  alt="..." />

      </div>
  </div>
  <div className="w-2/4 flex-auto pl-10 pt-5">
    <div className="w-full"><p className=" text-sm font-normal leading-loose mt-3">Satish P Chandra is the inspirational Chairman and Managing Director of Global Tech Park, a rapidly expanding provider of infrastructure solutions in India. He was instrumental in creating Bengaluru&#39;s iconic commercial site Think Campus in Electronic City - fondly known as &#34;the Dome&#34;.

His vision has opened up doors to numerous sectors such as healthcare, software technology, solar power and logistic services, earning him prestigious awards like Businessman of the Year from BSICC & Golden Peacock Eco-Innovative Award by GIIS Balestier. Moreover, his commitment towards Corporate Social Responsibility (CSR) sets him apart from others.</p>
      </div>
  </div>
</div>
<div className="w-full pt-20 pb-20"> <Image 
  src="/images/GTP_About-Us_2.jpg" width={1230}   height={450}
  className="w-full"
  alt="..." />
</div>
<div className="flex flex-wrap px-20 pt-4">
 
  <div className="w-2/5 flex-auto pr-4">
    <div className="w-full">
     <Image 
  src="/images/csr.png" width={500}   height={500}
  
  alt="..." />

      </div>
  </div>
  <div className="md:w-6/12 flex-auto pl-10 pt-5 md:pl-10">
    <div className="w-full"><p className=" text-sm font-normal leading-loose mt-3">Satish P Chandra is the inspirational Chairman and Managing Director of Global Tech Park, a rapidly expanding provider of infrastructure solutions in India. He was instrumental in creating Bengaluru&#39;s iconic commercial site Think Campus in Electronic City - fondly known as &#34;the Dome&#34;.

His vision has opened up doors to numerous sectors such as healthcare, software technology, solar power and logistic services, earning him prestigious awards like Businessman of the Year from BSICC & Golden Peacock Eco-Innovative Award by GIIS Balestier. Moreover, his commitment towards Corporate Social Responsibility (CSR) sets him apart from others.</p>
      </div>
  </div>
</div>
<div className="flex flex-wrap px-20 pt-20">
<div className="w-2/5 md:w-2/5 flex-auto  pt-5">
    <div className="w-full"><p className=" text-sm font-normal leading-loose mt-3">Satish P Chandra is the inspirational Chairman and Managing Director of Global Tech Park, a rapidly expanding provider of infrastructure solutions in India. He was instrumental in creating Bengaluru&#39;s iconic commercial site Think Campus in Electronic City - fondly known as &#34;the Dome&#34;.

His vision has opened up doors to numerous sectors such as healthcare, software technology, solar power and logistic services, earning him prestigious awards like Businessman of the Year from BSICC & Golden Peacock Eco-Innovative Award by GIIS Balestier. Moreover, his commitment towards Corporate Social Responsibility (CSR) sets him apart from others.</p>
      </div>
  </div>
  <div className="w-2/5 flex-auto pr-4 pl-10">
    <div className="w-full">
     <Image 
  src="/images/csr.png" width={500}   height={500}
  
  alt="..." />

      </div>
  </div>
 
</div>

</React.Fragment>

  
  );
};
export default Csr;