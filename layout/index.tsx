/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import MenuIcon from "@/components/icons/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Navigation from "./navigation";
import Image from "next/image";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const [open, setOpen] = React.useState(false);
  const currentPath = usePathname();

  const activeLink = (path: string) => {
    return currentPath === path;
  };

  return (
    <React.Fragment>
      <header className="relative flex items-center justify-between px-3 py-4 md:py-12 md:px-14">
        <div className="mr-2">
        <Link href="/">  
       <Image
            src="/h-logo.webp"
            width={200}
            height={200}
            alt="logo"
            className="md:w-[200px] w-[100px] "
          />
</Link>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold lg:text-4xl md:text-3xl">
            We build <br />
            tomorrow’s spaces for work & living.
          </span>
          <span className="text-[#a7a4a4] text-[10px] lg:text-[18px] md:text-lg md:text-bold space-x-2">
            {/* TODO: Here change the links to where you want it to go, i have just given /project and /contact-us just to make sure its working */}
            <Link
              href={"/commercial"}
              className={activeLink("/commercial") ? "text-[#30abb7]" : ""}>
              Commercial Buildings
            </Link>
            <span>|</span>
            <Link
              href={"/Residental"}
              className={activeLink("/Residental") ? "text-[#30abb7]" : ""}>
              Residential Buildings
            </Link>
            <span>|</span>

            <Link
              href={"/contact-us"}
              className={activeLink("/contact-us") ? "text-[#30abb7]" : ""}>
              Others
            </Link>
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
      <main
        className={`${poppins.className} flex flex-col px-4 md:px-14 overflow-hidden`}>
        {children}
      </main>
      <footer className="px-3 footer-wrap md:px-14 pt-14">
        <div className="px-5 md:px-10 footer-inner py-14">
          <div className="footer-logo">
          <Link href="/"><Image src="/g-logo.webp" width={200} height={200} alt="logo" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-10 lg:flex lg:flex-wrap lg:gap-0">
            <div className="w-full md:h-92 md:w-[30%]">
              <div className="text-white md:py-10 md:pl-14">
                <h5 className="opacity-80">INDIA</h5>
                <p className="text-sm opacity-80">
                  01, Richmond Town, Bengaluru{" "}
                </p>
              </div>
            </div>
            <div className="footer-menu w-full lg:pt-10 lg:pl-10 text-white h-92 md:w-[26%] opacity-60">
              <h5>PRODUCTS</h5>{" "}
              <p className="pt-4 text-sm text-white">TECHPARKS</p>
              <p className="text-sm">
                <a href="/Think-Campus1">Think Campus 01</a>
              </p>
              <p className="text-sm">
                <a href="/Think-Campus2">Think Campus 02</a>
              </p>
              <p className="text-sm">
                <a href="/Bosch-coimbatore">BOSCH Coimbatore</a>
              </p>
              <p className="text-sm">
                <a href="/Bosch-bangalore">BOSCH Bengaluru</a>
              </p>
              <p className="pt-4 text-sm text-white">
                <a href="/commericial">COMMERCIAL SPACE</a>
              </p>
              <p className="text-sm">GTP Shantinagar</p>
              <p className="pt-4 text-sm text-white">RESIDENTIAL</p>
              <p className="text-sm">
                <a href="/Global-Heights">Global Heights</a>
              </p>
              <p className="text-sm">
                <a href="/satlko-palmtrees">Satko Palmtrees</a>
              </p>
            </div>
            <div className="footer-menu w-full pt-10 text-white md:h-92 md:w-[30%] opacity-60">
              <h5>ABOUT US</h5>{" "}
              <p className="pt-4 text-sm text-grey">
                <a href="/about-us">About GTP</a>
              </p>
              <p className="text-sm">
                <a href="/Leadership">People</a>
              </p>
              <p className="pt-4 text-sm text-white text-[18px]">
                Corporate Social Responsibility
              </p>
              <p className="text-sm">
                <a href="/contact-us">Contact Us</a>
              </p>
            </div>
            <div className="footer-menu w-full pt-8 text-white md:h-92 md:w-[14%]">
              <h5 className="opacity-60">FOLLOW US ON</h5>
              <div className="flex pt-2">
                <a href="#" className="fa fa-facebook">
                  <Image
                    src="/images/fb.png"
                    className="w-8 pt-2"
                    height={200}
                    width={200}
                    alt="..."
                  />
                </a>
                <a href="#" className="fa fa-instragram">
                  <Image
                    src="/images/instra.png"
                    className="w-12 p-2"
                    height={100}
                    width={200}
                    alt="..."
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-4 lg:px-14 opacity-60">
            <p className="text-sm text-white">All rights reserved </p>
            <p className="text-sm text-white">Digital Experience: MediaJenie</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Layout;
