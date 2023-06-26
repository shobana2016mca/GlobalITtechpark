import React from "react";
import "swiper/css";
import styles from "@/styles/home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <React.Fragment>
      <div className={`${styles["about-container"]} p-4 md:p-20`}>
        <div className={styles["content"]}>
          <h2 className="text-4xl font-semibold">{`LET’S`} CONNECT</h2>
          <h2 className="text-4xl font-semibold">TO BUILD FOR FUTURE</h2>
          <p> Reach Out for Any Queries</p>
        </div>
        <div className="absolute bottom-[-32px]">
          {" "}
          <Image
            src="/images/Icon.png"
            width={200}
            height={200}
            className="w-16"
            alt="..."
          />
        </div>
      </div>
      <div className="flex flex-col flex-wrap p-4 md:flex-row md:p-20">
        <div className="flex-auto pt-10 md:w-1/5">
          <div className="w-full">
            <h1 className="text-xl font-bold primary-color">Reach us at</h1>{" "}
          </div>
        </div>
        <div className="flex-auto pt-4 md:pl-20 md:pt-0 md:border-l-2 md:w-4/5">
          <div className="w-full">
            <p className="text-sm font-medium leading-loose">
              No.1, Global Tech Park,
              <br />
              Shantinagar, Bengaluru - 560 001
            </p>
            <p className="pt-2 text-sm font-medium leading-loose">
              Call: +91 41501234
              <br />
              +91 98450 12345
            </p>
            <p className="pt-2 text-sm font-medium leading-loose">
              Call: email:
              <br />
              info@globaltechpark.in
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap text-clip md:flex-row md:px-20">
        <div className="flex-auto text-center md:w-1/5">
          <div className="w-full text-xl font-bold primary-color">
            Write to Us{" "}
          </div>
        </div>
        <div className="flex-auto pt-2 md:w-4/5">
          <div className="w-full border-t-[3px]"></div>
        </div>
      </div>
      <div className="flex flex-wrap pt-4 md:px-20">
        <div className="flex-auto hidden md:w-10 md:block">
          <div className="w-full"> </div>
        </div>
        <div className="md:w-[50%] flex-auto md:pr-4">
          <div className="w-full ml-2">
            <form className="pb-20">
              <label className="block pb-10">
                <input
                  type="text"
                  className="pl-2 border-b outline-0 w-11/12 md:w-3/5 font-light border-[#2d95a7]"
                  placeholder="Your Name"
                />
              </label>
              <label className="block pb-10">
                <input
                  type="text"
                  className=" pl-2 border-b outline-0 w-11/12 md:w-3/5 font-light border-[#2d95a7]"
                  placeholder="Your Phone Number"
                />
              </label>
              <label className="block pb-10">
                <input
                  type="email"
                  className=" pl-2 border-b outline-0 w-11/12 md:w-3/5 font-light border-[#2d95a7]"
                  placeholder="Your Email"
                />
              </label>
              <label className="block pb-10">
                <textarea
                  className=" pl-2 border h-24 outline-0 w-11/12 md:w-3/5 font-light border-[#2d95a7]"
                  placeholder="Your Name"></textarea>
              </label>
              <button className="bg-[#30abb7] text-white p-2 w-11/12 md:w-auto">
                Send Message <span className="ml-4">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row md:px-20">
        <div className="flex-auto text-center md:w-1/5">
          <div className="w-full text-xl font-bold primary-color">
            Write to Us{" "}
          </div>
        </div>
        <div className="flex-auto pt-2 md:w-4/5">
          <div className="w-full border-t-[3px]"></div>
        </div>
      </div>
      <div className="w-full mt-4 md:p-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492134983!2d77.3012646607384!3d12.954459535201714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1686291058877!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="border-2"
          loading="lazy"></iframe>
      </div>
    </React.Fragment>
  );
};
export default ContactUs;
