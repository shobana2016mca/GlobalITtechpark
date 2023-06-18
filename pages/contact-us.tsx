import React, { FormEvent, useState } from "react";
import "swiper/css";
import styles from "@/styles/home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");

          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setSubmitting(false);
  };

  return (
    <React.Fragment>
      <div className={`${styles["about-container"]} p-20 md:p-20`}>
        <div className={styles["content"]}>
          <h2 className="text-4xl font-semibold">LET’S CONNECT</h2>
          <h2 className="text-4xl font-semibold">TO BUILD FOR FUTURE</h2>
          <p> Reach Out for Any Queries</p>
        </div>
        <div className="absolute bottom-[-32px]">
          {" "}
          <Image
            
            src="/images/Icon.png" width={200}
            height={200}
            className="w-16"
            alt="..."
          />
        </div>
      </div>
      <div className="flex flex-wrap p-20 md:p-20">
        <div className="flex-auto w-1/5">
          <div className="w-full">
            <h1 className="text-xl font-bold primary-color">Reach us at</h1>{" "}
          </div>
        </div>
        <div className="flex-auto w-4/5 pl-20 border-l-2">
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
      <div className="flex flex-wrap px-20">
        <div className="flex-auto w-1/5">
          <div className="w-full text-xl font-bold primary-color">
            Write to Us{" "}
          </div>
        </div>
        <div className="flex-auto w-4/5 pt-2">
          <div className="w-full border-t-[3px]"></div>
        </div>
      </div>
      <div className="flex flex-wrap px-20 pt-4">
        <div className="flex-auto w-10">
          <div className="w-full"> </div>
        </div>
        <div className="w-[50%] flex-auto pr-4">
          <div className="w-full">
            <form className="pb-20" onSubmit={handleFormSubmit}>
              <label className="block pb-10">
                <input
                  type="text"
                  className="pl-2 border-b outline-0 w-3/5 font-light border-[#2d95a7]"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </label>
              <label className="block pb-10">
                <input
                  type="text"
                  className=" pl-2 border-b outline-0 w-3/5 font-light border-[#2d95a7]"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </label>
              <label className="block pb-10">
                <input
                  type="email"
                  className=" pl-2 border-b outline-0 w-3/5 font-light border-[#2d95a7]"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>
              <label className="block pb-10">
                <textarea
                  className=" pl-2 border h-24 outline-0 w-3/5 font-light border-[#2d95a7]"
                  placeholder="Your Name"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }></textarea>
              </label>
              <button className="bg-[#30abb7] text-white p-2" type="submit">
                {submitting ? (
                  "Submitting"
                ) : (
                  <>
                    Send Message <span className="ml-4">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-20">
        <div className="flex-auto w-1/5">
          <div className="w-full text-xl font-bold primary-color">
            Write to Us{" "}
          </div>
        </div>
        <div className="flex-auto w-4/5 pt-2">
          <div className="w-full border-t-[3px]"></div>
        </div>
      </div>
      <div className="w-full p-20">
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
