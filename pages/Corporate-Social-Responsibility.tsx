import styles from "@/styles/home.module.scss";
import Image from "next/image";
import React from "react";
import "swiper/css";
import Link from "next/link";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className={`${styles["about-container"]} p-4 md:p-20`}>
        <div className={styles["content"]}>
          <h2 className="text-5xl font-semibold">Corporate</h2>
          <h2 className="text-5xl font-semibold pt-2">Social Responsibilty</h2>
          <p className="text-3xl font-semibold pt-4">
            {" "}
            Bangalore | 1.2 Million Square-Foot | TCS
          </p>
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
      <div className="flex flex-col flex-wrap p-4 pt-16 md:flex-row md:p-20">
        <div className="flex-auto md:w-1/5">
          <div className="w-full">
            <h1 className="text-2xl font-bold primary-color">
              2 Million <br />
              Square foot
            </h1>
            <h1 className="text-xl font-medium">
              In Commerical <br />
              Spaces
            </h1>{" "}
          </div>
        </div>
        <div className="flex-auto pt-4 md:px-20 md:pt-0 md:w-3/5 md:border-l-2">
          <div className="w-full">
            <p className="text-[16px]  opacity-70">
              Since 1995, GTP has been building some of the most re-cognized
              buildings in South India. Our signature DOME, has been copied by
              many - which we think is the best compliment - over the last 2
              decades.
            </p>
          </div>
        </div>
        <div className="flex-auto pt-4 md:w-1/5 md:pt-0 md:pl-10 md:border-l-2">
          <div className="w-full">
            <p className="text-xl font-medium">
              Electronic City Bengaluru{" "}
            </p>
            <p className="text-xl font-medium">INDIA</p>
          </div>
        </div>
      </div>
      <div className="w-full pt-10 pb-20 overflow-hidden ">
        <Image
          src="/images/GTP_Project_2.jpg"
          className="w-full transition duration-300 ease-in-out hover:scale-110"
          height={600}
          width={1230}
          alt="..."
        />
      </div>
      <div className="flex flex-wrap">
        <div className="flex-auto w-3/6 pr-4 overflow-hidden">
          <Image
            src="/images/GTP_Project_3.jpg"
            className="w-full transition duration-300 ease-in-out hover:scale-110"
            height={900}
            width={600}
            alt="..."
          />
        </div>
        <div className="flex-auto w-3/6 pl-4 overflow-hidden">
          <Image
            src="/images/GTP_Project_4.jpg"
            className="w-full transition duration-300 ease-in-out hover:scale-110"
            height={900}
            width={600}
            alt="..."
          />
        </div>
      </div>

      <div className="w-full py-20 space-y-4">
        <h2 className="text-4xl font-bold text-center primary-color">
          2 Million Square foot
        </h2>
        <p className="mx-auto font-normal text-sm text-center md:w-3/5">
          Since 1995, GTP has been building some of the most recognized
          buildings in South India. Our signature DOME, has been copied by many
          - which we think is the best compliment - over the last 2 decades.
        </p>
        <div className="overflow-hidden">
        <Image
          height={600}
          width={1230}
          src="/images/GTP_Project_5.jpg"
          className="w-full pt-10 transition duration-150 ease-in-out hover:scale-110"
          alt="..."
        /></div>
      </div>

      <div className="flex flex-col flex-wrap space-y-4 md:flex-row md:pr-8 md:pt-10">
        <div className="flex-auto md:w-1/12">
          <div className="w-full">
            {" "}
            <h1 className="mb-3 text-2xl font-bold text-center primary-color md:text-left">
              Other <br></br>Projects
            </h1>
          </div>
        </div>
    
        <div className="flex-auto px-4 md:w-1/4">
          <div className="w-full">
            <div className="overflow-hidden">
            <Link href="/Bosch-bangalore">  <Image
                height={200}
                width={300}
                src="/images/GTP_Project_6.jpg"
                alt="..." className="transition duration-150 ease-in-out hover:scale-110 hover:rotate-3"
              /></Link>
            </div>
            <p className="pt-4 text-left"><Link href="/Bosch-bangalore">BOSCH Bengaluru</Link></p>
          </div>
        </div>
        <div className="flex-auto px-4 md:w-1/4">
          <div className="w-full">
            <div className="overflow-hidden">
            <Link href="/Bosch-bangalore">  <Image
                height={200}
                width={300}
                src="/images/GTP_Project_7.jpg"
                alt="..." className="transition duration-150 ease-in-out hover:scale-110 hover:rotate-3"
              /></Link>
            </div>
            <p className="pt-4 text-left"><Link href="/Bosch-bangalore">BOSCH Bengaluru</Link></p>
          </div>
        </div>
        <div className="flex-auto px-4 md:w-1/4">
          <div className="w-full">
            <div className="overflow-hidden">
            <Link href="/Bosch-bangalore">    <Image
                height={200}
                width={300}
                src="/images/GTP_Project_8.jpg"
                alt="..." className="transition duration-150 ease-in-out hover:scale-110 hover:rotate-3"
              /></Link>
            </div>
            <p className="pt-4 text-left"><Link href="/Bosch-bangalore">BOSCH Bengaluru</Link></p>
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
};
export default AboutUs;
