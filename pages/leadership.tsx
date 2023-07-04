import styles from "@/styles/home.module.scss";
import Image from "next/image";
import React from "react";
import "swiper/css";
import Link from "next/link";

const Leadership = () => {
  return (
    <React.Fragment>
      <div className={`${styles["about-container"]} p-4 md:p-20`}>
        <div className={styles["content"]}>
          <h2 className="text-4xl font-semibold">CORPORATE</h2>
          <h2 className="text-4xl font-semibold">PROFILE</h2>
          <p> Since 2000 | India-Bangalore headquarter</p>
        </div>
        <div className="absolute bottom-[-32px]">
          <Image
            src="/images/Icon.png"
            height={200}
            width={200}
            className="w-16"
            alt="..."
          />
        </div>
      </div>
      <div className="flex flex-wrap p-4 pt-14 md:p-20">
        <div className="flex-auto w-1/5">
          <div className="w-full">
            <h1 className="text-xl font-bold md:text-4xl primary-color">Who</h1>{" "}
            <h1 className="text-xl font-bold md:text-4xl primary-color">
              We are
            </h1>{" "}
          </div>
        </div>
        <div className="flex-auto w-4/5 pl-8 border-l-2 md:pl-20">
          <div className="w-full">
            <p className="text-sm md:text-[16px] leading-loose opacity-50">
              Since its inception, Global Tech Park (GTP) has consistently
              proven to be a venture of bold ambition and success. Led by
              Chairman Satish P Chandra, GTP has grown from developing
              Bangalore&#39;s iconic&#36;the Dome&#36; into a holding company
              across the globe with widespread investments in software
              engineering, healthcare technology and renewable solar energy
              operations.
            </p>
            <p className="text-[16px] font-normal leading-loose pt-2 opacity-50">
              We are known for taking risks whilst creating an encouraging
              environment for professionals alike. Today we operate in multiple
              countries including UK/USA/Switzerland/Netherlands/Singapore among
              others; driving impactful progress wherever an opportunity arises.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-20">
        <div className="flex-auto w-1/5">
          <div className="w-full text-4xl font-bold primary-color">People </div>
        </div>
        <div className="flex-auto w-4/5 pt-2 mt-10 md:mt-0">
          <div className="w-full border-t-[3px]"></div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap px-4 pt-4 md:flex-row md:px-20">
        <div className="flex-auto hidden w-1/5 md:block">
          <div className="w-full"> </div>
        </div>
        <div className="md:w-[30%] flex-auto pr-4">
          <div className="w-full">
            <h1 className="mb-3 text-base font-semibold md:text-2xl">
              Sathish Chandra
            </h1>
            <Image
              src="/images/Sathish-P-Chandra.jpg"
              height={300}
              width={300}
              alt="..."
            />
          </div>
        </div>
        <div className="flex-auto md:w-6/12 md:pt-5 md:pl-10">
          <div className="w-full">
            <p className=" text-[16px] leading-loose mt-3 opacity-50">
              Satish P Chandra is the inspirational Chairman and Managing
              Director of Global Tech Park, a rapidly expanding provider of
              infrastructure solutions in India. He was instrumental in creating
              Bengaluru&#39; s iconic commercial site Think Campus in Electronic
              City - fondly known as &#36;the Dome&#36;. His vision has opened
              up doors to numerous sectors such as healthcare, software
              technology, solar power and logistic services, earning him
              prestigious awards like Businessman of the Year from BSICC &
              Golden Peacock Eco-Innovative Award by GIIS Balestier. Moreover,
              his commitment towards Corporate Social Responsibility (CSR) sets
              him apart from others.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pt-20 pb-20">
        <Image
          src="/images/GTP_About-Us_2.jpg"
          height={500}
          width={1230}
          className="w-full scale-110"
          alt="..."
        />
      </div>
      <div className="flex flex-wrap px-4 pt-4 md:px-20">
        <div className="flex-auto hidden w-1/5 md:block">
          <div className="w-full"> </div>
        </div>
        <div className="w-[30%] flex-auto pr-4">
          <div className="w-full">
            <h1 className="mb-3 text-2xl font-semibold">Chetan Chandra</h1>
            <Image
              src="/images/Chetan-Chandra.jpg"
              height={300}
              width={300}
              alt="..."
            />
          </div>
        </div>
        <div className="flex-auto md:pt-5 md:w-6/12 md:pl-10">
          <div className="w-full">
            <p className="text-[16px] leading-loose mt-3 opacity-50">
              Satish P Chandra is the inspirational Chairman and Managing
              Director of Global Tech Park, a rapidly expanding provider of
              infrastructure solutions in India. He was instrumental in creating
              Bengaluru&#39; s iconic commercial site Think Campus in Electronic
              City - fondly known as &#36;the Dome&#36;. His vision has opened
              up doors to numerous sectors such as healthcare, software
              technology, solar power and logistic services, earning him
              prestigious awards like Businessman of the Year from BSICC &
              Golden Peacock Eco-Innovative Award by GIIS Balestier. Moreover,
              his commitment towards Corporate Social Responsibility (CSR) sets
              him apart from others.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap px-4 pt-6 md:flex-row md:px-20 md:pt-10">
        <div className="flex-auto hidden w-1/5 md:block">
          <div className="w-full"> </div>
        </div>
        <div className="md:w-[30%] flex-auto pr-4">
          <div className="w-full">
            <h1 className="mb-3 text-2xl font-semibold">Bindu Chandra</h1>
            <Image
              src="/images/Bindu-Chandra.jpg"
              height={300}
              width={300}
              alt="..."
            />
          </div>
        </div>
        <div className="flex-auto md:pt-5 md:pl-10 md:w-6/12">
          <div className="w-full">
            <p className=" text-[16px] font-normal leading-loose mt-3 opacity-50">
              Satish P Chandra is the inspirational Chairman and Managing
              Director of Global Tech Park, a rapidly expanding provider of
              infrastructure solutions in India. He was instrumental in creating
              Bengaluru&#39; s iconic commercial site Think Campus in Electronic
              City - fondly known as the Dome. His vision has opened up doors to
              numerous sectors such as healthcare, software technology, solar
              power and logistic services, earning him prestigious awards like
              Businessman of the Year from BSICC & Golden Peacock Eco-Innovative
              Award by GIIS Balestier. Moreover, his commitment towards
              Corporate Social Responsibility (CSR) sets him apart from others.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Leadership;
