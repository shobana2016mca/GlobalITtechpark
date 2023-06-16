/* eslint-disable @next/next/no-img-element */
import React from "react";
import MenuIcon from "@/components/icons/menu";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Navigation from "./navigation";
import Image from "next/image";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <header className="relative flex items-center justify-between py-2 px-7 md:py-4 md:px-14">
        <div>
<<<<<<< HEAD
          <Image
            src="/h-logo.webp"
=======
          <Image src="/h-logo.webp"
>>>>>>> 7d5c6f0392a4b7f616b8ade0ed6d2da9dcc9e33d
            width={200}
            height={200}
            alt="logo"
            className="md:w-[200px] w-[100px] "
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold md:text-lg">
            We build <br />
            tomorrow’s spaces for work & living.
          </span>
          <span className="text-[#30abb7] text-xs md:text-base">
            Commercial Buildings | Residencial Buildings | Others
          </span>
        </div>
        <div>
          <MenuIcon
            className={`cursor-pointer`}
            height={30}
            width={30}
            onClick={() => setOpen(true)}
          />
        </div>
        <Navigation show={open} onClose={() => setOpen(false)} />
      </header>
      <main className={`${poppins.className} flex flex-col px-7 md:px-14`}>
        {children}
      </main>
      <footer className="footer-wrap px-14 pt-14">
        <div className="px-10 footer-inner py-14">
          <div className="footer-logo">
            <Image src="/g-logo.webp" width={200} height={200} alt="logo" />
          </div>
          <div className="flex flex-wrap footer-dtl">
            <div className="w-full md:h-96 md:w-1/4">
              <div className="py-10 text-white pl-14">
                <h5>INDIA</h5>
                <p>01, Richmond Town, Bengaluru </p>
              </div>
            </div>
            <div className="w-full pt-10 text-white h-96 md:w-1/4">
              <h5>PRODUCTS</h5> <p className="pt-4 text-white">TECHPARKS</p>
              <p>Think Campus 01</p>
              <p>Think Campus 02</p>
              <p>BOSCH Coimbatore</p>
              <p>BOSCH Bengaluru</p>
              <p className="pt-4 text-white text-[18px]">COMMERCIAL SPACE</p>
              <p className="text-[18px]">GTP Shantinagar</p>
              <p className="pt-4 text-white">RESIDENTIAL</p>
              <p>Global Heights</p>
              <p>Satko Palmtrees</p>
            </div>
            <div className="w-full pt-10 text-white md:h-96 md:w-1/4">
              <h5>ABOUT US</h5> <p className="pt-4 text-white">About GTP</p>
              <p>People</p>
              <p className="pt-4 text-white text-[18px]">
                Corporate Social Responsibility
              </p>
              <p className="text-[18px]"></p>GTP Shantinagar
              <p className="pt-4 text-white">RESIDENTIAL</p>
              Global Heights Satko Palmtrees
            </div>
            <div className="w-full pt-10 text-white md:h-96 md:w-1/4">
              FOLLOW US
              <div className="flex">
              <a href="#" className="fa fa-facebook"><Image
  src="/images/fb.png"
  className="pt-2 w-8" height={200} width={200}
  alt="..." /></a>
              <a href="#" className="fa fa-instragram"><Image
  src="/images/instra.png"
  className="p-2 w-12" height={200} width={200}
  alt="..." /></a></div>
            </div>
          </div>
          <div className="flex justify-between px-14">
            <p className="text-white">All rights reserved </p>
            <p className="text-white">Digital Experience: MediaJenie</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Layout;