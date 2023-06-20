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
      <header className="relative flex items-center justify-between py-2 px-7 md:py-4 md:px-14">
        <div>
          <Image
            src="/h-logo.webp"
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
          <span className="text-[#a7a4a4] text-xs md:text-base space-x-2">
            {/* TODO: Here change the links to where you want it to go, i have just given /project and /contact-us just to make sure its working */}
            <Link
              href={"/"}
              className={activeLink("/commerical") ? "text-[#30abb7]" : ""}
            >
              Commercial Buildings
            </Link>
            <span>|</span>
            <Link
              href={"/project"}
              className={activeLink("/Residental") ? "text-[#30abb7]" : ""}
            >
              Residential Buildings
            </Link>
            <span>|</span>

            <Link
              href={"/contact-us"}
              className={activeLink("/contact-us") ? "text-[#30abb7]" : ""}
            >
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
      <main className={`${poppins.className} flex flex-col px-7 md:px-14`}>
        {children}
      </main>
      <footer className="footer-wrap px-14 pt-14">
        <div className="px-10 footer-inner py-14">
          <div className="footer-logo">
            <Image src="/g-logo.webp" width={200} height={200} alt="logo" />
          </div>
          <div className="flex flex-wrap footer-dtl">
            <div className="w-full md:h-96 md:w-3/12">
              <div className="py-10 text-white pl-14">
                <h5>INDIA</h5>
                <p>01, Richmond Town, Bengaluru </p>
              </div>
            </div>
            <div className="footer-menu w-full pt-10 pl-10 text-white h-96 md:w-1/4 opacity-60">
              <h5>PRODUCTS</h5> <p className="pt-4 text-white">TECHPARKS</p>
              <p><a href="/Think-Campus1">Think Campus 01</a></p>
              <p><a href="/Think-Campus2">Think Campus 02</a></p>
              <p><a href="/Bosch-coimbatore">BOSCH Coimbatore</a></p>
              <p><a href="/Bosch-bengalore">BOSCH Bengaluru</a></p>
              <p className="pt-4 text-white text-[16px]"><a href="/commerical">COMMERCIAL SPACE</a></p>
              <p className="text-[16px]">GTP Shantinagar</p>
              <p className="pt-4 text-white">RESIDENTIAL</p>
              <p><a href="/Global-Heights">Global Heights</a></p>
              <p><a href="/Global-Palmtrees">Satko Palmtrees</a></p>
            </div>
            <div className="footer-menu w-full pt-10 text-white md:h-96 md:w-1/4 opacity-60">
              <h5>ABOUT US</h5> <p className="pt-4 text-grey"><a href="/about-us">About GTP</a></p>
              <p><a href="/Leadership">People</a></p>
              <p className="pt-4 text-white text-[18px]">
                Corporate Social Responsibility
              </p>
              <p><a href="/contact-us">Contact Us</a></p>
            </div>
            <div className="footer-menu w-full pt-8 text-white md:h-96 md:w-1/4">
              <h5 className="opacity-60">FOLLOW US ON</h5>
              <div className="flex">
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
                    height={200}
                    width={200}
                    alt="..."
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-14 opacity-60">
            <p className="text-white">All rights reserved </p>
            <p className="text-white">Digital Experience: MediaJenie</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Layout;
